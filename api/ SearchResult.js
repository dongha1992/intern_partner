import callApi from '../utils/callApi';

export default {
  getSearchItem(data) {
    return callApi({
      method: 'get',
      url: '/api/getSearchItem',
      params: data,
    });
  },
};
