import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { CONTIUNE } from '../../../actions/applicants';
import { connect } from 'react-redux';
import Toastr from 'toastr';

export function Contiune(props) {
  const [loading, setLoading] = useState(false);

  const [applicationID, setApplicationID] = useState('APP0814C02424');
  //APP0814C02424
  //APP0903492BE6

  useEffect(() => {
    document.body.style = 'background: white;';
  }, []);

  const onsubmit = (e) => {
    e.preventDefault();

    let data = {
      tracking_id: applicationID,
    };

    setLoading(true);

    // return false;

    const callback = (data) => {
      setLoading(false);

      console.log(data);

      let { email } = data.response.guest;

      localStorage.user = JSON.stringify({
        user: {
          type: 'Guest',
          email: email,
          category: data.response.category,
        },
        trackingId: applicationID,
      });
      props.dispatch({
        type: 'APPLICANT_LOGIN',
        payload: {
          trackingID: applicationID,
          user: {
            type: 'Guest',
            email: email,
            category: data.response.category,
          },
        },
      });

      if (data.response.category === null) {
        props.history.push(`/applicants`);
      } else if (data.response.category === 'REG') {
        props.history.push(`/applicants/regular`);
      } else if (data.response.category === 'FFM') {
        props.history.push(`/applicants/ffm`);
      } else if (data.response.category === 'FFX') {
        props.history.push(`/applicants/ffm-expediated`);
      } else {
        props.history.push(`/applicants`);
      }
    };

    const onError = (err) => {
      setLoading(false);
      Toastr.error('Invaild Tracking Id');

      // console.log('is error');
      console.log(err);
    };

    CONTIUNE(data, callback, onError);
  };

  return (
    <div className="Contiune">
      <div className="container">
        <div className="row">
          <div className="col-md-6 login__box">
            <div className="login__box--content">
              <img src="../images/svg/logo.svg" alt="logo" />

              <p>Continue Application/Follow Up</p>

              <form method="POST" onSubmit={onsubmit}>
                <div className="form-group">
                  <label>Application ID</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Please Provide Tracking ID"
                    value={applicationID}
                    onChange={(e) => setApplicationID(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group ">
                  <button
                    className="btn btn-success-login btn-block "
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? (
                      <div className="spinner-grow" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                    ) : (
                      'Confirm ID'
                    )}
                  </button>
                </div>
              </form>

              <NavLink to="/applicants/login" className="anchor">
                Go back to Submit Application
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Contiune);
