import React, { Component } from 'react';
import { withRouter } from 'next/router';
import styles from './SelectStatus.scss';
import { SelectStatus_Data } from '../../../../constants/login/SelectStatus';

@withRouter
class SelectStatus extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      isChecked: null,
    };
  }
  goToSignUp = (e) => {
    if (this.state.isChecked == 0) {
      this.props.router.push('/user/register/company');
    } else if (this.state.isChecked == 1) {
      this.props.router.push('/user/register/employee');
    }
  };

  handleCheckButton = (e) => {
    this.setState({ isChecked: e.target.dataset.id });
  };

  render() {
    return (
      <div className={styles.selectStatus_container}>
        <img
          src='/select-your-status.png'
          srcSet='/select-your-status@2x.png 2x,
        /select-your-status@3x.png 3x'
          className={styles.select_your_status}
        />
        <div className={styles.selectStatus_btn_group}>
          {SelectStatus_Data.map((btn, idx) => {
            return (
              <div
                className={styles.company_button}
                onClick={(e) => {
                  this.handleCheckButton(e);
                }}>
                <span data-id={idx}>{btn.name}</span>
                {this.state.isChecked == idx ? (
                  <img
                    src='/checked_1349.png'
                    srcSet='/checked_1349.png 2x, /checked_1349.png 3x'
                    data-id={idx}
                    className={styles.check_img}
                  />
                ) : (
                  <img
                    src='/1349.png'
                    srcSet='/1349.png 2x, /1349.png 3x'
                    data-id={idx}
                    className={styles.check_img}
                  />
                )}
                {this.state.isChecked == idx ? (
                  <img
                    id={idx}
                    key={idx}
                    data-id={idx}
                    name='checkBefore'
                    src='/checked_rectangle.png'
                    srcSet='/checked_rectangle@2x.png 2x, /checked_rectangle@3x.png 3x'
                    className={styles.rectangle1}
                  />
                ) : (
                  <img
                    id={idx}
                    key={idx}
                    data-id={idx}
                    name='checkAfter'
                    src='/rectangle1.png'
                    srcSet='/rectangle1@2x.png 2x, /rectangle1@3x.png 3x'
                    className={styles.rectangle1}
                  />
                )}
              </div>
            );
          })}
        </div>

        {this.state.isChecked ? (
          <img
            src='/checked-next-button.png'
            srcSet='/checked-next-button@2x.png 2x,
       /checked-next-button@3x.png 3x'
            onClick={this.goToSignUp}
            className={styles.next_button}
          />
        ) : (
          <img
            src='/next-button.png'
            srcSet='/next-button@2x.png 2x,
       /next-button@3x.png 3x'
            className={styles.next_button}
          />
        )}
      </div>
    );
  }
}

export default SelectStatus;
