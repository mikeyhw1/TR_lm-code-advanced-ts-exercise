import { State, STATES } from "../states/states";
import { CurrentState } from "../states/currentState";
import { clear, print, printNewLine, prompt } from "../ui/console";

export async function showMenu() {
	clear();
	print("0. Send Server Message", false);
	print("1. Show all posts", false);
	print("2. Show all users", false);
	print("3. Browse posts", false);
	print("4. Add user", false);
	print("99. ???", false);
	printNewLine();

	const result = await prompt("What shall we do? ");

	if (result === "0") return "SEND_MESSAGE" as State;
	if (result === "1") return "SHOW_POSTS" as State;
	if (result === "2") return "SHOW_USERS" as State;
	if (result === "3") return "BROWSE_POSTS" as State;
	if (result === "4") return "ADD_USER" as State;
	if (result === "99") return "CABBAGE" as State;

	return "UNKNOWN" as State;
}
