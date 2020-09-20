import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { LOGIN } from '../../../actions/authentication';
import { connect } from 'react-redux';

export function Login(props) {
  const [email, setEmail] = useState('supervisor@example.com');
  const [password, setPassword] = useState('password');

  const onSumbit = (e) => {
    e.preventDefault();
    let data = {
      email,
      password,
    };

    const callback = (res) => {
      if (res.message === 'success') {
        const { response } = res;

        localStorage.user = JSON.stringify({
          user: response.user,
          token: response.token,
        });

        props.dispatch({
          type: 'LOG_USER_IN',
          payload: {
            token: response.token,
            user: {
              ...response.user,
              type: response.user.account_type,
            },
          },
        });

        if (response.user.account_type === 'SP') {
          props.history.push('/supervisors/request');
        }
      }
    };

    const onError = (err) => {
      console.log(err);
    };

    LOGIN(data, callback, onError);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 login__box">
          <div className="login__box--content">
            <img src="/images/svg/logo.svg" alt="logo" />

            <p>Log into your account</p>

            <form onSubmit={onSumbit}>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control "
                  placeholder="sirmudiadavid@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control form-control-pwrd"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <NavLink to="/user/forgot-password" className="anchor">
                Forgot password?
              </NavLink>

              <div className="form-group ">
                <button
                  className="btn btn-success-login btn-block"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = function (state) {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
