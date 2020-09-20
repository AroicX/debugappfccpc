import React from 'react'
import { NavLink } from 'react-router-dom';
const successflp = () => {
    return (
        <div>
             <div className="container py-5">
    <div className="row">
      <div className="col-lg-8 offset-2 card__box__large no-padding-bottom">

        <div className="card__box__large-content--success">
          <img src="../images/svg/done-circle.svg" alt="done-circle" />
          <p>Follow Up Documents Submitted</p>
          <p>Check the email supplied while applying
            <br />
            for more details</p>

          <div className="btn-group py-5">
              <NavLink to ="/">
            <div className="btn btn-success-pale fnt-1">Create a New Application</div>
            </NavLink>
            <div className="btn btn-success">Return Home</div>

          </div>
        </div>




      </div>
    </div>
  </div>
        </div>
    )
}

export default successflp
