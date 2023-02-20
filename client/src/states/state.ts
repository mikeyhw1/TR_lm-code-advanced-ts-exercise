import { states } from "./states";

export class State {
	#state = states.MENU;

	get() {
		return this.#state;
	}

	set(newState) {
		this.#state = newState;
	}
}
