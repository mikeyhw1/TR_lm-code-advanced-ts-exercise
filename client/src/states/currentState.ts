import { STATES, State } from "./states";

export class CurrentState {
	state: State;

	constructor(state = "MENU" as State) {
		this.state = state;
	}

	public get(): State {
		return this.state;
	}

	public set(newState: State) {
		this.state = newState;
	}

	public reset() {
		this.state = "MENU" as State;
	}
}

// type State = typeof STATES[number];

// export class State {
// 	MENU: string;
// 	SEND_MESSAGE: string;
// 	SHOW_POSTS: string;
// 	SHOW_USERS: string;
// 	BROWSE_POSTS: string;
// 	ADD_USER: string;
// 	UNKNOWN: string;

// 	constructor(
// 		MENU = "MENU",
// 		SEND_MESSAGE = "SEND_MESSAGE",
// 		SHOW_POSTS = "SHOW_POSTS",
// 		SHOW_USERS = "SHOW_USERS",
// 		BROWSE_POSTS = "BROWSE_POSTS",
// 		ADD_USER = "ADD_USER",
// 		UNKNOWN = "UNKNOWN"
// 	) {
// 		this.MENU = MENU;
// 		this.SEND_MESSAGE = SEND_MESSAGE;
// 		this.SHOW_POSTS = SHOW_POSTS;
// 		this.SHOW_USERS = SHOW_USERS;
// 		this.BROWSE_POSTS = BROWSE_POSTS;
// 		this.ADD_USER = ADD_USER;
// 		this.UNKNOWN = UNKNOWN;
// 	}
// }

// state = states.MENU;
// get() {
// 	return this.state;
// }
// set(newState) {
// 	this.state = newState;
// }
