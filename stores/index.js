import { useStaticRendering } from 'mobx-react';
import SignUpEmployeeStore from './SignUpEmployeeStore';
import SearchCompanyStore from './SearchCompanyStore';

const isServer = typeof window === 'undefined';
useStaticRendering(isServer);

let store = null;

class RootStore {
  constructor() {
    this.SignUpEmployeeStore = new SignUpEmployeeStore();
    this.SearchCompanyStore = new SearchCompanyStore();
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
