import React, { useState } from 'react';

import { RESET_PASSWORD } from '../../../actions/authentication';

export default function ResetPassword() {
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [password_confirmation, setpassword_confirmation] = useState(
    '',
  );

  const onSumbit = e => {
    e.preventDefault();
    let data = {
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

    RESET_PASSWORD(data, callback, onError);
  };
  document.body.style = 'background: white;';
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 login__box">
          <div className="login__box--content">
            <img src="/images/svg/logo.svg" alt="logo" />

            <p>Reset Password</p>
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

              <div className="form-group">
                <label>New password</label>
                <input
                  type="password"
                  className="form-control "
                  value={password}
                  onChange={e => setpassword(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>Confirm new password</label>
                <input
                  type="password"
                  className="form-control "
                  value={password_confirmation}
                  onChange={e =>
                    setpassword_confirmation(e.target.value)
                  }
                  required
                />
              </div>

              <div className="form-group ">
                <button
                  className="btn btn-success-login btn-block  "
                  type="submit"
                >
                  Save & Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
