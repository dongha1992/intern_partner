import React from "react";
import styles from "./RequestInfoHeader.scss";
import { Fragment } from "react";

const RequestInfoHeader = (
	{ requestNumber, style, requestInfo, requestNumberText,
		proposalInfo, isProposal, proposal }) =>
	
	 {	
	return (
		<Fragment>
					{!isProposal ?
					<>
			<div style={{marginTop:"20px"}} />
			<div className={styles.header_wrap}>
			<div className={styles.header_left}>{requestInfo ? requestInfo : proposalInfo}</div>
			<div className={styles.header_right} style={style}>
					<div className={styles.text_wrap}>
						<span>{requestNumberText}</span>
						<span> {requestNumber}</span>
					</div>
			</div>
		</div> 
		</>: <>
					<div style={{marginTop:"20px"}} />
					<div className={styles.header_wrap}>
					<div className={styles.header_left}>{proposal}</div>
					<div className={styles.header_right} style={style}>
							<div className={styles.text_wrap}>
								<span>{requestNumberText}</span>
								<span> {requestNumber}</span>
							</div>
					</div>
				</div>
				</>
			}
		</Fragment>

	);
};

export default RequestInfoHeader;
