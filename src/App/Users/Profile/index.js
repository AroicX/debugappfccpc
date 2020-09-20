// import React, { useState, useEffect } from 'react';

// import { UPDATE } from '../../../actions/users';

// export default function Profile() {
//   const [account_type, setaccount_type] = useState('');
//   const [email, setEmail] = useState('');
//   const [change_password, setChange_password] = useState(false);
//   const [first_name, setfirst_name] = useState('');
//   const [last_name, setlast_name] = useState('');
//   const [old_password, setOld_password] = useState('');
//   const [new_password, setNew_password] = useState('');
//   const [password_confirmation, setpassword_confirmation] = useState(
//     '',
//   );

//   useEffect(() => {
//     setaccount_type('Supervisor');
//     setEmail('tioluwanijoseph@gmail.com');
//     setfirst_name('Joseph');
//     setlast_name('Tioluwani');
//   }, []);

//   const onSumbit = e => {
//     e.preventDefault();
//     let data = {
//       first_name,
//       last_name,
//       old_password,
//       new_password,
//       password_confirmation,
//     };

//     const callback = response => {
//       console.log(response);
//     };

//     const onError = err => {
//       console.log(err);
//     };

//     UPDATE(data, callback, onError);
//   };

//   const handleChange = () => {
//     setChange_password(!change_password);
//   };

//   const content = change_password ? (
//     <div>
//       <div className="form-group">
//         <label>Old Password</label>
//         <input
//           type="password"
//           className="form-control"
//           value={old_password}
//           onChange={e => setOld_password(e.target.value)}
//         />
//       </div>
//       <div className="form-group">
//         <label>New Password</label>
//         <input
//           type="password"
//           className="form-control"
//           value={new_password}
//           onChange={e => setNew_password(e.target.value)}
//         />
//       </div>
//       <div className="form-group">
//         <label>Retype New Password</label>
//         <input
//           type="password"
//           className="form-control"
//           value={password_confirmation}
//           onChange={e => setpassword_confirmation(e.target.value)}
//         />
//       </div>
//     </div>
//   ) : null;
//   return (
//     <div className="container py-5">
//       <div className="profile">
//         <div className="w100">
//           <div
//             className="card__box card__box__large "
//             id="applications"
//           >
//             <div className="card__box__large-content">
//               <p className="heading-sub">Profile Information</p>
//               <form onSubmit={onSumbit}>
//                 <div className="form-group">
//                   <label>Account type</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     aria-describedby="Access Bank Merger"
//                     value={account_type}
//                     disabled
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label>Email</label>
//                   <input
//                     type="email"
//                     className="form-control"
//                     aria-describedby="Add more +"
//                     value={email}
//                     disabled
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label>First Name</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     aria-describedby="Access Bank Merger"
//                     placeholder="First Name"
//                     value={first_name}
//                     onChange={e => setfirst_name(e.target.value)}
//                   />
//                 </div>

//                 <div className="form-group">
//                   <label>Last Name</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     aria-describedby="Access Bank Merger"
//                     placeholder="Last Name"
//                     value={last_name}
//                     onChange={e => setlast_name(e.target.value)}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="">
//                     <input
//                       type="checkbox"
//                       value=""
//                       checked={change_password}
//                       onClick={handleChange}
//                     />
//                     &nbsp; &nbsp; Change Password{' '}
//                   </label>
//                 </div>
//                 {content}

//                 <div className="form-group right btn-group">
//                   <button
//                     className="btn btn-success-pale"
//                     type="submit"
//                   >
//                     Update Profile
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { Component } from 'react';
import jQuery from 'jquery';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class Regular extends Component {
  constructor(props) {
    super(props);

    this.passwordOneRef = React.createRef();
    this.passwordTwoRef = React.createRef();
    this.revealPassword = React.createRef();

    this.state = {
      subject: '',

      // case_types: null,

      isRevealPassword: false,
      valuePasswordOne: '',
      valuePasswordTwo: '',
    };
  }

  UNSAFE_componentWillMount() {
    this.handler();
  }

  handler = () => {
    jQuery(document).ready(function($) {
      $('[id^=control]').each(function(index, el) {
        $(this).click(function() {
          $('#control-1').removeClass('card__box-stack-active');
          $('#control-2').removeClass('card__box-stack-active');

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
        });
      });
    });
  };

  togglePassword = event => {
    this.setState({ isRevealPassword: !this.state.isRevealPassword });
  };

  render() {
    const {
      isRevealPassword,
      valuePasswordOne,
      valuePasswordTwo,
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
                    src="../images/svg/user-bg.svg"
                    alt="book-open"
                  />

                  <div className="card__box--content">
                    <p>Personal Information</p>
                    <span>Edit your personal details</span>
                  </div>
                </div>

                <div
                  className="card__box card__box-stack"
                  id="control-2"
                >
                  <img
                    className="card__box-stack-img"
                    src="../images/svg/book-open.svg"
                    alt="user-bg"
                  />

                  <div className="card__box--content">
                    <p>Change Password</p>
                    <span>Change your password</span>
                  </div>
                </div>
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
                        <NavLink to="#" className=" avi ">
                          OI
                        </NavLink>
                      </div>
                      <div className="form-group">
                        <label>First Name</label>
                        <input
                          type="text"
                          className="form-control"
                          aria-describedby="Access Bank Merger"
                          placeholder="Last Name"
                        />
                      </div>

                      <div className="form-group">
                        <label>Last Name</label>
                        <input
                          type="text"
                          className="form-control"
                          aria-describedby="Access Bank Merger"
                          placeholder="Last Name"
                        />
                      </div>

                      <p className="heading-sub">
                        CONTACT INFORMATION
                      </p>
                      <div className="form-group">
                        <label>Phone Number</label>
                        <input
                          type="text"
                          className="form-control"
                          aria-describedby="Access Bank Merger"
                          placeholder="Last Name"
                        />
                      </div>

                      <div className="form-group">
                        <label>Email Address</label>
                        <input
                          type="email"
                          className="form-control"
                          aria-describedby="Access Bank Merger"
                          placeholder="Last Name"
                        />
                      </div>

                      <div className="form-group">
                        <label>Home Address</label>
                        <textarea
                          type="text"
                          className="form-control"
                          cols="10"
                          rows="10"
                          required
                          placeholder="Please enter your address"
                        ></textarea>
                      </div>

                      <div className=" btn-group flex">
                        <div className="btn btn-decline btn-cancel">
                          Cancel
                        </div>
                        <button
                          className="btn btn-success btn-medium btn-group-lg "
                          type="submit"
                        >
                          Save Changes
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
                        <label>Old Password</label>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Type in your current password"
                        />
                      </div>

                      <p className="heading-sub">SET NEW PASSWORD</p>
                      <div className="form-group">
                        <label>New Password</label>
                        <div style={{ position: 'relative' }}>
                          <input
                            name="passwordOne"
                            value={valuePasswordOne}
                            onChange={e =>
                              this.setState({
                                valuePasswordOne: e.target.value,
                              })
                            }
                            type={
                              isRevealPassword ? 'text' : 'password'
                            }
                            ref={this.passwordOneRef}
                            className="form-control"
                            placeholder="Type in your current password"
                          />
                          <span
                            onClick={this.togglePassword}
                            ref={this.revealPassword}
                          >
                            <span>
                              {isRevealPassword ? (
                                <h4 className="toggle-password">
                                  hide
                                </h4>
                              ) : (
                                <h4 className="toggle-password">
                                  show
                                </h4>
                              )}
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Retype New Password</label>
                        <div style={{ position: 'relative' }}>
                          <input
                            name="passwordTwo"
                            value={valuePasswordTwo}
                            onChange={e =>
                              this.setState({
                                valuePasswordTwo: e.target.value,
                              })
                            }
                            type={
                              isRevealPassword ? 'text' : 'password'
                            }
                            ref={this.passwordTwoRef}
                            className="form-control"
                            placeholder="Verify your new password"
                          />
                          <span
                            onClick={this.togglePassword}
                            ref={this.revealPassword}
                          >
                            <span>
                              {isRevealPassword ? (
                                <h4 className="toggle-password">
                                  hide
                                </h4>
                              ) : (
                                <h4 className="toggle-password">
                                  show
                                </h4>
                              )}
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className=" btn-group flex">
                        <div className="btn btn-decline btn-cancel">
                          Cancel
                        </div>
                        <button
                          className="btn btn-success btn-medium btn-group-lg "
                          type="submit"
                        >
                          Save Changes
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                {/*  */}
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

export default connect(mapStateToProps, mapDispatchToProps)(Regular);
