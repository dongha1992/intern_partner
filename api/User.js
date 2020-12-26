import callApi from "../utils/callApi";

export default {
	getRequestInfo(data) {
		return callApi({
			method: "get",
			url: "/api/getRequestInfo",
			params: data,
		});
	},
};
