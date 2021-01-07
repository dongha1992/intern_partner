import React, { useState } from 'react';
import styles from '../Detail.scss';
import { withRouter, useRouter } from 'next/router';
import useStore from '../../../../../stores';
import { useObserver } from 'mobx-react';
const { ProposalStore } = useStore();
import axios from 'axios';

const CarItem = ({ name, id, onClick, selectedCar1, selectedCar2, cnt }) => {
  const router = useRouter();
  // const [selectedCarItem, setSelectedCarItem] = useState(data);
  // console.log(data, 'props');
  // console.log(active);
  // console.log(props);
  return (
    <div
      id={id}
      name={name}
      onClick={onClick}
      className={
        (cnt < 3 && selectedCar1 === name) || (cnt > 2 && selectedCar2 === name)
          ? styles.selected_carItem_container
          : styles.carItem_container
      }>
      {name}
    </div>
  );
};

export default CarItem;
