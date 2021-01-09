import { observable, action } from 'mobx';

class ProposalStore {
  @observable id = '';
  @observable sugesstionId = '';

  constructor(root) {
    this.root = root;
  }

  @action setValue = (id) => {
    this.id = id;
  };

  @action setSuggestionValue = (id) => {
    this.suggestionId = id;
  };
}

export default ProposalStore;
