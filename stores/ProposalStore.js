import { observable, action } from "mobx";

class ProposalStore {
	@observable id = "";

	constructor() {}

	@action setValue = (id) => {
		this.id = id;
		this.suggestionId = id;
	};

	@action setSuggestionValue = (id) => {
		this.suggestionId = id;
	};
}

export default ProposalStore;
