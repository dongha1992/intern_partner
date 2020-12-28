import callApi from '../utils/callApi';

export default {
  getEmployeInfo(data) {
    return callApi({
      method: 'get',
      url: '/api/getRequestInfo',
      params: data,
    });
  },
};
