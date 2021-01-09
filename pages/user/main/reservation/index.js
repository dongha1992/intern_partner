import React, { useState, useEffect } from "react";
import { MainHeader } from "../../../../components/Header";
import MainTab from "../../../../components/MainTab";
import { MainCard } from "../../../../components/Card";
import { MainFooter } from "../../../../components/Footer";
import useStore from "../../../../stores";
import { useObserver } from "mobx-react";
import { useRouter } from "next/router";
import styles from "../MainPage.scss";
import axios from "axios";
import { SERVER_URI } from "../../../../config";
import { io } from "socket.io-client";

const ReservationConfirmation = ({ data }) => {
	const [lists, setList] = useState(data);
	const router = useRouter();

	useEffect(() => {
		const token = localStorage.getItem("token");
		axios
			.get(`${SERVER_URI}/suggestion?status=1`, {
				headers: { Authorization: token },
			})
			.then((res) => {
				// console.log(res);
				setList(res.data.data);
			});
	}, []);
	console.log(lists ? lists : "", "list");

	const CardLists = lists?.map((list) => {
		return (
			<MainCard
				name={list.name}
				suggestion_id={list.suggestion_id}
				id={list.id}
				onClick={() => {
					router.push(`/user/main/reservation/detail/${list.id}`);
				}}
				key={list.suggestion_id}
				carType={list.cars_model}
				carNumber={list.car_number}
				date={list.created_at}
			/>
		);
	});
	return useObserver(() => (
		<div className={styles.main_container}>
			<div className={styles.main_headerWrap}>
				<MainHeader />
				<MainTab />
			</div>
			<div className={styles.main_background}>{CardLists}</div>
			<MainFooter />
		</div>
	));
};

// export async function getServerSideProps() {
// 	const res = await axios.get("http://localhost:5700/api/getRequestInfo");
// 	const data = res.data;

// 	return {
// 		props: {
// 			data,
// 		},
// 	};
// }

export default ReservationConfirmation;
