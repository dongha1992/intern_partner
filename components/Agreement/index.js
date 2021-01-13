import React, { Fragment, useState, useEffect } from 'react';
import {
  agreeWithAll,
  agreementList,
} from '../../constants/requestDetail/Agreement';
import { AGREEMENT } from '../../constants/requestDetail/Proposal';
import styles from './Agreement.scss';

export default function index() {
  const [lists, setLists] = useState(agreementList);
  const [isChecked, setIsChecked] = useState(false);
  const [firstButton, setFirstButton] = useState(false);
  const [secondButton, setSecondButton] = useState(false);
  const [thirdButton, setThirdButton] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let counter = 0;
    if (firstButton) counter++;
    if (secondButton) counter++;
    if (thirdButton) counter++;
    console.log(counter);
    setCount(counter);
    count == 3 ? setIsChecked(true) : setIsChecked(false);
  });
  const handleChecked = () => {
    if (!isChecked) {
      setFirstButton(true);
      setSecondButton(true);
      setThirdButton(true);
      const status = lists.map((list) => {
        return { ...list, checked: true };
      });
      setLists(status);
    } else {
      setFirstButton(false);
      setSecondButton(false);
      setThirdButton(false);
      const status = lists.map((list) => {
        return { ...list, checked: false };
      });
      setLists(status);
    }
    setIsChecked(!isChecked);
  };

  const handleCheck = (e) => {
    e.target.id == 1
      ? setFirstButton(!firstButton)
      : e.target.id == 2
      ? setSecondButton(!secondButton)
      : setThirdButton(!thirdButton);

    const status = lists.map((list) =>
      list.id == e.target.id
        ? {
            ...list,
            checked: !list.checked,
          }
        : list
    );
    setLists(status);
  };

  return (
    <>
      <div className={styles.agreement}>{AGREEMENT}</div>
      <div className={styles.border} />
      <label className={styles.container}>
        <input type='checkbox' onChange={handleChecked} checked={isChecked} />
        <span className={styles.checkmark} />
        <span style={{ marginTop: 6 }}>{agreeWithAll}</span>
      </label>
      <div className={styles.border} />
      {lists.map((list) => {
        return (
          <label className={styles.container} key={list.id}>
            <input
              id={list.id}
              type='checkbox'
              onChange={handleCheck}
              checked={list.checked}
            />
            <span className={styles.checkmark} />
            <span style={{ marginTop: 6 }}>{list.text}</span>
            <img
              src='/ic-arrow-right-terms.png'
              srcSet='/ic-arrow-right-terms@2x.png,
							 /ic-arrow-right-terms@3x.png'
              className={styles.ic_arrow_right_terms}
            />
          </label>
        );
      })}
      <div className={styles.border} />
    </>
  );
}
