import { useStaticRendering } from 'mobx-react';
import SignUpEmployeeStore from './SignUpEmployeeStore';
import SearchCompanyStore from './SearchCompanyStore';
import SearchAddressStore from './SearchAddressStore';

const isServer = typeof window === 'undefined';
useStaticRendering(isServer);

let store = null;

class RootStore {
  constructor() {
    this.SignUpEmployeeStore = new SignUpEmployeeStore();
    this.SearchCompanyStore = new SearchCompanyStore();
    this.SearchAddressStore = new SearchAddressStore();

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
