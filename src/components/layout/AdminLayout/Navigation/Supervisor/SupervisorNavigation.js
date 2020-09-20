import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Aux from '../../../../../hoc/_Aux';
import BreadCrumb from '../../BreadCrumb';
import './supervisor.scss';
import * as jQuery from 'jquery';

export function SupervisorNavigation(props) {
  useEffect(() => {
    var pathname = props.location.pathname,
      substring = 'supervisor';
    if (props.user.type === 'SP' && !pathname.includes(substring)) {
      window.location.replace('/supervisors/request');
    }

    // console.log(props.location.pathname);
    // props.page.map((page) => {
    //   if (props.location.pathname === page.props.path) {
    //     console.log('found');
    //     console.log(page.props.path);
    //   }
    // });

    // const handleScroll = () => {
    //   if (window.pageYOffset > 500) {
    //     console.log('user scrolled', window.pageYOffset);
    //     jQuery('#sp_sidebar').addClass('sp__sidebar__active');
    //   }
    //   if (window.pageYOffset < 300) {
    //     jQuery('#sp_sidebar').removeClass('sp__sidebar__active');
    //     console.log('user scrolled not', window.pageYOffset);
    //   }
    // };
    // window.addEventListener('scroll', handleScroll);
    // return () => {
    //   window.removeEventListener('scroll', handleScroll);
    // };
  }, [props]);

  const toggleSidebar = () => {
    jQuery('#sp_sidebar').toggleClass('sp__sidebar__active');
  };

  const toggleDropdown = () => {
    jQuery('.my__cases').toggleClass('show');
  };

  const signOut = () => {
    localStorage.removeItem('user');
    return window.location.replace('/user/login');
  };

  document.body.style = 'background: #f3f6f9;';

  return (
    <Aux>
      <div className="sp_wrapper">
        <div className="sp__sidebar" id="sp_sidebar">
          <div className="sp__sidebar__header">
            <span>
              MAP - SUPERVISOR &nbsp;
              <img
                onClick={toggleSidebar}
                src="../../images/svg/Supervisor/Angle-double-left.svg"
                alt="Angle-double-left"
              />{' '}
            </span>
          </div>

          <div className="sp__sidebar__content">
            <ul>
              <li>
                <NavLink to="/supervisor/dashboard">
                  <img
                    className="sp__sidebar__svg"
                    src="../../images/svg/Supervisor/Dial_numbers.svg"
                    alt="Dashboard"
                  />
                  Dashboard
                </NavLink>
              </li>

              <li>
                <div
                  to="#mycases"
                  data-toggle="collapse"
                  aria-expanded="false"
                  className="dropdown-toggle"
                  onClick={toggleDropdown}
                >
                  <img
                    className="sp__sidebar__svg"
                    src="../../images/svg/Supervisor/Selected-file.svg"
                    alt="My
            Cases"
                  />
                  My Cases
                </div>
                <ul className="collapse my__cases" id="mycases">
                  <li>
                    <NavLink to="/supervisors/new-cases">
                      New Cases{' '}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/supervisors/assigned-cases">
                      Assigned Cases
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/supervisors/cases-on-hold">
                      Cases On Hold
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/supervisors/approved-cases">
                      Approved Cases
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink
                  to="/supervisors/case-handlers/list"
                  className="active"
                >
                  <img
                    className="sp__sidebar__svg"
                    src="../../images/svg/Supervisor/Question_circle.svg"
                    alt="Case
            Handlers"
                  />
                  Case Handlers
                </NavLink>
              </li>
              <li>
                <NavLink to="/supervisors/fees">
                  <img
                    className="sp__sidebar__svg"
                    src="../../images/svg/Supervisor/Clipboard-list.svg"
                    alt="Fees"
                  />
                  Fees
                </NavLink>
              </li>
              <li>
                <NavLink to="/supervisors/request">
                  <img
                    className="sp__sidebar__svg"
                    src="../../images/svg/Supervisor/Join_3.svg"
                    alt="Requests"
                  />
                  Requests
                </NavLink>
              </li>
              <li>
                <NavLink to="/supervisors/queries/view">
                  <img
                    className="sp__sidebar__svg"
                    src="../../images/svg/Supervisor/Compiled_file.svg"
                    alt="Queries"
                  />
                  Queries
                </NavLink>
              </li>
              <li>
                <NavLink to="/supervisor/dashboard">
                  <img
                    className="sp__sidebar__svg"
                    src="../../images/svg/Supervisor/Folder_star.svg"
                    alt="Generate Report"
                  />
                  Generate Report
                </NavLink>
              </li>
              <li>
                <NavLink to="/supervisor/dashboard">
                  <img
                    className="sp__sidebar__svg"
                    src="../../images/svg/Supervisor/File_plus.svg"
                    alt="Administration"
                  />
                  Administration
                </NavLink>
              </li>
              <li>
                <NavLink to="#" onClick={signOut}>
                  <img
                    className="sp__sidebar__svg"
                    src="../../images/svg/sign-out.svg"
                    alt="sign-out"
                  />
                  Logout
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="sp__content">
          <div className="header">
            <nav className="header__nav">
              <ul>
                <li className="header__nav-link  sp-width sp-rmv-top">
                  <NavLink
                    to="#"
                    className="header__nav-a__notification "
                  >
                    <img
                      className="header__nav-a-svg "
                      src="../../images/svg/Supervisor/Notification_2.svg"
                      alt="Notification_2"
                    />
                    <span className="badge">04</span>
                    <span className="sp-no_display">
                      Notifications
                    </span>
                  </NavLink>
                </li>

                <li className="header__nav-link sp-width sp-rmv-mg">
                  <NavLink to="#" className="header__nav-a ">
                    <img
                      className="header__nav-a-svg sp-display"
                      src="../../images/svg/Supervisor/Layout_horizontal.svg"
                      alt="Layout_horizontal"
                    />
                    Ongoing Cases
                  </NavLink>
                </li>
                <li className="header__nav-link  sp-width header__nav-link__override">
                  <NavLink
                    to="#"
                    className="header__nav-a no_display"
                  >
                    <span>sirmudiadavid@gmail.com</span>
                    Osamudiamen Imaseun
                  </NavLink>
                </li>
                <li className="header__nav-link">
                  <NavLink
                    to="#"
                    className=" header__nav-custom header__nav-custom__override"
                  >
                    OI
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <BreadCrumb />

          {/* show pages*/}
          {props.page}
          {/* {props.page.map((page) => {
            if (props.location.pathname === page.props.path) {
              return page;
            }

            return true;
          })} */}
          {/* show pages*/}
        </div>
      </div>
    </Aux>
  );
}

const mapStateToProps = function(state) {
  return {
    user: state.user,
    trackingId: state.trackingId,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SupervisorNavigation);
