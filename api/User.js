import callApi from "../utils/callApi";
<<<<<<< HEAD

export default {
	getUserInfo(data) {
		return callApi({
			method: "get",
			url: "/api/getUserInfo",
=======

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
			method: "get",
			url: "/api/getRequestInfo",
>>>>>>> 86df58e... [add] mock data
			params: data,
		});
	},
};
<<<<<<< HEAD

// export default {
// 	getRequestInfo(data) {
// 		return callApi({
// 			method: "get",
// 			url: "/api/getRequestInfo",
// 			params: data,
// 		});
// 	},
// };
=======
>>>>>>> 86df58e... [add] mock data
