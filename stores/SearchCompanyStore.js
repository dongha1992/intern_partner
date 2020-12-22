import { observable, action } from 'mobx';

class SearchCompanyStore {
  @observable searchInput = '';
  @observable searchResult = '';
  @observable companyId = '';
  @observable isModalClose = false;

  constructor(root) {
    this.root = root;
  }

  @action setCompanyId = (id) => {
    this.companyId = id;
  };

  @action setSearchInput = (value) => {
    this.searchInput = value;
  };

  @action setSearchResult = (name) => {
    this.searchResult = name;
  };

  @action setModalClose = (boolean) => {
    this.isModalClose = boolean;
  };
}

export default SearchCompanyStore;
