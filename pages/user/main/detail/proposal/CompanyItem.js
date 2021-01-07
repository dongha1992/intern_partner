import React, { useState } from 'react';
// import styles from './CompanyItem.scss';
import styles from '../Detail.scss';
import { withRouter, useRouter } from 'next/router';

const CompanyItem = ({
  name,
  id,
  onClick,
  active,
  selectedCompany1,
  selectedCompany2,
  cnt,
}) => {
  const router = useRouter();
  console.log(active);
  // console.log(active, 'company');
  return (
    <div
      id={id}
      name={name}
      onClick={onClick}
      className={
        (cnt < 3 && selectedCompany1 === name) ||
        (cnt > 2 && selectedCompany2 === name)
          ? styles.selected_companyItem_container
          : styles.companyItem_container
      }>
      {name}
    </div>
  );
};
// 이거를 getServerSideProps
// export async function getServerSideProps() {
//   const res = await axios.get('http://localhost:5700/api/getCarList');
//   const data = res.data;
//   console.log(res, data);
//   return {
//     props: {
//       data,
//     },
//   };
// }

export default CompanyItem;
