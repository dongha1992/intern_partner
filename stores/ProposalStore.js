import { observable, action } from 'mobx';
// import proposal from '../pages/user/main/detail/proposal';

class ProposalStore {
  @observable isEdit = false;
  @observable suggestionId = '';
  @observable initalProposal = {};

  constructor(root) {
    this.root = root;
  }

  @action setIsEdit = (condition) => {
    // this.isEdit = !isEdit;
    this.isEdit = condition;
  };

  @action setSuggestionId = (id) => {
    this.suggestionId = id;
  };
  @action setInitalProposal = (initalValue) => {
    this.initalProposal = initalValue;
  };
}

export default ProposalStore;
