import { observable, action } from 'mobx';

class NoticeStackStore {
  @observable noticeList = [];

  constructor(root) {
    this.root = root;
  }

  @action setNoticeList = (notice) => {
    this.noticeList = [...this.noticeList, notice];
  };
}

export default NoticeStackStore;
