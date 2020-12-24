import { observable, action } from 'mobx';

const ChatStore = observable({
  userInput: '',
  chatList: [],
  socketId: null,

  getSocketId(id) {
    this.socketId = id;
  },

  changeUserInput(value) {
    this.userInput = value;
  },

  setChat(text) {
    const addChatItem = { text };
    this.chatList = { ...this.chatList, addChatItem };
  },
});

export default ChatStore;
