import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FORGOT_PASSWORD } from '../../../actions/authentication';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');

  const onSumbit = e => {
    e.preventDefault();
    let data = {
      email,
    };

    const callback = response => {
      console.log(response);
    };

    const onError = err => {
      console.log(err);
    };

    FORGOT_PASSWORD(data, callback, onError);
  };
  document.body.style = 'background: white;';
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 login__box">
          <div className="login__box--content">
            <img src="/images/svg/logo.svg" alt="logo" />

            <p>Forgot Password</p>
            <form onSubmit={onSumbit}>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control "
                  placeholder="sirmudiadavid@gmail.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-group ">
                <button
                  className="btn btn-success-login btn-block "
                  type="submit"
                >
                  Confirm Email
                </button>
              </div>
            </form>

            <NavLink to="/user/login" className="anchor">
              Go back to login
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
