<<<<<<< HEAD
import React, { Component } from 'react';
import { MainHeader } from '../../../components/Header';
import MainTab from '../../../components/MainTab';
import { MainCard } from '../../../components/Card';
import styles from './MainPage.scss';
import { inject, observer } from 'mobx-react';
=======
import React, { Component } from "react";
import { MainHeader } from "../../../components/Header";
import MainTab from "../../../components/MainTab";
import styles from "./MainPage.scss";
import { inject, observer } from "mobx-react";
>>>>>>> 86df58e... [add] mock data

class MyCall extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

<<<<<<< HEAD
  // static async getInitialProps({ mobxStore }) {
  //   return { mobxStore };
  // }
  render() {
    return (
      <div className={styles.main_container}>
        <MainHeader />
        <MainTab />
        <div className={styles.main_background}>
          <MainCard />
        </div>
      </div>
    );
  }
=======
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
>>>>>>> 86df58e... [add] mock data
}

export default MyCall;
