import React, { Component, useState } from "react";
import { MainHeader } from "../../../components/Header";
import MainTab from "../../../components/MainTab";
import { MainCard } from "../../../components/Card";
import { MainFooter } from "../../../components/Footer";
import styles from "./MainPage.scss";
import useStore from "../../../stores";
import { withRouter, useRouter } from "next/router";
import { inject, observer } from "mobx-react";
import { useObserver } from "mobx-react";
import axios from "axios";
import { SERVER_URI } from "../../../config";
// import io from 'socket.io-client';

// const socket = io.connect('http://18.188.0.125:8000/main');

const { MainFooterActiveStore, ProposalStore } = useStore();
const message = "알람알람";

const MyCall = ({ data }) => {
	const [lists, setList] = useState(data);
	const router = useRouter();

	const toNotificationServer = () => {
		console.log("test for notification");
		// if (message) {
		//   socket.emit('send_message', message, setMessage(''));
		//   console.log(message, 'from client');
		// }
	};

	const goToDetail = (id) => {
		ProposalStore.setValue(id);
		router?.push(`/user/main/detail/${id}`);
	};

	const CardLists = lists.map((list) => {
		return (
			<MainCard
				onClick={() => goToDetail(list.id)}
				name={list.name}
				id={list.id}
				suggestions_count={list.suggestions_count}
				toNotificationServer={toNotificationServer}
				key={list.id}
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

export async function getServerSideProps() {
	const res = await axios.get(`${SERVER_URI}/request`);
	const data = res.data.requests;
	return {
		props: {
			data,
		},
	};
}

export default MyCall;
