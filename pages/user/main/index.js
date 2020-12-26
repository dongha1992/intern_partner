import React, { Component, useState } from "react";
import { MainHeader } from "../../../components/Header";
import MainTab from "../../../components/MainTab";
import { MainCard } from "../../../components/Card";
import { MainFooter } from "../../../components/Footer";
import styles from "./MainPage.scss";
import useStore from "../../../stores";
import { inject, observer } from "mobx-react";
import { useObserver } from "mobx-react";
import axios from "axios";

const { MainFooterActiveStore } = useStore();

const MyCall = ({ data }) => {
	const [lists, setList] = useState(data);

	const CardLists = lists.map((list) => {
		return (
			<MainCard
				name={list.name}
				id={list.id}
				onClick={() => {
					console.log("");
				}}
				key={list.id}
				carType={list.car_type}
				carNumber={list.car_number}
				date={list.date}
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
	const res = await axios.get("http://localhost:5700/api/getRequestInfo");
	const data = res.data;
	return {
		props: {
			data,
		},
	};
}

export default MyCall;
