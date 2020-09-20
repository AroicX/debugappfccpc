import axios from 'axios';
import Toastr from 'toastr';

//postman collections
// https://documenter.getpostman.com/view/11650026/T1LLFTdf

export const api = {
  BASE_URL: 'https://fccpc.techbarn.ng/api',
  // BASE_URL: 'http://fccpc-laravel.test/api/',
};

export const fetcher = axios.create({
  baseURL: api.BASE_URL,
  // timeout: 5000,
  transformResponse: axios.defaults.transformResponse.concat(
    (data) => {
      if (data.message === 'Token is Expired') {
        localStorage.removeItem('user');
        window.location.replace('/user/login');
        Toastr.error('Token is Expired');

        return false;
      }
      return data;
    },
  ),

  validateStatus: function (status) {
    return status >= 200 && status < 400;
  },
});
