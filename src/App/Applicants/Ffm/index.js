import React, { Component } from 'react';
import jQuery from 'jquery';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import TagsInput from 'react-tagsinput';
import { Tooltip } from 'reactstrap';
import 'react-tagsinput/react-tagsinput.css';
import {
  CASE_TYPE,
  SAVE_CASE,
  SAVE_CONTACT,
  GET_CHECKLIST_GROUPS,
  GET_CHECKLIST_GROUPS_BY_ID,
  SAVE_CHECKLIST_DOCUMENT,
  GET_APPLICATION,
} from '../../../actions/applicants';
import swal from 'sweetalert';
import ReadMoreReact from 'read-more-react';
import Toastr from 'toastr';

var checkbox = [];

class FFM extends Component {
  constructor(props) {
    super(props);
    this.handleSwitch = this.handleSwitch.bind(this);
    this.previous = this.previous.bind(this);
    this.previousToggle = this.previousToggle.bind(this);
    this.submitApplication = this.submitApplication.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleCaseSubmition = this.handleCaseSubmition.bind(this);
    this.handleContactSubmition = this.handleContactSubmition.bind(
      this,
    );
    this.handleDocumentSubmition = this.handleDocumentSubmition.bind(
      this,
    );
    this.handleChangeTag = this.handleChangeTag.bind(this);

    this.state = {
      subject: '',
      parties: [],
      case_type: '',
      // case_types: null,
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
    this.handler();
    // this.getCaseTypes();
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
  getCaseTypes() {
    const callback = data => {
      this.setState({
        case_types: data.response.types,
      });
    };

    const onError = err => {
      console.log(err);
    };

    CASE_TYPE(callback, onError);
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

  handleCaseSubmition(e) {
    e.preventDefault();

    let data = {
      subject: this.state.subject,
      parties: this.state.parties,
      case_type: this.state.case_type,
    };

    const callback = data => {
      Toastr.success('Saved!');

      jQuery('#applications').hide();
      jQuery('#contact').toggle('fast');
      jQuery('#control-1').removeClass('card__box-stack-active');
      jQuery('#control-2').addClass('card__box-stack-active');
    };

    const onError = err => {
      console.log(err);
    };

    SAVE_CASE(this.props.trackingId, data, callback, onError);
  }

  handleContactSubmition(e) {
    e.preventDefault();

    let data = {
      applicant_firm: this.state.applicant_firm,
      applicant_fullname: this.state.applicant_fullname,
      applicant_email: this.state.applicant_email,
      applicant_phone_number: this.state.applicant_phone_number,
      applicant_address: this.state.applicant_address,
    };

    const callback = data => {
      Toastr.success('Saved!');

      jQuery('#contact').hide();
      jQuery('#documents').toggle('fast');
      jQuery('[id^=control]').removeClass('card__box-stack-active');
      jQuery('[id^=steps]').removeClass('card__box-stack-active');
      jQuery('#steps-1').addClass('card__box-stack-active');

      this.handleSwitch(1, 1);
    };

    const onError = err => {
      console.log(err);
    };

    SAVE_CONTACT(this.props.trackingId, data, callback, onError);
  }

  handleDocumentSubmition(e) {
    e.preventDefault();

    let params = this.state.switch + 1;
    // let override = this.state.override;
    let document_id = this.state.document_id;

    const documents = new FormData();

    if (this.state.file != null) {
      documents.append('file', this.state.file, this.state.file.name);
    }
    documents.append('checklists', [checkbox]);
    documents.append('additional_info', this.state.additional_info);

    if (document_id) {
      documents.append('override', true);
      documents.append('document_id', document_id);
    }

    const callback = data => {
      Toastr.success('Saved!');

      this.handleSwitch(params, params);
    };

    const onError = err => {
      let { data } = err;
      if (data.message === 'error') {
        swal({
          title: 'Error!',
          text: `${data.responseType}`,
          icon: 'error',
          button: 'Done',
        });
      }
    };

    SAVE_CHECKLIST_DOCUMENT(
      this.props.trackingId,
      documents,
      callback,
      onError,
    );
  }

  handleSwitch(i, id) {
    this.setState({
      switch: id,
    });

    this.setState({
      file: null,
      additional_info: '',
    });
    checkbox = [];

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

  updateFormFields(id) {
    const { checklistGroupDocuments } = this.state;

    this.setState({
      additional_info: '',
      override: false,
      document_id: '',
    });

    let additional_info = [];
    let document_id;

    Object.entries(checklistGroupDocuments).map(item => {
      if (parseInt(item[0]) === parseInt(id)) {
        additional_info.push(item[1].additional_info);
        let { checklists } = item[1];
        checklists.map(item => {
          document_id = item.checklist_document.document_id;
          checkbox.push(item.id);
          return true;
        });
      }

      return true;
    });

    this.setState({
      additional_info: additional_info,
      override: true,
      document_id: document_id,
    });
  }

  handleCheckbox(id) {
    const index = checkbox.indexOf(id);

    if (index > -1) {
      checkbox.splice(index, 1);
    } else {
      checkbox.push(id);
    }
  }

  handleChangeTag(tag) {
    this.setState({ parties: tag });
  }

  previous() {
    jQuery('[id^=control]').removeClass('card__box-stack-active');
    jQuery('[id^=steps]').removeClass('card__box-stack-active');

    jQuery('#applications').toggle('fast');
    jQuery('#contact').hide();
    jQuery('#control-1').addClass('card__box-stack-active');
  }
  previousToggle() {
    const getSwitch = this.state.switch;

    if (getSwitch > 1) {
      this.handleSwitch(getSwitch - 1, getSwitch - 1);
    } else {
      jQuery('[id^=control]').removeClass('card__box-stack-active');
      jQuery('[id^=steps]').removeClass('card__box-stack-active');

      jQuery('#applications').hide();
      jQuery('#documents').hide();
      jQuery('#contact').toggle('fast');
      jQuery('#control-2').addClass('card__box-stack-active');
    }
  }

  submitApplication() {
    let query = this.props.user.category;

    this.props.history.push(`/applicants/${query}/review`);
  }

  render() {
    const {
      file,
      subject,
      parties,
      case_type,
      applicant_firm,
      applicant_fullname,
      applicant_email,
      applicant_phone_number,
      applicant_address,
      checklist_group,
      seletedChecklist,
      additional_info,
    } = this.state;

    document.body.style = 'background: #f3f3f3;';
    return (
      <>
        <div className="content-bg">
          <div className="container py-5">
            <div className="row row-space">
              <div className="col-xs-12 col-md-12 col-lg-4">
                <div
                  className="card__box card__box-stack card__box-stack-active"
                  id="control-1"
                >
                  <img
                    className="card__box-stack-img"
                    src="../images/svg/book-open.svg"
                    alt="book-open"
                  />

                  <div className="card__box--content">
                    <p>Application Information</p>
                    <span>Provide your case details</span>
                  </div>
                </div>

                <div
                  className="card__box card__box-stack"
                  id="control-2"
                >
                  <img
                    className="card__box-stack-img"
                    src="../images/svg/user-bg.svg"
                    alt="user-bg"
                  />

                  <div className="card__box--content">
                    <p>Contact Information</p>
                    <span>
                      Kindly provide us with your contact details
                    </span>
                  </div>
                </div>

                {checklist_group != null ? (
                  checklist_group.map((item, i) => {
                    return (
                      <div
                        key={i}
                        className="card__box card__box-stack"
                        onClick={() =>
                          this.handleSwitch(i + 1, item.id)
                        }
                        id={`steps-${item.id}`}
                      >
                        <img
                          className="card__box-stack-img"
                          src="../images/svg/folder.svg"
                          alt="folder"
                        />

                        <div className="card__box--content">
                          <p>
                            {item.label != null
                              ? item.label
                              : item.name}
                          </p>
                          <span>Provide all relevant documents</span>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <></>
                )}
              </div>

              <div className="col-xs-12 col-md-12 col-lg-8">
                <div
                  className="card__box card__box__large "
                  id="applications"
                >
                  <div className="card__box__large-content">
                    <form
                      method="POST"
                      onSubmit={this.handleCaseSubmition}
                    >
                      <div className="form-group">
                        <label>Subject</label>
                        <input
                          type="text"
                          className="form-control"
                          aria-describedby="Access Bank Merger"
                          placeholder="Access Bank Merger"
                          value={subject === null ? '' : subject}
                          onChange={e =>
                            this.setState({
                              subject: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>
                          Parties{' '}
                          <div className="label-sub">
                            {' '}
                            Press Enter to add a party{' '}
                          </div>{' '}
                        </label>
                        <TagsInput
                          // className="form-control"

                          value={parties === null ? '' : parties}
                          onChange={this.handleChangeTag}
                          placeholder=" Add more +"
                          required={true}
                        />
                      </div>
                      <div className="form-group">
                        <label>Transaction type</label>
                        <div className="radio-inline">
                          <label className="radio">
                            Small{' '}
                            <input
                              type="radio"
                              name="case_type"
                              value={
                                case_type === null ? '' : case_type
                              }
                              onChange={e =>
                                this.setState({
                                  case_type: 'SM',
                                })
                              }
                              checked={case_type === 'SM'}
                            />
                            <span className="checkmark"></span>
                            <i
                              className="la la-info-circle text-hover-primary"
                              title=""
                              id="TooltipExample"
                            >
                              <Tooltip
                                placement="right"
                                isOpen={this.state.tooltipOpen}
                                target="TooltipExample"
                                toggle={this.toggle}
                              >
                                Transaction below 1 Million Naira"
                              </Tooltip>
                            </i>
                          </label>
                          <label className="radio">
                            Large{' '}
                            <input
                              type="radio"
                              name="case_type"
                              value={
                                case_type === null ? '' : case_type
                              }
                              onChange={e =>
                                this.setState({
                                  case_type: 'LG',
                                })
                              }
                              checked={case_type === 'LG'}
                            />
                            <span className="checkmark"></span>
                            <i
                              className="la la-info-circle text-hover-primary"
                              title=""
                              id="TooltipExample2"
                            >
                              <Tooltip
                                placement="right"
                                isOpen={this.state.tooltipOpen2}
                                target="TooltipExample2"
                                toggle={this.toggle2}
                              >
                                Transaction above 1 Million Naira"
                              </Tooltip>
                            </i>
                          </label>
                        </div>
                      </div>

                      <div className="form-group right">
                        <button
                          className="btn btn-success"
                          type="submit"
                        >
                          Next
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                <div
                  className="card__box card__box__large hide"
                  id="contact"
                >
                  <div className="card__box__large-content">
                    <form
                      method="POST"
                      onSubmit={this.handleContactSubmition}
                    >
                      <div className="form-group">
                        <label>Applicant/Representing Firm </label>
                        <input
                          type="text"
                          className="form-control"
                          aria-describedby="Enter applicant/representing firm"
                          placeholder="Enter applicant/representing firm"
                          value={
                            applicant_firm === null
                              ? ''
                              : applicant_firm
                          }
                          onChange={e =>
                            this.setState({
                              applicant_firm: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>Contact Person</label>
                        <input
                          type="text"
                          className="form-control"
                          aria-describedby="Plese enter your full name"
                          placeholder="Plese enter your full name"
                          value={
                            applicant_fullname === null
                              ? ''
                              : applicant_fullname
                          }
                          onChange={e =>
                            this.setState({
                              applicant_fullname: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>Email Address</label>
                        <input
                          type="text"
                          className="form-control"
                          aria-describedby="Please enter your email address, e.g john@fccpc.gov"
                          placeholder="Please enter your email address, e.g john@fccpc.gov"
                          value={
                            applicant_email === null
                              ? ''
                              : applicant_email
                          }
                          onChange={e =>
                            this.setState({
                              applicant_email: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>Phone Number</label>
                        <input
                          type="number"
                          className="form-control"
                          aria-describedby="Plese enter your telephone number"
                          placeholder="Plese enter your telephone number"
                          value={
                            applicant_phone_number === null
                              ? ''
                              : applicant_phone_number
                          }
                          onChange={e =>
                            this.setState({
                              applicant_phone_number: e.target.value,
                            })
                          }
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label>Address</label>
                        <textarea
                          type="text"
                          className="form-control"
                          cols="50"
                          rows="50"
                          value={
                            applicant_address === null
                              ? ''
                              : applicant_address
                          }
                          onChange={e =>
                            this.setState({
                              applicant_address: e.target.value,
                            })
                          }
                          required
                        ></textarea>
                      </div>

                      <div className="form-group right btn-group">
                        <div
                          className="btn btn-success-pale"
                          onClick={() => this.previous()}
                        >
                          Previous
                        </div>
                        <button
                          className="btn btn-success"
                          type="submit"
                        >
                          Next
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                <div
                  className="card__box card__box__large hide"
                  id="documents"
                >
                  {seletedChecklist != null ? (
                    <form
                      method="POST"
                      onSubmit={this.handleDocumentSubmition}
                    >
                      <div className="card__box__large-content">
                        <div className="card__box__large-content--intro">
                          <p>
                            Kindly check boxes of documents being
                            submitted and in cases where document is
                            not available, please state in additional
                            information section.
                          </p>

                          <NavLink to="/applicants/regular-checklist">
                            View the FFM Application Document
                            Checklist to see what is required.
                          </NavLink>
                        </div>

                        <div className="form-group">
                          {seletedChecklist.map(item => {
                            return (
                              <div
                                className="form-check form-check-inline"
                                key={item.id}
                              >
                                <input
                                  id={`findbox-${item.id}`}
                                  className="form-check-input custom-checkbox"
                                  type="checkbox"
                                  onChange={() =>
                                    this.handleCheckbox(item.id)
                                  }
                                  defaultChecked={checkbox.find(
                                    x => x === item.id,
                                  )}
                                />

                                <label
                                  titlte={item.name}
                                  className="form-check-label"
                                  htmlFor="inlineCheckbox1"
                                >
                                  <ReadMoreReact
                                    text={item.name}
                                    min={55}
                                    ideal={55}
                                    max={65}
                                    readMoreText="view more..."
                                  />
                                </label>
                              </div>
                            );
                          })}

                          <div id="drop-area">
                            <input
                              type="file"
                              id="fileElem"
                              onChange={e => {
                                this.setState({
                                  file: e.target.files[0],
                                });
                              }}
                            />

                            <label
                              className="drop-label"
                              htmlFor="fileElem"
                            >
                              <img
                                src="../images/svg/file.svg"
                                alt="file"
                              />
                              <br />
                              Drop file here or click to upload.
                            </label>
                          </div>

                          {file != null ? (
                            <p className="file-added">
                              <b>Name: {file.name}</b>
                            </p>
                          ) : (
                            <></>
                          )}
                        </div>

                        <div className="form-group">
                          <label>Additional Information</label>
                          <textarea
                            type="text"
                            className="form-control"
                            cols="50"
                            rows="50"
                            value={
                              additional_info === null
                                ? ''
                                : additional_info
                            }
                            onChange={e =>
                              this.setState({
                                additional_info: e.target.value,
                              })
                            }
                          ></textarea>
                        </div>

                        <div className="form-group right btn-group">
                          <div
                            className="btn btn-success-pale"
                            onClick={() => this.previousToggle()}
                          >
                            Previous
                          </div>
                          <button
                            className="btn btn-success"
                            type="submit"
                          >
                            Next
                          </button>
                        </div>
                      </div>
                    </form>
                  ) : (
                    <></>
                  )}
                </div>

                {/*  */}
              </div>
            </div>
            <div
              className="btn-group"
              style={{ float: 'right', paddingBottom: 50 }}
            >
              <button
                className="btn btn-success float-right"
                onClick={this.submitApplication}
              >
                Review Application
              </button>
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

export default connect(mapStateToProps, mapDispatchToProps)(FFM);
