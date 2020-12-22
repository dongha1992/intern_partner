import { observable, action } from 'mobx';

class SearchCompanyStore {
  @observable searchInput = '';
  @observable searchResult = '';
  // @observable isButtonActive = false;
  @observable isModalClose = false;

  constructor(root) {
    this.root = root;
  }

  @action setSearchInput = (value) => {
    this.searchInput = value;
  };

  @action setSearchResult = (name) => {
    this.searchResult = name;
  };

  @action setModalClose = (boolean) => {
    this.isModalClose = boolean;
  };

  // @action setButtonActive = () => {
  //   this.isButtonActive = true;
  // };
}

export default SearchCompanyStore;
