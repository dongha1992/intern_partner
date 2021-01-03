import React, { useState } from "react";
import {
	agreeWithAll,
	agreementList,
} from "../../constants/requestDetail/Agreement";
import styles from "./Agreement.scss";

export default function index() {
	const [isChecked, setIsChecked] = useState(false);
	const [firstButton, setFirstButton] = useState(false);
	const [secondButton, setSecondButton] = useState(false);
	const [thirdButton, setThirdButton] = useState(false);

	console.log(agreementList);
	const handleChecked = () => {
		setIsChecked(!isChecked);
	};
	console.log(isChecked, "check");
	const handleButton = () => {};
	// isChecked = true;
	return (
		<>
			<div>3. 약관동의</div>
			<div className={styles.border} />
			<label className={styles.container}>
				<input type="checkbox" onClick={handleChecked} checked={isChecked} />
				<span className={styles.checkmark} />
				<span style={{ marginTop: 6 }}>{agreeWithAll}</span>
			</label>
			<div className={styles.border} />
			{agreementList.map((list) => {
				return (
					<label className={styles.container} key={list.id}>
						<input type="checkbox" checked={list.button} />
						<span className={styles.checkmark} />
						<span style={{ marginTop: 6 }}>{list.text}</span>
					</label>
				);
			})}
		</>
	);
}
