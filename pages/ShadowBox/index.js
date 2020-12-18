import React from 'react';
import styles from './ShadowBox.scss';
import CountUp from 'react-countup';
import {useCountUp} from 'react-countup';
import '../../styles/globals.scss';
import { FORM_USER, NUMBER_OF_CONTRACTS, SUM_OF_CHARGE }
from '../../constants/landingPage/SecondPage';

export default function index() {
    const boxData = [
        {id : 1, innerText : FORM_USER, rectangleWidth : '85px', performanceIndicator : '930개 +'},
        {id : 2, innerText : NUMBER_OF_CONTRACTS, rectangleWidth : '94px', performanceIndicator : '940000개 +'},
        {id : 3, innerText : SUM_OF_CHARGE, rectangleWidth : '70px', performanceIndicator : '850억 +'}
    ]
    const { countUp, start, pauseResume, reset, update } = useCountUp({
        start: 0,
        end: 123,
        delay: 1000,
    });

    return (
        <>
            {boxData.map(data =>
            <div key = {data.id} className={styles.box_container}>
                <div className={styles.inner_text}>{data.innerText}</div>
                <div className={styles.rectangle} style={{width: data.rectangleWidth}} />
                <div className={styles.performance_indicator}>
                    <CountUp duration={3} delay={3} redraw={true} start={0} end={Number(data.performanceIndicator?.split('억')[0])} />
                    {data.performanceIndicator?.includes('억')?'억 +':''}
                        {/* {data.performanceIndicator} */}
                    <CountUp duration={3} delay={3} redraw={true} start={0} end={Number(data.performanceIndicator?.split('개')[0])} />
                    {data.performanceIndicator?.includes('개')?'개 +':''}
                    {/* {data.performanceIndicator.split('억'||'개')[1]} */}
                </div>
            </div>
            )}
        </>
    )
}
