import React, { Component, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import windowSize from 'react-window-size';
import Applicants from './Navigation/Applicants';
import SupervisorNavigation from './Navigation/Supervisor/SupervisorNavigation';
import Loader from '../Loader';
import routes from '../../../Routes';
import Aux from '../../../hoc/_Aux';

class AdminLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userIn: false,
    };
  }

  componentDidMount() {
    let cache = localStorage.user;

    if (cache) {
      let data = JSON.parse(cache);

      console.log(data);

      this.setState({
        userIn: true,
        // user_type: data
      });
    } else {
      return window.location.replace('/applicants/login');
    }
  }

  render() {
    const menu = routes.map((route, index) => {
      return route.component ? (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          name={route.name}
          render={(props) => <route.component {...props} />}
        />
      ) : null;
    });

    const { userIn } = this.state;

    if (userIn) {
      return (
        <Aux>
          <Suspense fallback={<Loader />}>
            <Switch>
              {this.props.user.type === 'Guest' ? (
                <Applicants page={menu} />
              ) : (
                <SupervisorNavigation page={menu} />
              )}
              <Redirect from="/" to="/applicants" />
            </Switch>
          </Suspense>
        </Aux>
      );
    } else {
      return <div></div>;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
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
)(windowSize(AdminLayout));
