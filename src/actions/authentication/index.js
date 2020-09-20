import { fetcher } from '../index.js';

export async function REGISTER(data, callback, onError) {
  try {
    let user = await fetcher.post(`/user/register`, data);

    if (user.data.message === 'success') {
      callback && callback(user.data);
    } else {
      throw user;
    }

    return user;
  } catch (err) {
    onError && onError(err);
    return false;
  }
}

export async function LOGIN(data, callback, onError) {
  try {
    let user = await fetcher.post(`/user/login`, data);

    if (user.data.message === 'success') {
      callback && callback(user.data);
    } else {
      throw user;
    }

    return user;
  } catch (err) {
    onError && onError(err);
    return false;
  }
}

export async function FORGOT_PASSWORD(data, callback, onError) {
  try {
    let user = await fetcher.post(`/user/forgot-password`, data);

    if (user.data.message === 'success') {
      callback && callback(user.data);
    } else {
      throw user;
    }

    return user;
  } catch (err) {
    onError && onError(err);
    return false;
  }
}

export async function RESET_PASSWORD(data, callback, onError) {
  try {
    let user = await fetcher.post(`/user/reset-password`, data);

    if (user.data.message === 'success') {
      callback && callback(user.data);
    } else {
      throw user;
    }

    return user;
  } catch (err) {
    onError && onError(err);
    return false;
  }
}
