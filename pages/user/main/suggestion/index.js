import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { MainHeader } from "../../../../components/Header";
import MainTab from "../../../../components/MainTab";
import { MainCard } from "../../../../components/Card";
import { MainFooter } from "../../../../components/Footer";
import useStore from "../../../../stores";
import { useObserver } from "mobx-react";
import styles from "../MainPage.scss";
import axios from "axios";
import { SERVER_URI } from "../../../../config";
import { observable } from "mobx";

const { MainFooterActiveStore, ProposalStore } = useStore();

const Suggestion = () => {
	const [lists, setList] = useState([]);
	const router = useRouter();
	// console.log(lists);
	useEffect(() => {
		const token = localStorage.getItem("token");
		axios
			.get(`${SERVER_URI}/suggestion?status=0`, {
				headers: { Authorization: token },
			})
			.then((res) => {
				setList(res.data.data);
			});
	}, []);
	console.log(lists);

	const CardLists = lists.map((list) => {
		console.log(list);
		return (
			<MainCard
				name={list.name}
				id={list.id}
				suggestions_count={list.suggestions_count}
				onClick={() => {
					// console.log(id);
					router.push(`/user/main/suggestion/detail/${list.suggestion_id}`);
				}}
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

// export async function getServerSideProps() {
// 	const res = await axios.get(`${SERVER_URI}/suggestions`);
// 	const data = res.data;

// 	return {
// 		props: {
// 			data,
// 		},
// 	};
// }

export default Suggestion;
