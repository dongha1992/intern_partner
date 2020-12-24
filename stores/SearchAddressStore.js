import { observable, action } from 'mobx';

class SearchAddressStore {
  @observable searchAddressInput = '';
  @observable searchAddress2Input = '';
  @observable searchCityInput = '';
  @observable searchStateInput = '';
  @observable searchZipCodeInput = '';
  @observable searchResult = '';
  @observable companyName = '';
  @observable companyIntro = '';
  @observable isModalClose = false;

  constructor(root) {
    this.root = root;
  }

  @action setCompanyName = (name) => {
    this.companyName = name;
  };

  @action setCompanyIntro = (intro) => {
    this.companyIntro = intro;
  };

  @action setSearchAddressInput = (value) => {
    this.searchAddressInput = value;
  };

  @action setSearchAddress2Input = (value) => {
    this.searchAddress2Input = value;
  };

  @action setSearchCityInput = (value) => {
    this.searchCityInput = value;
  };

  @action setSearchStateInput = (value) => {
    this.searchStateInput = value;
  };

  @action setSearchZipCodeInput = (value) => {
    this.searchZipCodeInput = value;
  };

  @action setSearchResult = (name) => {
    this.searchResult = name;
  };

  @action setModalClose = (boolean) => {
    this.isModalClose = boolean;
  };
}

export default SearchAddressStore;
