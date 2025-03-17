import axiosClient, { handleResponse } from './axiosClient';

const authApi = {
  login: (body) => {
    return handleResponse(axiosClient.post('/login', body));
  },
  register: (body) => {
    return handleResponse(axiosClient.post('/register', body));
  },
};

export default authApi;
