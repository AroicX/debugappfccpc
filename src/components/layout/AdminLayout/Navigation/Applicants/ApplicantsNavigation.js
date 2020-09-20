import React, { useEffect, useState } from 'react';
import Aux from '../../../../../hoc/_Aux';
import { NavLink } from 'react-router-dom';
import * as jQuery from 'jquery';
import { connect } from 'react-redux';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';

export function ApplicantsNavigation(props) {
  useEffect(() => {
    feeCalculator();
  }, []);
  const [ddOpen, setDdopen] = useState(false);

  const toggle = () => setDdopen(!ddOpen);

  const feeCalculator = () => {
    jQuery(document).ready(function ($) {
      $('#open_fee_calculator').click(function () {
        $('#fee__calculator').toggleClass('fee__calculator--active ');
      });

      $('#fee__calculator-btn').click(function () {
        $('#fee__calculator').toggleClass('fee__calculator--active ');
      });
    });
  };

  const signOut = () => {
    localStorage.removeItem('user');
    return window.location.replace('/applicants/login');
  };

  return (
    <Aux>
      <div className="header">
        <div className="header_logo">
          <NavLink to="/">
            MAP{' '}
            <span className="no_display nd2">
              - Mergers & Acquisition Platform
            </span>
          </NavLink>
        </div>
        <nav className="header__nav">
          <ul>
            <li className="header__nav-link l-mg1">
              <NavLink
                to="#"
                className="header__nav-a"
                id="open_fee_calculator"
              >
                <img
                  className="header__nav-a-svg"
                  src="../../images/svg/sale.svg"
                  alt="sales"
                />
                Fee calculator
              </NavLink>
            </li>
            <li className="header__nav-link no_display">
              <NavLink to="/" className="header__nav-a">
                <img
                  className="header__nav-a-svg"
                  src="../../images/svg/duplicate.svg"
                  alt="duplicate"
                />
                <span>{props.user.email}</span>
                ID: {props.trackingId}
              </NavLink>
            </li>
            <li className="header__nav-link">
              <Dropdown isOpen={ddOpen} toggle={toggle}>
                <DropdownToggle
                  caret
                  className="remove-border"
                  tag="span"
                  data-toggle="dropdown"
                >
                  <NavLink to="#" className="header__nav-custom">
                    {props.user.email.charAt(0).toUpperCase()}
                  </NavLink>
                </DropdownToggle>
                <DropdownMenu>
                  <NavLink className="dropdown-item" to="#">
                    &nbsp;&nbsp;{props.user.email}
                  </NavLink>
                  <NavLink className="dropdown-item" to="#">
                    &nbsp;&nbsp; ID:
                    {props.trackingId}
                  </NavLink>
                </DropdownMenu>
              </Dropdown>
            </li>
            <li className="header__nav-link">
              <NavLink
                to="/"
                className="header__nav-a"
                onClick={signOut}
              >
                <img
                  className="header__nav-a-svg"
                  src="../../images/svg/sign-out.svg"
                  alt="sign-out"
                />
                Logout
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="fee__calculator" id="fee__calculator">
          <div
            className="fee__calculator-btn"
            id="fee__calculator-btn"
          >
            <img src="../../images/svg/close.svg" alt="close" />
          </div>

          <div className="fee__calculator--content">
            <h2>Fee Calculator</h2>

            <div className="form-group">
              <label>Category of Transaction</label>
              <select className="form-control">
                <option>Regular</option>
              </select>
            </div>

            <div className="form-group">
              <label>Combined Turnover</label>
              <input
                type="text"
                className="form-control custom-input"
                defaultValue="1,000,000,000"
              />
            </div>
          </div>

          <div className="fee__calculator--table">
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th scope="col">SERVICE</th>
                  <th scope="col">PRICE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Filling fee</td>
                  <td>₦50,000.00</td>
                </tr>

                <tr>
                  <td>Processing fee</td>
                  <td>₦2,625,000.00</td>
                </tr>

                <tr>
                  <td>Expedited fee</td>
                  <td>-</td>
                </tr>
                <tr className="fee__calculator-total">
                  <td>
                    <b>Total</b>
                  </td>
                  <td>₦2,675,000.00</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/*fee__calculator--content*/}
        </div>
        {/*fee__calculator*/}
      </div>
    </Aux>
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
)(ApplicantsNavigation);
