import React, { Component } from 'react';
import { SignUpInput } from '../../../../../components/Input';
import SearchItem from './CompanySearchItem';
import { inject, observer } from 'mobx-react';
import axios from 'axios';
import { SEARCH_COMPANY } from '../../../../../constants/employee/CompanySearchLabel';
import { SEARCH_COMPANY_PADDING_TOP } from '../../../../../constants/employee/CompanySearchPadding';
import { SERVER_URI } from '../../../../../config';

import styles from './CompanySearch.scss';

const isImage = true;
const isSearch = true;

@inject('SearchCompanyStore')
@observer
class CompanySearchList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputSearchLetter: '',
      result: [],
    };
  }

  static async getInitialProps({ mobxStore }) {
    return { mobxStore };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.SearchCompanyStore.searchInput.length === 0) {
      this.props.SearchCompanyStore.setModalClose(false);
      this.props.SearchCompanyStore.setSearchResult('');
    }
  }

  componentDidMount() {
    axios
      .get(`${SERVER_URI}/company`)
      .then((response) => {
        this.setState({
          result: response.data.data,
        });
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response, 'error response');
        } else if (error.request) {
          console.log(error.request, 'error request');
        } else {
          console.log('Error');
        }
      });
  }

  changeInputValue(value) {
    this.setState({
      inputSearchLetter: value,
    });
  }

  getFilteredItem(data) {
    let filteredArray = data.filter((el) => {
      return el.name.indexOf(this.state.inputSearchLetter) > -1;
    });
    return filteredArray.map((item) => {
      return (
        <SearchItem
          key={item.id}
          name={item.name}
          address={item.address2}
          id={item.id}
          setSearchResult={this.props.SearchCompanyStore.setSearchResult}
          setModalClose={this.props.SearchCompanyStore.setModalClose}
          setCompanyId={this.props.SearchCompanyStore.setCompanyId}
        />
      );
    });
  }

  render() {
    const { SearchCompanyStore } = this.props;
    const { result, inputSearchLetter } = this.state;
    const isModal = SearchCompanyStore.searchInput.length;

    return (
      <div className={styles.form_container}>
        <form action='post' className={styles.input_form}>
          <SignUpInput
            label={SEARCH_COMPANY}
            padding={SEARCH_COMPANY_PADDING_TOP}
            isImage={isImage}
            isSearch={isSearch}
            value={
              SearchCompanyStore.searchResult
                ? SearchCompanyStore.searchResult
                : SearchCompanyStore.searchInput
            }
            onChange={(e) => {
              SearchCompanyStore.setSearchInput(e.target.value);
              this.changeInputValue(e.target.value);
            }}
            searchResult={SearchCompanyStore.searchResult}
            inputSearchLetter={inputSearchLetter}
          />
        </form>
        <div
          className={styles.search_result_wrap}
          style={{
            display:
              !isModal || SearchCompanyStore.isModalClose ? 'none' : 'block',
          }}>
          <div className={styles.result_list}>
            {this.getFilteredItem(result && result)}
          </div>
        </div>
      </div>
    );
  }
}
export default CompanySearchList;
