import React from 'react';
import { NavLink } from 'react-router-dom';

export default function success(props) {
  return (
    <div>
      <div class="container py-5">
        <div class="row rmv-mg">
          <div class="col-lg-8  col-lg-offset-2 card__box__large no-padding-bottom rmv-flex ">
            <div class="card__box__large-content--success">
              <img
                src="../../images/svg/done-circle.svg"
                alt="done-circle"
              />
              <p> Application Submited</p>
              <p>
                Check the email supplied while applying
                <br />
                for more details
              </p>

              <div className="btn-group py-5">
                <NavLink
                  className="btn btn-success-pale fnt-1"
                  to="/"
                >
                  Create a New Application
                </NavLink>
                <NavLink className="btn btn-success" to="/">
                  Return Home
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
