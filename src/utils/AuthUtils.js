import {apiPost, apiGet, apiPatch, API_HOST} from 'constants';

export const userLogin = data => {
  console.log(`${API_HOST}/auth/login`);
  return apiPost(`${API_HOST}/auth/login`, data);
};

export const userRegister = data => {
  return apiPost(`${API_HOST}/auth/register`, data);
};
