import React, { Fragment } from "react";
import styles from "./ProposalText.scss";
import { ADDITIONAL_REQUESTS } from "../../constants/requestDetail/Proposal";

export default function ProposalText() {
	return (
		<Fragment>
			<div className={styles.additional_requests}>{ADDITIONAL_REQUESTS}</div>
			<div className={styles.proposal_text_container}>
				<textarea className={styles.proposal_text_box} type="text" alt="" />
				<img
					src="/0-45-byte.png"
					srcSet="/0-45-byte@2x.png 2x,
             /0-45-byte@3x.png 3x"
					className={styles.byte}
				/>
			</div>
		</Fragment>
	);
}
