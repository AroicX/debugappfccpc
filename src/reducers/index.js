export const initialState = {
  isLoading: false, //for active default menu
  isAuthenticated: false, //for active default menu, set blank for horizontal
  isApplicant: false,
  user: {},
  token: null,
  trackingId: null,
  authenticated: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'APPLICANT_LOGIN':
      return {
        ...state,
        isApplicant: true,
        trackingId: payload.trackingID,
        user: payload.user,
      };
    case 'SET_APPLICANT_CATEGORY':
      // user = state.user;

      state.user.category = payload;

      // return false;
      return {
        ...state,
      };

    case 'LOG_USER_IN':
      localStorage.removeItem('staleState');
      let { user, token } = payload;
      return {
        ...state,
        token,
        authenticated: true,
        user,
      };

    case 'CACHE_STATE_GUEST':
      return {
        ...state,
        isApplicant: true,
        trackingId: payload.trackingId,
        user: payload.user,
      };

    case 'CACHE_STATE':
      return {
        ...state,
        isApplicant: false,
        token: payload.token,
        user: payload.user,
        authenticated: true
      };

    case 'RESTORE_STATE':
      return {
        ...state,
        ...payload,
        authenticated: true,
      };

    //
    default:
      return state;
  }
};

export default reducer;
