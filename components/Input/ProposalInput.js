import React, { Fragment, useState, useEffect } from 'react';
import styles from './ProposalInput.scss';

const ProposalInput = ({
  id,
  placeholder,
  type,
  value,
  isButton,
  buttonValue,
  onClick,
  name,
  image,
  isProposalInput,
  choiceResult,
  formValidation,
  onKeyPress,
}) => {
  const [choiceProps, setChoiceProps] = useState('');
  useEffect(() => {
    setChoiceProps(choiceResult);
  }, [choiceResult]);

  const changeChoiceProps = (value) => {
    setChoiceProps(value);
  };
  return (
    <div className={styles.proposal_inputSide}>
      <div className={styles.suggestionCompany}>
        <input
          placeholder={placeholder}
          id={id ? id : null}
          type={type ? type : 'text'}
          name={name}
          onKeyPress={onKeyPress}
          value={value ? value : null}
          formValidation={formValidation}
          onClick={(e) => {
            isProposalInput && onClick(e);
          }}
          image={image}
        />
        {isButton && buttonValue ? (
          <div className={styles.button_wrap} onClick={onClick}>
            <div className={styles.input_button}>
              <div>{buttonValue}</div>
            </div>
          </div>
        ) : (
          ''
        )}
        {image ? (
          <img
            src='/194.png'
            srcSet='/194@2x.png, /194@3x.png'
            className={styles.input_button}
          />
        ) : (
          ''
        )}
      </div>
    </div>
  );
};
export default ProposalInput;
