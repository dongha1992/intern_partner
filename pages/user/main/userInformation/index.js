import React, { useState } from 'react';
import styles from './userInformation.scss';
import { MainHeader } from '../../../../components/Header';
import { useRouter } from 'next/router';
import { USER_INFORMATION_BUTTON } from '../../../../constants/main/UserInformationButton';
import { MORE_PAGE_LIST } from '../../../../constants/main/MorePageList';
import { MainFooter } from '../../../../components/Footer';
import LogoutModal from './LogoutModal';

const UserInformation = () => {
  const router = useRouter();
  const [isModal, setIsModal] = useState(false);
  const user = JSON.parse(cookie.get('user'));
  console.log(user);
  const pageList = MORE_PAGE_LIST.map((list, idx) => {
    return (
      <div className={styles.lists} key={list}>
        <div
          className={styles.list}
          onClick={() => {
            const mapper = {
              0: () => {
                router.push('/user/main/userInformation/employeeList');
              },
              1: () => {
                setIsModal(true);
              },
            };

            mapper[idx]();
          }}>
          {list}
        </div>
      </div>
    );
  });

  const onModalHandler = () => {
    setIsModal(false);
  };

  return (
    <div className={styles.container}>
      <MainHeader />
      <div className={styles.dividerTop} />
      <div className={styles.userInformationWrap}>
        <div className={styles.left}>
          <div className={styles.userCompany}>IMS_USA2020</div>
          <div className={styles.userName}>DONGHA KIM</div>
        </div>
        <div className={styles.right}>
          <input
            type='button'
            value={USER_INFORMATION_BUTTON}
            className={styles.myInformation}
            onClick={() => {
              router.push('/user/main/userInformation/myInfo');
            }}
          />
        </div>
      </div>
      <div className={styles.dividerBottom} />
      <div className={styles.listWrap}>{pageList}</div>
      <MainFooter />
      <LogoutModal isModal={isModal} onModalHandler={onModalHandler} />
    </div>
  );
};

export default UserInformation;
