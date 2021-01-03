import React from "react";
import RequestDetailHeader from "../../../../../components/Header/RequestDetailHeader";
import RequestInfo from "../../../../../components/RequestDetail/RequestInfo";
import ProposalInfo from "../../../../../components/RequestDetail/ProposalInfo";
import Link from "next/link";
import styles from "./DispatcherDetail.scss";
import { RETURN_COMPLETE } from "../../../../../constants/requestDetail/ProposalInfo";
import axios from "axios";

const DispatcherDetail = ({ list }) => {
	const isButton = true;
	return (
		<div className={styles.container}>
			<RequestDetailHeader />
			<div className={styles.menuTab}>
				<Link href="/user/main/reservation/detail">
					<a className={styles.active}>요청상세</a>
				</Link>
				<Link href="/user/main/reservation/detail/chat">
					<a>채팅</a>
				</Link>
			</div>
			<RequestInfo list={list} />
			<ProposalInfo
				// isReturn={true}
				isButton={isButton}
				buttonValue={RETURN_COMPLETE}
				list={list}
				goToReturn={true}
				isDispatcher={true}
			/>
		</div>
	);
};

export async function getServerSideProps() {
	const res = await axios("http://localhost:5700/api/getRequestInfo");
	const list = await res.data;
	console.log(list, "difjsdoifjwoj");
	return {
		props: { list },
	};
}

export default DispatcherDetail;
