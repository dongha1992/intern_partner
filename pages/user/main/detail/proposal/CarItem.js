import React, { useState } from 'react';
import styles from './Carltem.scss';
import { withRouter, useRouter } from 'next/router';
import useStore from '../../../../../stores';
import { useObserver } from 'mobx-react';
const { ProposalStore } = useStore();
import axios from 'axios';

const CarItem = ({ name, id, onClick, active }) => {
  const router = useRouter();
  // const [selectedCarItem, setSelectedCarItem] = useState(data);
  // console.log(data, 'props');
  console.log(active);

  return (
    <div
      id={id}
      name={name}
      onClick={onClick}
      className={
        active ? styles.selected_carItem_container : styles.carItem_container
      }>
      {name}
    </div>
  );
};

export default CarItem;
