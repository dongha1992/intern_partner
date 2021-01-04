import React, { Fragment, useState, useEffect } from 'react';
import styles from './ProposalInput.scss';

// const { ProposalStore } = useStore();
const ProposalInput = ({
  id,
  carbrand,
  suggestionCarName,
  placeholder,
  type,
  onChange,
  value,
  padding,
  isButton,
  buttonValue,
  onClick,
  name,
  image,
  isProposalInput,
  choiceResult,
  SelectedCarBrand,
  SelectedCarName,
  userInputValidation,
  formValidation,
  onKeyPress,
  isSubmit,
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
      <span
        className={styles.suggestionCompany}
        onClick={() => {
          isProposalInput && onClick();
        }}>
        <input
          placeholder={placeholder}
          id={id ? id : null}
          type={type ? type : 'text'}
          name={name}
          onChange={(e) => {
            choiceProps ? changeChoiceProps(e.target.value) : onChange(e);
          }}
          disabled
          onKeyPress={onKeyPress}
          value={choiceProps ? userSelectedCompany : value}
          formValidation={formValidation}
          onClick={() => {
            isProposalInput && onClick();
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
            srcSet='/194@2x.png 2x, /194@3x.png 3x'
            className={styles.input_button}
          />
        ) : (
          ''
        )}
      </span>
    </div>
  );
};
export default ProposalInput;
