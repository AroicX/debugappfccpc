import React from 'react';

// User
const Register = React.lazy(() =>
  import('./App/Users/Authentication/Register'),
);
const UserLogin = React.lazy(() =>
  import('./App/Users/Authentication/Login'),
);
const ForgotPassword = React.lazy(() =>
  import('./App/Users/Authentication/ForgetPassword'),
);
const ResetPassword = React.lazy(() =>
  import('./App/Users/Authentication/ResetPassword'),
);

// Applicants
const Login = React.lazy(() => import('./App/Applicants/Login'));
const Contiune = React.lazy(() =>
  import('./App/Applicants/Contiune'),
);

const Profile = React.lazy(() => import('./App/Users/Profile'));

const waitFor = Tag => props => <Tag {...props} />;

const route = [
  // User

  {
    path: '/user/register',
    exact: true,
    name: 'Register',
    component: waitFor(Register),
  },
  {
    path: '/user/login',
    exact: true,
    name: 'Login',
    component: waitFor(UserLogin),
  },
  {
    path: '/user/forgot-password',
    exact: true,
    name: 'ForgotPassword',
    component: waitFor(ForgotPassword),
  },
  {
    path: '/user/reset-password',
    exact: true,
    name: 'ResetPassword',
    component: waitFor(ResetPassword),
  },

  // Applicants
  {
    path: '/applicants/login',
    exact: true,
    name: 'Login',
    component: waitFor(Login),
  },
  {
    path: '/applicants/contiune',
    exact: true,
    name: 'Countine',
    component: waitFor(Contiune),
  },

  {
    path: '/user/profile',
    exact: true,
    name: 'profile',
    breadcrumb: 'Profile',
    component: Profile,
  },
];

export default route;
