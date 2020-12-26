import callApi from '../utils/callApi';

// export default {
// 	getUserInfo(data) {
// 		return callApi({
// 			method: "get",
// 			url: "/api/getUserInfo",
// 			params: data,
// 		});
// 	},
// };

export default {
  getRequestInfo(data) {
    return callApi({
      method: 'get',
      url: '/api/getRequestInfo',
      params: data,
    });
  },
};
