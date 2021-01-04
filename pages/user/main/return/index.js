import React, { useState } from "react";
import { useRouter } from "next/router";
import { MainHeader } from "../../../../components/Header";
import MainTab from "../../../../components/MainTab";
import { MainCard } from "../../../../components/Card";
import { MainFooter } from "../../../../components/Footer";
import useStore from "../../../../stores";
import { useObserver } from "mobx-react";
import styles from "../MainPage.scss";
import axios from "axios";

const Return = ({ data }) => {
	const [lists, setList] = useState(data);
	const router = useRouter();

	const CardLists = lists.map((list) => {
		return (
			<MainCard
				name={list.name}
				id={list.id}
				onClick={() => {
					router.push(`/user/main/return/detail/${list.id}`);
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

export default Return;
