import { fetcher } from '../index';

export async function UPDATE(data, callback, onError) {
  try {
    let user = await fetcher.post(`/user/edit`, data);

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
