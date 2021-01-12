import React from 'react';
import styles from '../Detail.scss';

const CarItem = ({ name, id, onClick, selectedCar1, selectedCar2, cnt }) => {
  return (
    <div
      id={id}
      name={name}
      onClick={onClick}
      className={
        (cnt < 3 && selectedCar1.name === name) ||
        (cnt > 2 && selectedCar2.name === name)
          ? styles.selected_carItem_container
          : styles.carItem_container
      }>
      {name}
    </div>
  );
};

export default CarItem;
