import { observable, action } from 'mobx';

class ProposalStore {
  @observable carBrand = null;
  @observable suggestionCarName = null;

  constructor() {}

  @action setValue = (e) => {
    this[e.target.name] = e.target.value;
  };
}

export default ProposalStore;
