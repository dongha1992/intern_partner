import React from 'react';
import styles from './SignUpForm.scss';

const Form = ({ title }) => {
  return (
    <div className={styles.form_container}>
      <h2 className={styles.title}>{title}</h2>
      <form action='post' className={styles.input_form}></form>
    </div>
  );
};

export default Form;
