import React, { Component } from 'react';
import { SignUpInput } from '../../../../../components/SignUpCompanyInput';
import { inject, observer } from 'mobx-react';
import axios from 'axios';
import { ADDRESS_1, ADDRESS_2, CITY, STATE, ZIP_CODE } from '../../../../../constants/company/CompanyAddressLabel';
import { SEARCH_COMPANY_PADDING_TOP } from '../../../../../constants/employee/CompanySearchPadding';
import { SERVER_URI } from '../../../../../config';
import styles from './CompanySearch.scss';

const isImage = true;
const isSearch = true;
@inject('SearchAddressStore')
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
    if (prevProps.SearchAddressStore.searchAddressInput.length === 0) {
      this.props.SearchAddressStore.setModalClose(false);
      this.props.SearchAddressStore.setSearchResult('');
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
    // return filteredArray.map((item) => {
    //   console.log(item);
    //   return (
    //     <SearchItem
    //       key={item.id}
    //       name={item.name}
    //       address={item.address2}
    //       id={item.id}
    //       setSearchResult={this.props.SearchCompanyStore.setSearchResult}
    //       setModalClose={this.props.SearchCompanyStore.setModalClose}
    //       setCompanyId={this.props.SearchCompanyStore.setCompanyId}
    //     />
    //   );
    // });
  }

  render() {
    // console.log(this.state.result && this.state.result);
    const { SearchAddressStore } = this.props;
    const { result, inputSearchLetter } = this.state;
    const isModal = SearchAddressStore.searchAddressInput.length;
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
            // label={SEARCH_COMPANY}
            padding={SEARCH_COMPANY_PADDING_TOP}
            isSearch={isSearch}
            placeholder={ADDRESS_1}
            value={
              SearchAddressStore.searchResult
                ? SearchAddressStore.searchResult
                : SearchAddressStore.searchInput
            }
            onChange={(e) => {
              SearchAddressStore.setSearchAddressInput(e.target.value);
              this.changeInputValue(e.target.value);
            }}
            searchResult={SearchAddressStore.searchResult}
            inputSearchLetter={inputSearchLetter}
          />
           <SignUpInput
            // label={SEARCH_COMPANY}
            padding={SEARCH_COMPANY_PADDING_TOP}
            isSearch={isSearch}
            placeholder={ADDRESS_2}
            value={
              SearchAddressStore.searchResult
                ? SearchAddressStore.searchResult
                : SearchAddressStore.searchInput
            }
            onChange={(e) => {
              SearchAddressStore.setSearchAddress2Input(e.target.value);
              this.changeInputValue(e.target.value);
            }}
            searchResult={SearchAddressStore.searchResult}
            inputSearchLetter={inputSearchLetter}
          />
           <SignUpInput
            // label={SEARCH_COMPANY}
            padding={SEARCH_COMPANY_PADDING_TOP}
            isImage={isImage}
            isSearch={isSearch}
            placeholder={CITY}
            value={
              SearchAddressStore.searchResult
                ? SearchAddressStore.searchResult
                : SearchAddressStore.searchInput
            }
            onChange={(e) => {
              SearchAddressStore.setSearchCityInput(e.target.value);
              this.changeInputValue(e.target.value);
            }}
            searchResult={SearchAddressStore.searchResult}
            inputSearchLetter={inputSearchLetter}
          />
           <SignUpInput
            // label={SEARCH_COMPANY}
            padding={SEARCH_COMPANY_PADDING_TOP}
            isImage={isImage}
            isSearch={isSearch}
            placeholder={STATE}
            value={
              SearchAddressStore.searchResult
                ? SearchAddressStore.searchResult
                : SearchAddressStore.searchInput
            }
            onChange={(e) => {
              SearchAddressStore.setSearchStateInput(e.target.value);
              this.changeInputValue(e.target.value);
            }}
            searchResult={SearchAddressStore.searchResult}
            inputSearchLetter={inputSearchLetter}
          />
          <SignUpInput
            // label={SEARCH_COMPANY}
            padding={SEARCH_COMPANY_PADDING_TOP}
            isSearch={isSearch}
            placeholder={ZIP_CODE}
            value={
              SearchAddressStore.searchResult
                ? SearchAddressStore.searchResult
                : SearchAddressStore.searchInput
            }
            onChange={(e) => {
              SearchAddressStore.setSearchZipCodeInput(e.target.value);
              this.changeInputValue(e.target.value);
            }}
            searchResult={SearchAddressStore.searchResult}
            inputSearchLetter={inputSearchLetter}
          />

        </form>
        <div
          className={styles.search_result_wrap}
          style={{
            display:
              !isModal || SearchAddressStore.isModalClose ? 'none' : 'block',
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
