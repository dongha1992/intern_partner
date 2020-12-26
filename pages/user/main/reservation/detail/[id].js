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

const ConfirmationDetail = () => {
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

// export async function getStaticPaths() {
// 	return {
// 		paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
// 		fallback: false,
// 	};
// }

// export async function getStaticProps(context) {
// 	const id = context.params.id;
// 	const API = "http://localhost:5700/api/getRequestInfo";
// 	const apiUrl = `API/${id}`;
// 	const res = await axios.get(apiUrl);
// 	const data = res.data;

// 	return {
// 		props: {
// 			item: data,
// 			name: process.env.name,
// 		},
// 	};
// }
