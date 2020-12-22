import { observable, action } from 'mobx';

class SignUpEmployeeStore {
  // @observable userId = '';
  // @observable userPassword = '';
  // @observable userPasswordCheck = '';
  // @observable userName = '';
  // @observable userNumber = '';
  // @observable userPosition = '';
  // @observable userEmail = '';
  // @observable userCompany = '';

  @observable
  form = {
    userId: {
      value: '',
      status: {
        error: {
          valid: false,
          message: 'ID must be longer than 6 character',
        },
        success: {
          valid: true,
          message: 'ID is available',
        },
      },
    },
    userPassword: {
      value: '',
      status: {
        error: {
          valid: false,
          message: 'Password must be longer than 8 digits with character',
        },
        success: {
          valid: true,
          message: 'Password is available',
        },
      },
    },
    userPasswordCheck: {
      value: '',
      status: {
        error: {
          valid: false,
          message: 'Password does not match',
        },
        success: {
          valid: true,
          message: 'Password is available',
        },
      },
    },
    userEmail: {
      value: '',
      status: {
        error: {
          valid: false,
          message: 'An incorrect Email, please check your Email again ',
        },
        success: {
          valid: true,
          message: 'Email is available',
        },
      },
    },
    userName: { value: '' },
    userNumber: { value: '' },
    userPosition: { value: '' },
    isRegisterValid: false,
  };

  constructor(root) {
    this.root = root;
  }

  @action setValue = (e) => {
    this.form[e.target.name].value = e.target.value;
  };
}

export default SignUpEmployeeStore;
