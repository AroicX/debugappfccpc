import React, { Component, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Aux from '../hoc/_Aux';
import routes from '../route';
import Loadable from 'react-loadable';
import Loader from '../components/layout/Loader';
import ScrollToTop from '../components/layout/ScrollToTop/';

const AdminLayout = Loadable({
  loader: () => import('../components/layout/AdminLayout'),
  loading: Loader,
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: false,
      user_type: null,
    };
  }

  componentDidMount() {
    let cache = localStorage.user;

    if (cache) {
      let data = JSON.parse(cache);
      var type;

      if (!data.user) {
        localStorage.removeItem('user');
        return false;
      }

      if (data.user.account_type) {
        type = data.user.account_type;

        this.setState({
          auth: true,
          user_type: type,
        });

        this.props.dispatch({
          type: 'CACHE_STATE',
          payload: {
            token: data.token,
            user: {
              ...data.user,
              type: data.user.account_type,
            },
          },
        });
      }
      if (data.user.type) {
        type = data.user.type;

        this.setState({
          auth: true,
          user_type: type,
        });

        this.props.dispatch({
          type: 'CACHE_STATE_GUEST',
          payload: data,
        });
      }
    }
  }

  render() {
    const { auth } = this.state;

    const menu = routes.map((route, index) => {
      return route.component ? (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          name={route.name}
          render={(state) => <route.component {...state} />}
        />
      ) : null;
    });

    if (auth) {
      return (
        <Aux>
          <ScrollToTop>
            <Suspense fallback={<Loader />}>
              <Switch>
                <Route path="/" component={AdminLayout} />
              </Switch>
            </Suspense>
          </ScrollToTop>
        </Aux>
      );
    } else {
      return (
        <Aux>
          <ScrollToTop>
            <Suspense fallback={<Loader />}>
              <Switch>
                {menu}
                <Route path="/" component={AdminLayout} />
              </Switch>
            </Suspense>
          </ScrollToTop>
        </Aux>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.authenticated,
    user: state.user,
    token: state.token,
    tracking_id: state.tracking_id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
