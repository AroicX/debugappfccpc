import React, { useEffect } from 'react';
import Aux from '../../../../../hoc/_Aux';
import ApplicantsNavigation from './ApplicantsNavigation';
import BreadCrumb from '../../BreadCrumb';

import { connect } from 'react-redux';

export function Applicant(props) {
  useEffect(() => {
    var pathname = props.location.pathname,
      substring = 'applicants';
    if (
      props.user.type === 'Guest' &&
      !pathname.includes(substring)
    ) {
      window.location.replace('/applicants');
    }

    console.log('running');
  }, [props, props.history]);

  return (
    <Aux>
      <ApplicantsNavigation />
      <BreadCrumb />

      {props.page}
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
)(Applicant);
