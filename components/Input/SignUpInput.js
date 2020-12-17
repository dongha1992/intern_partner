import React, { Fragment } from 'react';
import styles from './SignUpInput.scss';

export default function SignUpInput({
  id,
  label,
  type,
  onChange,
  onKeyPress,
  value,
  padding,
  isButton,
  isImage,
  buttonValue,
  onClick,
  isSearchInput,
  isSearch,
}) {
  return (
    <div className={styles.input_btn_container}>
      <div className={styles.input_wrap} style={{ paddingTop: `${padding}px` }}>
        <input
          id={id ? id : null}
          type={type ? type : 'text'}
          name={label}
          onChange={(e) => {
            isSearch ? searchCompanyHandler(e.target.value) : onChange(e);
          }}
          onClick={() => {
            isSearchInput && onClick();
          }}
          value={value ? value : ''}
          className={styles.user_input}
        />
        <label
          htmlFor={id ? id : null}
          children={label}
          className={styles.input_label}
        />
        {isButton && buttonValue ? (
          <div className={styles.button_wrap}>
            <div className={styles.input_button}>
              <div>{buttonValue}</div>
            </div>
          </div>
        ) : (
          ''
        )}
        {isImage ? (
          <div className={styles.image_wrap}>
            <img
              src='/1366.png'
              srcSet='/1366@2x.png 2x, /1366@3x.png 3x'
              className={styles.input_button}
            />
          </div>
        ) : (
          ''
        )}
        <div className={styles.input_border}></div>
      </div>
    </div>
  );
}

// export default { SignUpInput, SignUpInputWithButton };
