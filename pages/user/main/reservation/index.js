import React, { Fragment, useEffect, useState } from "react";
import TestList from "./testlist";
import Axios from "axios";
function ReservationConfirmation() {
	const [list, setList] = useState([]);
	const API = "http://localhost:5700/api/getRequestInfo";

	useEffect(() => {
		Axios.get(API).then((res) => {
			setList(res.data);
		});
	}, []);

	return (
		<Fragment>
			<TestList list={list} />
		</Fragment>
	);
}

export default ReservationConfirmation;
