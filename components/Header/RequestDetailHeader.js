import React from "react";
import styles from "./RequestDetailHeader.scss";

const RequestDetailHeader = ({ title, requestDetail }) => {
	return (
		<div className={styles.header_wrap}>
			<div className={styles.header_top}></div>
			<div className={styles.header_bottom}>
				<div className={styles.header_arrow_wrap}>
					<img
						src="/781.png"
						srcSet="/781@2x.png 2x, /781@3x.png 3x"
						className={styles.header_left_arrow}
					/>
					<span className={styles.header_request_detail}>{requestDetail}</span>
				</div>
				<div className={styles.header_title}>{title}</div>
			</div>
		</div>
	);
};

export default RequestDetailHeader;
