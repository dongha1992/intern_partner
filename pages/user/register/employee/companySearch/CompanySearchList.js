import React, { Component } from 'react';
import { SignUpInput } from '../../../../../components/Input';
import SearchItem from './CompanySearchItem';
import apiSearchItem from '../../../../../api/getSearchResult';
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

  //   const [inputValue, setInputValue] = useState('');

  //   useEffect(() => {
  //     setInputValue(searchResult);
  //   }, [searchResult]);

  //   const changeInputValue = (value) => {
  //     setInputValue(value);
  //   };

  static async getInitialProps({ mobxStore }) {
    return { mobxStore };
  }

  // this.setState({
  //   inputSearchValue: this.props.SearchCompanyStore.searchResult,
  // });

  componentDidUpdate(prevProps) {
    if (prevProps.SearchCompanyStore.searchInput.length === 0) {
      this.props.SearchCompanyStore.setModalClose(false);
      this.props.SearchCompanyStore.setSearchResult('');
    }
  }

  // changeInputValue = async (value) => {
  //   console.log(value, 'value');
  //   const data = { name: value };
  //   console.log(data);
  //   const response = await apiSearchItem.getSearchItem(data);
  //   const responseData = response.data.searchResult;
  //   console.log(responseData, 'response data');
  //   this.setState({
  //     result: [responseData],
  //   });
  // };

  componentDidMount() {
    axios
      .get(`${SERVER_URI}/company`)
      .then((response) => {
        console.log(response.data);
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
      console.log(item);
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
    console.log(this.state.result && this.state.result);
    const { SearchCompanyStore } = this.props;
    const { result, inputSearchLetter } = this.state;
    const isModal = SearchCompanyStore.searchInput.length;

    // const searchItem =
    //   this.state.result &&
    //   this.state.result.length > 0 &&
    //   this.state.result[0].map((item) => {
    //     return (
    //       <SearchItem
    //         key={item.id}
    //         name={item.name}
    //         address={item.address}
    //         setSearchResult={SearchCompanyStore.setSearchResult}
    //         setModalClose={SearchCompanyStore.setModalClose}
    //       />
    //     );
    //   });

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
