import React, { Component } from 'react';
import jQuery from 'jquery';
import { connect } from 'react-redux';

import {
  GET_CHECKLIST_GROUPS,
  GET_CHECKLIST_GROUPS_BY_ID,
  SAVE_APPLICATION,
  GET_APPLICATION,
} from '../../../actions/applicants';
import Toastr from 'toastr';

class Review extends Component {
  constructor(props) {
    super(props);
    this.handleSwitch = this.handleSwitch.bind(this);

    this.submitApplication = this.submitApplication.bind(this);

    this.state = {
      subject: '',
      parties: [],
      case_type: '',

      checklist_group: null,
      applicant_firm: '',
      applicant_fullname: '',
      applicant_email: '',
      applicant_phone_number: '',
      applicant_address: '',
      seletedChecklist: null,
      file: null,
      additional_info: '',
      checklistIds: [],
      checklistGroupDocuments: [],
      tooltipOpen: false,
      tooltipOpen2: false,

      switch: 0,
    };
    this.toggle = this.toggle.bind(this);
    this.toggle2 = this.toggle2.bind(this);
  }

  toggle() {
    this.setState({ tooltipOpen: !this.state.tooltipOpen });
  }

  toggle2() {
    this.setState({ tooltipOpen2: !this.state.tooltipOpen2 });
  }

  UNSAFE_componentWillMount() {
    if (this.props.match.params.query !== this.props.user.category) {
      this.props.history.push('/applicants');
    }
    this.handler();
    this.getChecklistGroup();
    this.getApplicationDetails();
  }

  getApplicationDetails() {
    const callback = data => {
      let _case = data.response.case;

      this.setState({
        subject: _case.subject,
        parties: data.response.case_parties,
        case_type: _case.case_type,
        applicant_firm: _case.applicant_firm,
        applicant_fullname: _case.applicant_fullname,
        applicant_email: _case.applicant_email,
        applicant_phone_number: _case.applicant_phone_number,
        applicant_address: _case.applicant_address,
        checklistIds: data.response.checklistIds,
        checklistGroupDocuments:
          data.response.checklistGroupDocuments,
      });
    };

    const onError = err => {
      console.log(err);
    };

    GET_APPLICATION(this.props.trackingId, callback, onError);
  }

  getChecklistGroup() {
    const callback = data => {
      this.setState({
        checklist_group: data.response.checklist_groups,
      });
    };

    const onError = err => {
      console.log(err);
    };

    GET_CHECKLIST_GROUPS(callback, onError);
  }

  handler = () => {
    jQuery(document).ready(function($) {
      $('[id^=control]').each(function(index, el) {
        $(this).click(function() {
          $('#control-1').removeClass('card__box-stack-active');
          $('#control-2').removeClass('card__box-stack-active');
          $('#control-3').removeClass('card__box-stack-active');
          $('[id^=steps]').removeClass('card__box-stack-active');

          if ($(this).attr('id') === 'control-1') {
            $('#contact').hide();
            $('#documents').hide();
            $(this).addClass('card__box-stack-active');
            $('#applications').toggle('fast');
          }
          if ($(this).attr('id') === 'control-2') {
            $('#applications').hide();
            $('#documents').hide();
            $(this).addClass('card__box-stack-active');
            $('#contact').toggle('fast');
          }
          if ($(this).attr('id') === 'control-3') {
            $('#applications').hide();
            $('#contact').hide();
            $(this).addClass('card__box-stack-active');
            $('#documents').toggle('fast');
          }
        });
      });
    });
  };

  handleSwitch(i, id) {
    this.setState({
      switch: id,
    });

    this.setState({
      file: null,
      additional_info: '',
    });

    jQuery('[id^=control]').removeClass('card__box-stack-active');
    jQuery('[id^=steps]').removeClass('card__box-stack-active');

    jQuery('#documents').hide();
    jQuery('#applications').hide();
    jQuery('#contact').hide();
    jQuery('#documents').toggle('fast');
    jQuery(`#steps-${i}`).addClass('card__box-stack-active');

    const callback = data => {
      this.setState({
        seletedChecklist: data.response.checklists,
      });
      this.updateFormFields(id);
    };

    const onError = err => {
      console.log(err);
    };

    GET_CHECKLIST_GROUPS_BY_ID(id, callback, onError);
  }

  submitApplication() {
    const callback = response => {
      if (response.message === 'success') {
        Toastr.success('Application Saved!');

        let query = this.props.user.category;

        this.props.history.push(
          `/applicants/${query}/application-success`,
        );
      }
    };

    const onError = err => {
      console.log(err);
    };

    SAVE_APPLICATION(this.props.trackingId, callback, onError);
  }

  render() {
    const {
      // file,
      subject,
      parties,
      // case_type,
      applicant_firm,
      applicant_fullname,
      applicant_email,
      applicant_phone_number,
      applicant_address,

      checklistGroupDocuments,
      // seletedChecklist,
      // additional_info,
      //
    } = this.state;

    parties.forEach(item => {
      console.log(item);
    });

    return (
      <>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-12 ">
              <div
                className="card__box card__box__large  rmv-height add-mgbottom "
                id="applications"
              >
                <div className="card__box__large-content">
                  <h3 className="checklist-header">
                    Summary of Application
                  </h3>

                  <p className="review-description">
                    Review your entries for any kind of error. Kindly
                    note that you cannot edit information once it has
                    been submitted.
                  </p>

                  <p className="section-header">
                    Application Case Information
                  </p>

                  <div className="grid-col-2">
                    <div className="grid-row-2">
                      <h4 className="info-title">Subject</h4>
                      <h4>{subject}</h4>
                    </div>
                    <div className="grid-row-2">
                      <h4 className="info-title">Filling Fees</h4>
                      <h4>Paid</h4>
                    </div>
                    <div className="grid-row-2">
                      <h4 className="info-title">Parties:</h4>
                      <h4>{parties}</h4>
                    </div>
                    <div className="grid-row-2">
                      <h4 className="info-title">Processing Fees:</h4>
                      <h4>Not Paid</h4>
                    </div>
                    <div className="grid-row-2">
                      <h4 className="info-title">
                        Transaction Type:
                      </h4>
                      <h4>Small</h4>
                    </div>
                  </div>

                  <p className="section-header">
                    Contact Information
                  </p>
                  <div className="grid-col-2">
                    <div className="grid-row-2">
                      <h4 className="info-title">
                        Applicant/Representing Firm
                      </h4>
                      <h4>{applicant_firm}</h4>
                    </div>
                    <div className="grid-row-2">
                      <h4 className="info-title">Contact Person</h4>
                      <h4>{applicant_fullname}</h4>
                    </div>
                    <div className="grid-row-2">
                      <h4 className="info-title">Email address:</h4>
                      <h4>{applicant_email}</h4>
                    </div>
                    <div className="grid-row-2">
                      <h4 className="info-title">Phone number:</h4>
                      <h4>{applicant_phone_number}</h4>
                    </div>
                    <div className="grid-row-2">
                      <h4 className="info-title">Address:</h4>
                      <h4>{applicant_address}</h4>
                    </div>
                  </div>

                  <p className="section-header">Relevant Documents</p>
                  <div className="grid-col-2">
                    {Object.entries(checklistGroupDocuments).map(
                      item => {
                        return (
                          <div
                            className="grid-col-2-files my-5"
                            key={item[0]}
                          >
                            <img
                              src="/images/png/pdf.png"
                              alt="pdf"
                            />

                            <h4> {item[1].file}</h4>
                            <a
                              className="btn btn-success font-fix"
                              href={`https://fccpc.techbarn.ng/api/application/document/download/${item[1].id}`}
                              // target={`_blank`}
                              download={`https://fccpc.techbarn.ng/api/application/document/download/${item[1].id}`}
                            >
                              {' '}
                              Download
                            </a>
                          </div>
                        );
                      },
                    )}

                    {/* <div className="grid-row-2">
                      <h4 className="info-title">
                        Additional Information:
                      </h4>
                      <h4>gbas gbos</h4>
                    </div> */}
                  </div>
                  <div className="grid-col-2-btn ">
                    <button
                      className="btn btn-success-pale width-100"
                      onClick={() => this.props.history.goBack()}
                    >
                      Go back to edit
                    </button>

                    <button
                      className="btn btn-success"
                      type="submit"
                      onClick={this.submitApplication}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Review);
