import { observable, action } from 'mobx';

class MainTabActiveStore {
  @observable selectedId = 1;

  constructor() {}

  @action setId = (id) => {
    this.selectedId = id;
  };
}

export default MainTabActiveStore;
