import { observable, action } from 'mobx';

class ProposalStore {
  @observable selectedCarBrand = '';
  @observable selectedCarName = '';

  constructor() {}

  // @action setSelectedCarBrand = (e) => {
  //   this[e.target.name] = e.target.value;
  // };
  // @action setSelectedCarName = (e) => {
  //   this[e.target.name] = e.target.value;
  // };
  @action setSelectedCarBrand = (brand) => {
    this.selectedCarBrand = brand;
  };
  @action setSelectedCarName = (model) => {
    this.selectedCarName = model;
  };
}

export default ProposalStore;
