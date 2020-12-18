import React from 'react';
import Logo from '../components/Logo/index';
import Rectangle from '../components/Rectangle/index';
import Button from '../components/GoToLoginButton';
import ShadowBox from './ShadowBox/index';
import PhoneForm from './PhoneForm/index';
import AppLogoBox from './AppLogoBox/index';
import styles from './LandingPage.scss';
import { useRouter } from 'next/router';
import FadeIn from 'react-fade-in';
import Fade from 'react-reveal/Fade';
import { WITH_US_TEXT, IMS_ROLE, DATE } from '../constants/landingPage/SecondPage';
import { INNOVATIVE, RENTAL_CAR_SYSTEM, PERFECT, BUSINESS_PARTNER, IMS } from '../constants/landingPage/FirstPage';
import { HANDPHONE_TEXT, REALTIME_REQUEST_CONFIRMATION, 
         FIRST_DESCRIPTION, SECOND_DESCRIPTION, THIRD_DESCRIPTION } from '../constants/landingPage/ThirdPage';
import { INTELLIGENT, PROMOTION, } from '../constants/landingPage/FourthPage';

export default function LandingPage() {
  const router = useRouter();
  const handleGoToLogin = () => {
    console.log(">>>", router);
    router.push('/user/register/employee')
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.main_wrap}>
        <Logo />
        <FadeIn>
          <Fade left>
            <div className={styles.innovative_rental_car_system}>
              {INNOVATIVE}<br />
              {RENTAL_CAR_SYSTEM}
            </div>
          </Fade>
        </FadeIn>
        <FadeIn delay='250'>
          <Fade left>
            <Rectangle />
          </Fade>
        </FadeIn>
        <FadeIn delay='450'>
          <div className={styles.perfect_business_partner_ims}>
            <Fade left>{PERFECT}<br /></Fade>
            <Fade right>{BUSINESS_PARTNER}<br /></Fade>
            <Fade right><span className={styles.text_style_1}>{IMS}</span></Fade>
          </div>
        </FadeIn>
        <FadeIn delay='650'>
          <Fade right>
            <div className={styles.button}>
              <Button onClick={handleGoToLogin} />
            </div>
          </Fade>
        </FadeIn>
      </div>
      <div className={styles.second_page_wrap}>
        <Fade left>
          <div className={styles.with_us_text}>
            {WITH_US_TEXT}
          </div>
        </Fade>
        <Fade left>  
          <div className={styles.ims_role}>
            {IMS_ROLE}
          </div>
        </Fade>
        <Fade left>
          <ShadowBox />
        </Fade>
        <Fade left>
          <div className={styles.date_of_update}>
            {DATE}
          </div>
        </Fade>
      </div>
      <div className={styles.third_page_wrap}>
        <Fade left>
          <div className={styles.handphone_text_box}>
            {HANDPHONE_TEXT}
          </div>
        </Fade>
        <Fade left>
          <PhoneForm />
        </Fade>

        <div className={styles.rectangle_box}>
          <Fade left>
            <div className={styles.realtime_confirmation}>
              {REALTIME_REQUEST_CONFIRMATION}
            </div>
          </Fade>
          <div className={styles.description}>
            <Fade left>{FIRST_DESCRIPTION} <br /></Fade>
            <Fade left>{SECOND_DESCRIPTION} <br /></Fade>
            <Fade left>{THIRD_DESCRIPTION}</Fade>
          </div>
        </div>
      </div>
      <div className={styles.fourth_page_wrap}>
        <Fade left><div className={styles.intelligent_mobility_system}>{INTELLIGENT}</div></Fade>
        <Fade left><div className={styles.ims_form}>{PROMOTION}</div></Fade>
        <Fade left>
          <AppLogoBox />
        </Fade>
        <Button 
          onClick={handleGoToLogin}
        />
      </div>
    </div>
  );
}