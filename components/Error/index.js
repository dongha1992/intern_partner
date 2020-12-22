import React, { Component } from 'react';
import styles from './ErrorMessage.scss';
import { inject, observer } from 'mobx-react';

@inject('SignUpEmployeeStore')
@observer
class ErrorMessage extends Component {
  constructor(props) {
    super(props);
  }

  static async getInitialProps({ mobxStore }) {
    return { mobxStore };
  }

  render() {
    return <div className={styles.errorMessage}>error</div>;
  }
}

export default ErrorMessage;
