import { STATES, State } from "./states";

export class CurrentState {
	currentState: State;

	constructor(currentState = "MENU" as State) {
		this.currentState = currentState;
	}

	public get(): State {
		return this.currentState;
	}

	public set(newState: State) {
		this.currentState = newState;
	}

	public reset() {
		this.currentState = "MENU" as State;
	}
}
