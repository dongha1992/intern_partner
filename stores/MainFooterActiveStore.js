import { observable, action } from 'mobx';

class MainFooterActiveStore {
  @observable selectedId = 1;

  constructor() {}

  @action setId = (id) => {
    this.selectedId = id;
  };
}

export default MainFooterActiveStore;
