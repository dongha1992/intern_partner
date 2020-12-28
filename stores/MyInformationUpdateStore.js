import { observable, action } from 'mobx';

class MyInformationUpdateStore {
  @observable UserID = null;
  @observable Password = null;
  @observable PasswordCheck = null;
  @observable UserName = null;
  @observable UserNumber = null;
  @observable Position = null;
  @observable Email = null;
  @observable CompanyName = null;
  @observable CompanyNumber = null;
  @observable CompanyPosition = null;
  @observable DomesticCar = null;
  @observable ImportCar = null;

  constructor(root) {
    this.root = root;
  }

  @action setValue = (e) => {
    this[e.target.name] = e.target.value;
  };
}

export default MyInformationUpdateStore;
