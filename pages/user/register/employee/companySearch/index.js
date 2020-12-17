import React from 'react';
import Header from '../../../../../components/Header';
import { SignUpInput } from '../../../../../components/Input';
import SearchItem from './companySearchItem';
import Button from '../../../../../components/Button';
import { THEME_COLOR } from '../../../../../constants/Color';
import styles from './companySearch.scss';
import { COMPANY_SEARCH } from '../../../../../constants/employee/FormTitle';
import { SEARCH_COMPANY } from '../../../../../constants/employee/CompanySearchLabel';
import { CONFIRM_BUTTON } from '../../../../../constants/employee/CompanySearchButton';
import { SEARCH_COMPANY_PADDING_TOP } from '../../../../../constants/employee/CompanySearchPadding';

const isImage = true;
const isSearch = true;

const searchItems = [
  {
    id: 1,
    name: '창신동',
    address: '서울시 종로구 창신동',
  },
  {
    id: 2,
    name: '가좌역',
    address: '서울시 서대문구 가좌동',
  },
];

const companySearch = () => {
  const searchItem = searchItems.map((item) => {
    return <SearchItem key={item.id} name={item.name} address={item.address} />;
  });
  const searchCompanyHandler = () => {
    console.log('dd');
  };

  return (
    <div className={styles.company_search_container}>
      <Header title={COMPANY_SEARCH} />
      <div
        className={styles.form_wrap}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'space-around',
          height: '694px',
        }}>
        <div className={styles.form_container}>
          <form action='post' className={styles.input_form}>
            <SignUpInput
              onChange={() => {
                searchCompanyHandler();
              }}
              label={SEARCH_COMPANY}
              padding={SEARCH_COMPANY_PADDING_TOP}
              isImage={isImage}
              isSearch={isSearch}
            />
          </form>
          <div className={styles.search_result_wrap}>
            <div className={styles.search_list}>{searchItem}</div>
          </div>
        </div>
        <Button value={CONFIRM_BUTTON} color={THEME_COLOR} />
      </div>
    </div>
  );
};

export default companySearch;
