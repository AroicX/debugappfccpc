import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { LOGIN } from '../../../actions/applicants';
import { connect } from 'react-redux';
import swal from 'sweetalert';

export function Login(props) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.body.style = 'background: white;';
  }, []);
  const onsubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    let data = {
      email: email,
    };

    const callback = (data) => {
      setLoading(false);

      swal({
        title: 'Registration Successful!',
        text: `Please check your email for 'Tracking ID'`,
        icon: 'success',
        button: 'Done',
      }).then((value) => {
        props.history.push(`/applicants/contiune`);
      });

      /*
      localStorage.guest = JSON.stringify({
        user_type: 'Guest',
        trackingId: data.response.tracking_id,
      });
      */
    };
    const onError = (err) => {
      setLoading(false);
      console.log(err);
    };

    LOGIN(props.dispatch, data, callback, onError);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 login__box">
          <div className="login__box--content">
            <img src="/images/svg/logo.svg" alt="logo" />

            <p>Submit Application</p>
            <span>
              Enter your email to begin your application process
            </span>

            <form method="POST" onSubmit={onsubmit}>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <button
                  className="btn btn-success-login btn-block "
                  type="submit"
                >
                  {loading ? (
                    <div className="spinner-grow" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  ) : (
                    '   Begin Process'
                  )}
                </button>
              </div>
            </form>

            <NavLink to="/applicants/contiune" className="anchor">
              Click here if you have an existing application or to
              upload follow up documents
            </NavLink>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
