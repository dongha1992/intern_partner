import { useStaticRendering } from 'mobx-react';
import SignUpEmployeeStore from './SignUpEmployeeStore';
import SignUpCompanyStore from './SignUpCompanyStore';
import SearchCompanyStore from './SearchCompanyStore';
import SearchAddressStore from './SearchAddressStore';
import LoginStore from './LoginStore';
import ChatStore from './ChatStore';

const isServer = typeof window === 'undefined';
useStaticRendering(isServer);

let store = null;

class RootStore {
  constructor() {
    this.SignUpEmployeeStore = new SignUpEmployeeStore();
    this.SignUpCompanyStore = new SignUpCompanyStore();
    this.SearchCompanyStore = new SearchCompanyStore();
    this.SearchAddressStore = new SearchAddressStore();
    this.LoginStore = new LoginStore();
  }
}

export default function initializeStore() {
  if (isServer) {
    return new RootStore();
  } else {
    if (store === null) {
      store = new RootStore();
    }
    return store;
  }
}
