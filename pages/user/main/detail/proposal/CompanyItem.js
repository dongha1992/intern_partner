import React, { useState } from 'react';
import styles from './CompanyItem.scss';
import { withRouter, useRouter } from 'next/router';

const CompanyItem = ({ name, id, onClick, active }) => {
  const router = useRouter();
  // const { ProposalStore } = useStore();
  // const [selectedCarItem, setSelectedCarItem] = useState(data);
  // console.log(data, 'props');
  console.log(active, 'company');
  return (
    <div
      id={id}
      name={name}
      onClick={onClick}
      className={
        active
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
