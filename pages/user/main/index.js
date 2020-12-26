import React, { Component } from "react";
import { MainHeader } from "../../../components/Header";
import MainTab from "../../../components/MainTab";
import styles from "./MainPage.scss";
import { inject, observer } from "mobx-react";

class MyCall extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	// static async getInitialProps({ mobxStore }) {
	//   return { mobxStore };
	// }
	render() {
		return (
			<div className={styles.main_container}>
				<MainHeader />
				<MainTab />
			</div>
		);
	}
}

export default MyCall;
