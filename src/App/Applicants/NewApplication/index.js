import React from 'react';
import { NavLink } from 'react-router-dom';
import { SAVE_APPLICATION_CATEGORY } from '../../../actions/applicants';
import { connect } from 'react-redux';

export function NewApplication(props) {
  const handleCategory = (data) => {
    const callback = (response) => {
      switch (data) {
        case 'REG':
          props.dispatch({
            type: 'SET_APPLICANT_CATEGORY',
            payload: data,
          });
          props.history.push('/applicants/regular');
          break;
        case 'FFM':
          props.dispatch({
            type: 'SET_APPLICANT_CATEGORY',
            payload: data,
          });
          props.history.push('/applicants/ffm');
          break;
        case 'FFX':
          props.dispatch({
            type: 'SET_APPLICANT_CATEGORY',
            payload: data,
          });
          props.history.push('/applicants/ffm-expediated');
          break;

        default:
          break;
      }
    };

    const onError = (err) => {
      console.log(err);
    };

    SAVE_APPLICATION_CATEGORY(
      props.trackingId,
      data,
      callback,
      onError,
    );
  };
  document.body.style = 'background: #f3f3f3;';
  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-xs-12 col-md-12 col-lg-4 yellow__info-box">
            <img
              className="yellow__info-box-icon"
              src="../images/svg/info_green.svg"
              alt="sign-out"
            />
            <p className="yellow_info-box-body">
              <span className="yellow_info-box-content">
                {' '}
                View the checklist of required documents before you
                proceed to submitting a new application
              </span>
            </p>
          </div>
        </div>
        <p className="heading-intro">Select Application Type</p>
        <div className="row row-space">
          <div className="col-xs-12 col-md-12 col-lg-4 ">
            <NavLink to="#" onClick={() => handleCategory('REG')}>
              <div
                className={`card__box card__box--white ${
                  props.user.category === 'REG'
                    ? 'card__box--active'
                    : ''
                }`}
              >
                <img
                  src="../images/svg/layout_right_panel.svg"
                  alt="layout_right_panel"
                />
                <img
                  className="card__box-icon"
                  src="../images/svg/angle-double-left.svg"
                  alt="angle-double-left"
                />
                <p className="card__box-text-intro">Regular</p>
                <span className="card__box-text-span">
                  60 Days to Process
                </span>
              </div>
            </NavLink>

            <div className="card__box-status">
              <img
                src="../images/svg/check-done.svg"
                alt="check-done"
              />
              <NavLink to="/applicants/regular-checklist">
                View Regular Document Checklist
              </NavLink>
            </div>
          </div>

          <div className="col-xs-12 col-md-12 col-lg-4 ">
            <NavLink to="#" onClick={() => handleCategory('FFM')}>
              <div
                className={`card__box card__box--white ${
                  props.user.category === 'FFM'
                    ? 'card__box--active'
                    : ''
                }`}
              >
                <img
                  src="../images/svg/layout_left_panel.svg"
                  alt="layout_left_panel"
                />
                <img
                  className="card__box-icon"
                  src="../images/svg/angle-double-left.svg"
                  alt="angle-double-left"
                />
                <p className="card__box-text-intro">FFM</p>
                <span className="card__box-text-span">
                  30 Days to Process
                </span>
              </div>
            </NavLink>

            <div className="card__box-status">
              <img
                src="../images/svg/check-done.svg"
                alt="check-done"
              />
              <NavLink to="/applicants/ffm-checklist">
                View FFM Document Checklist
              </NavLink>
            </div>
          </div>

          <div className="col-xs-12 col-md-12 col-lg-4 ">
            <NavLink to="#" onClick={() => handleCategory('FFX')}>
              <div
                className={`card__box card__box--white ${
                  props.user.category === 'FFX'
                    ? 'card__box--active'
                    : ''
                }`}
              >
                <img
                  src="../images/svg/layout_top_panel.svg"
                  alt="layout_top_panel"
                />
                <img
                  className="card__box-icon"
                  src="../images/svg/angle-double-left.svg"
                  alt="angle-double-left"
                />
                <p className="card__box-text-intro">FFM Expediated</p>
                <span className="card__box-text-span">
                  15 Days to Process
                </span>
              </div>
            </NavLink>

            <div className="card__box-status">
              <img
                src="../images/svg/check-done.svg"
                alt="check-done"
              />
              <NavLink to="/applicants/ffm-expediated-checklist">
                View FFM Expediated Document Checklist
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = function (state) {
  return {
    user: state.user,
    trackingId: state.trackingId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewApplication);
