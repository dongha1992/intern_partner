import React from "react";
import styles from "./TwoButton.scss";

export default function TwoButton({
	style,
	leftButtonValue,
	rightButtonValue,
	goToCancle,
	goToEdit,
	goToDispatching,
	isSuggestion,
}) {
	return (
		<div className={styles.button_wrap} style={style}>
			<input
				type="button"
				value={leftButtonValue}
				className={styles.left_button}
				onClick={() => {
					goToCancle();
				}}
			/>
			<input
				type="button"
				value={rightButtonValue}
				className={styles.right_button}
				onClick={() => {
					isSuggestion ? goToEdit() : goToDispatching();
				}}
			/>
		</div>
	);
}
