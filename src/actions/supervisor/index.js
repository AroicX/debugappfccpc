import { fetcher } from '../index';

fetcher.interceptors.request.use(
  function (config) {
    config.headers = {
      ...config.headers,
    };
    config.headers.Accept = 'application/json';
    config.headers['Content-Type'] = 'application/json';
    config.headers['Access-Control-Allow-Origin'] = '*';

    let getToken = JSON.parse(localStorage.getItem('user'));
    // console.log(getToken.token);
    config.headers.Authorization = `Bearer ${getToken.token}`;

    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export async function GET_UNASSIGNED_CASES(callback, onError) {
  try {
    let case_unassigned = await fetcher.get(`/case/unassigned`);
    if (case_unassigned.data.message === 'success') {
      callback && callback(case_unassigned.data);
    } else {
      throw case_unassigned;
    }

    return case_unassigned;
  } catch (err) {
    onError && onError(err);
    return false;
  }
}

export async function GET_ALL_ASSIGNED_CASES(callback, onError) {
  try {
    let case_all_assigned = await fetcher.get(`/case/assigned/all`);
    if (case_all_assigned.data.message === 'success') {
      callback && callback(case_all_assigned.data);
    } else {
      throw case_all_assigned;
    }

    return case_all_assigned;
  } catch (err) {
    onError && onError(err);
    return false;
  }
}

export async function GET_CASE_HANDLERS_ASSIGNED_CASES(
  handler_id,
  callback,
  onError,
) {
  try {
    let get_all_cases = await fetcher.get(
      `/case/assigned/${handler_id}`,
    );
    if (get_all_cases.data.message === 'success') {
      callback && callback(get_all_cases.data);
    } else {
      throw get_all_cases;
    }

    return get_all_cases;
  } catch (err) {
    onError && onError(err);
    return false;
  }
}

export async function GET_CASE_DETAILS(case_id, callback, onError) {
  try {
    let getCaseDetials = await fetcher.get(`/case/${case_id}`);
    if (getCaseDetials.data.responseType === 'success') {
      callback && callback(getCaseDetials.data);
    } else {
      throw getCaseDetials;
    }

    return getCaseDetials;
  } catch (err) {
    onError && onError(err);
    return false;
  }
}
