import React, { useState } from "react";
import { useRouter } from "next/router";
import RequestDetailHeader from "../../../../../../components/Header/RequestDetailHeader";
import ChatInput from "./ChatInput";
import ChatContainer from "./ChatContainer";
import Link from "next/link";
import styles from "./Chatting.scss";

const Chatting = () => {
	const router = useRouter();
	console.log(router.back);
	return (
		<div className={styles.container}>
			<RequestDetailHeader />
			<div className={styles.menuTab}>
				<Link href="/user/main/reservation/detail/">
					<a>요청상세</a>
				</Link>
				<Link href="/user/main/reservation/detail/chat">
					<a className={styles.active}>채팅</a>
				</Link>
			</div>
			<div className={styles.chattingRoom}>
				<ChatContainer />
			</div>
		</div>
	);
};

export default Chatting;
