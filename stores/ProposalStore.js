import { observable, action } from 'mobx';

class ProposalStore {
  @observable selectedCarBrand = '';
  @observable selectedCarName = '';
  @observable selectedCarBrand2 = '';
  @observable selectedCarName2 = '';

  constructor() {}

  // @action setSelectedCarBrand = (e) => {
  //   this[e.target.name] = e.target.value;
  // };
  // @action setSelectedCarName = (e) => {
  //   this[e.target.name] = e.target.value;
  // };
  @action setValue = (data) => {
    this[data.key] = data.value;
    // this.selectedCarBrand = brand;
  };
}

export default ProposalStore;
