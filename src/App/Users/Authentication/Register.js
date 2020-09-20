import React, { useState } from 'react';

import { REGISTER } from '../../../actions/authentication';

export default function Register() {
  const [account_type, setaccount_type] = useState('');
  const [first_name, setfirst_name] = useState('');
  const [last_name, setlast_name] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setpassword_confirmation] = useState(
    '',
  );

  const onSumbit = e => {
    e.preventDefault();
    let data = {
      account_type,
      first_name,
      last_name,
      email,
      password,
      password_confirmation,
    };

    const callback = response => {
      console.log(response);
    };

    const onError = err => {
      console.log(err);
    };

    REGISTER(data, callback, onError);
  };

  document.body.style = 'background: white;';
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 login__box login__box__reg">
          <div className="login__box--content">
            <img src="/images/svg/logo.svg" alt="logo" />

            <p>Register your account</p>

            <form onSubmit={onSumbit}>
              <div className="form-group">
                <label>Account Type</label>
                <input
                  type="text"
                  className="form-control "
                  value={account_type}
                  onChange={e => setaccount_type(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  className="form-control form-control-pwrd"
                  value={first_name}
                  onChange={e => setfirst_name(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  className="form-control form-control-pwrd"
                  value={last_name}
                  onChange={e => setlast_name(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control form-control-pwrd"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control form-control-pwrd"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label> Confirm Password</label>
                <input
                  type="password"
                  className="form-control form-control-pwrd"
                  value={password_confirmation}
                  onChange={e =>
                    setpassword_confirmation(e.target.value)
                  }
                  required
                />
              </div>

              <div className="form-group ">
                <button
                  className="btn btn-success-login btn-block"
                  type="submit"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
