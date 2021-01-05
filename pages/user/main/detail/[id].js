import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import RequestDetailHeader from "../../../../components/Header/RequestDetailHeader";
import RequestInfoHeader from "../../../../components/Header/RequestInfoHeader";
import RequestInfo from "../../../../components/RequestDetail/RequestInfo";
import Agreement from "../../../../components/Agreement";
import ProposalText from "../../../../components/RequestDetail/ProposalText";
import SuggestionAndReturnButton from "../../../../components/RequestDetail/SuggestionAndReturnButton";
import ProposalInput from "../../../../components/Input/ProposalInput";
import CompanyItem from "../detail/proposal/CompanyItem";
import CarItem from "../detail/proposal/CarItem";

import styles from "./Detail.scss";
import { REQUEST_NUMBER_TEXT } from "../../../../constants/requestDetail/RequestInfo";
import {
	PROPOSAL_INFO,
	SUGGESTION,
	PROPOSAL_CAR1,
	PROPOSAL_CAR2,
	PLACEHOLDER_CAR_BRAND_E,
	PLACEHOLDER_CAR_BRAND,
	PROPOSAL_HEADER,
	PROPOSAL_FOOTER,
} from "../../../../constants/requestDetail/ProposalInfo";
import { PROPOSAL_CAR } from "../../../../constants/requestDetail/Proposal";
import { PROPOSAL } from "../../../../constants/requestDetail/Proposal";

import fetch from "isomorphic-unfetch";
import useStore from "../../../../stores";
import { useObserver } from "mobx-react";
import axios from "axios";
import { SERVER_URI } from "../../../../config";

const Detail = ({ list }) => {
	const isProposal = true;
	const router = useRouter();
	const [initialData, setInitialData] = useState([]);
	// const [selectedCompany, setselectedCompany] = useState([]);
	const [selectedCompany1, setselectedCompany1] = useState([]);
	const [selectedCompany2, setselectedCompany2] = useState([]);
	const [selectedCar1, setselectedCar1] = useState("");
	const [selectedCar2, setselectedCar2] = useState("");
	const [getCar, setCar] = useState([]);
	const [modal, openModal] = useState(false);
	const [detailMain, hideDetailMain] = useState(true);
	const [restrict, setrestrict] = useState(false);
	const [restrict2, setrestrict2] = useState(false);

	// const [carActive, setCarActive] = useState(false);
	// const [brandActive, setBrandActive] = useState(false);

	const [cnt, setcnt] = useState(0);

	const goToSuggestion = () => {
		router.push("/user/main/suggestion");
	};

	// const isValid = selectedCompany1 !== '' && selectedCar1 !== '';
	// const isValid = brandActive == true && carActive == true;

	const isValid = cnt < 3 && selectedCar1 ? true : false;
	const isValid2 = cnt > 3 && selectedCar2 ? true : false;
	console.log(isValid);

	const getData = () => {
		axios.get(`${SERVER_URI}/car`).then((res) => {
			const data = res.data.data;
			console.log(data);
			setInitialData(data);
		});
	};

	const getSelectedCar = (brand) => {
		axios.get(`${SERVER_URI}/car?brand=${brand}`).then((res) => {
			const { data } = res.data;
			console.log(data);
			setCar(data);
		});
	};

	useEffect(() => {
		if (initialData.length == 0) {
			getData();
		}
	}, [initialData]);

	const onCompanyHandler = (e) => {
		if (e.target.id == 0) {
			setrestrict(true);
		}

		if (e.target.id == 2) {
			setrestrict2(true);
			setrestrict(false);
		}
		setcnt(cnt + 1);
	};

	console.log(cnt, "cnt");

	const CompanyList = initialData.map((list, idx) => {
		// const active =
		//   selectedCompany1 == list.brand || selectedCompany2 == list.brand;

		return (
			<CompanyItem
				name={list.brand}
				id={list.id}
				onClick={(e) => {
					console.log(list.brand);
					getSelectedCar(list.brand);
					onCompanyHandler(e);
					setselectedCompany1(restrict ? list.brand : selectedCompany1);
					setselectedCompany2(restrict2 ? list.brand : selectedCompany2);
					if (cnt == 3) {
						setrestrict(false);
					}
					// setBrandActive(!brandActive);
				}}
				key={list.id}
				selectedCompany1={selectedCompany1}
				selectedCompany2={selectedCompany2}
				cnt={cnt}
			/>
		);
	});

	const CarList = getCar.map((list) => {
		// const active = selectedCar1 == list.model || selectedCar2 == list.model;

		return (
			<CarItem
				name={list.model}
				id={list.id}
				onClick={(e) => {
					console.log(list);
					setselectedCar1(restrict ? list.model : selectedCar1);
					setselectedCar2(restrict2 ? list.model : selectedCar2);
					// setCarActive(!carActive);
				}}
				key={list.id}
				selectedCar1={selectedCar1}
				selectedCar2={selectedCar2}
				cnt={cnt}
			/>
		);
	});
	console.log(restrict, restrict2);

	// Modal
	function Modal() {
		return (
			<div className={styles.modal_container}>
				<div className={styles.proposal_header}>
					<img
						src="/nav-ico-back.png"
						srcSet="/nav-ico-back@2x.png 2x, /nav-ico-back@3x.png 3x"
						onClick={() => {
							openModal(!modal);
							hideDetailMain(!detailMain);
						}}
					/>
					{PROPOSAL_HEADER}
				</div>
				<div className={styles.main_proposal_wrap}>
					<div className={styles.companies_list}>{CompanyList}</div>
					<div className={styles.cars_list}>{CarList}</div>
				</div>

				<div
					className={
						isValid || isValid2
							? styles.active_proposal_footer
							: styles.proposal_footer
					}
					onClick={() => {
						// router.back();
						openModal(!modal);
						hideDetailMain(!detailMain);
					}}
				>
					{PROPOSAL_FOOTER}
				</div>
			</div>
		);
	}

	return (
		<>
			<div
				className={styles.container}
				style={!detailMain ? { display: "none" } : { display: "block" }}
			>
				<RequestDetailHeader requestDetail={"요청상세"} />
				<RequestInfo list={list} />
				<div style={{ paddingTop: "15px" }} />
				<RequestInfoHeader
					proposal={PROPOSAL}
					isProposal={isProposal}
					requestNumber={REQUEST_NUMBER_TEXT}
					proposalInfo={PROPOSAL_INFO}
					style={{ display: "none" }}
				/>
				<div className={styles.proposal_subject}>{PROPOSAL_CAR}</div>
				<div className={styles.proposal_container}>
					<ProposalInput
						placeholder={PLACEHOLDER_CAR_BRAND_E}
						value={selectedCompany1}
						onClick={(e) => {
							openModal(true);
							hideDetailMain(false);
							onCompanyHandler(e);
						}}
						isProposalInput={true}
						image={true}
						id="0"
					/>
					<ProposalInput
						placeholder={PROPOSAL_CAR1}
						value={selectedCar1}
						isProposalInput={true}
						id="1"
					/>
					<ProposalInput
						placeholder={PLACEHOLDER_CAR_BRAND}
						value={selectedCompany2}
						onClick={(e) => {
							openModal(true);
							hideDetailMain(false);
							onCompanyHandler(e);
						}}
						isProposalInput={true}
						image={true}
						id="2"
					/>
					<ProposalInput
						placeholder={PROPOSAL_CAR2}
						value={selectedCar2}
						isProposalInput={true}
						id="3"
					/>
				</div>
				<ProposalText />
				<Agreement />
				<SuggestionAndReturnButton
					style={{ marginTop: "60px" }}
					buttonValue={SUGGESTION}
					goToSuggestion={goToSuggestion}
				/>
			</div>
			{modal === true ? <Modal /> : null}
		</>
	);
};

export async function getServerSideProps() {
	const res = await axios("http://localhost:5700/api/getRequestInfo");
	const list = await res.data;

	return {
		props: { list },
	};
}

export default Detail;
