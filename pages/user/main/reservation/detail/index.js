import React from "react";
import RequestDetailHeader from "../../../../../components/Header/RequestDetailHeader";
import RequestInfo from "../../../../../components/RequestDetail/RequestInfo";
import ProposalInfo from "../../../../../components/RequestDetail/ProposalInfo";
import Link from "next/link";
import styles from "./ConfirmationDetail.scss";
import {
	DISPATCH_CANCEL,
	DISPATCH_COMPLETE,
} from "../../../../../constants/requestDetail/ProposalInfo";

const isReservation = true;
const ConfirmationDetail = ({ list }) => {
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
			<RequestInfo />
			<ProposalInfo
				isReservation={isReservation}
				leftButtonValue={DISPATCH_CANCEL}
				rightButtonValue={DISPATCH_COMPLETE}
			/>
		</div>
	);
};

export default ConfirmationDetail;
