import { useStaticRendering } from 'mobx-react';
import SignUpEmployeeStore from './SignUpEmployeeStore';
import SignUpCompanyStore from './SignUpCompanyStore';
import SearchCompanyStore from './SearchCompanyStore';
import SearchAddressStore from './SearchAddressStore';
import LoginStore from './LoginStore';
import MainFooterActiveStore from './MainFooterActiveStore';
import ChatStore from './ChatStore';
import MyInformationUpdateStore from './MyInformationUpdateStore';
import NoticeStackStore from './NoticeStackStore';

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
    this.MainFooterActiveStore = new MainFooterActiveStore();
    this.MyInformationUpdateStore = new MyInformationUpdateStore();
    this.NoticeStackStore = new NoticeStackStore();
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
