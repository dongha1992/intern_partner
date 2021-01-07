import { observable, action } from "mobx";

class ChatStore {
	@observable name = null;

	constructor() {}

	@action setValue = (name) => {
		this.name = name;
	};
}

export default ChatStore;
