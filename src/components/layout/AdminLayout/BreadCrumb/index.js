import React, { Component } from 'react';
import Aux from '../../../../hoc/_Aux';
// import Breadcrumbs from 'react-breadcrumbs';
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';
import { Link } from 'react-router-dom';
import routes from '../../../../Routes';

class BreadCrumb extends Component {
  render() {
    return (
      <Aux>
        <div className="crumb">
          <div className="crumb__box">
            <span>
              <p>Applications</p>
            </span>
            <div className="breadcrumbs">
              {this.props.breadcrumbs.map(
                ({ breadcrumb, match }, index) => (
                  <div className="bc" key={match.url}>
                    <Link to={match.url || ''}>{breadcrumb}</Link>
                    {index < this.props.breadcrumbs.length - 1 && '>'}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </Aux>
    );
  }
}

export default withBreadcrumbs(routes)(BreadCrumb);
