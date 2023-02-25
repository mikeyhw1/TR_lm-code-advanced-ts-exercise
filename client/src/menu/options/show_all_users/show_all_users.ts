import { STATES, State } from "../../../states/states";
import { CurrentState } from "../../../states/currentState";
import { fetchAllUsers } from "../../../api/fetch_all_users";
import { clear, print, prompt, printNewLine } from "../../../ui/console";

export async function showAllUsers() {
	clear(true);

	printNewLine();

	print("📨 Fetching users...");

	const result = await fetchAllUsers();

	if (result && result.length > 0) {
		print(`🥳 Received ${result.length} users. Here they are:`);
		console.log(result);
	} else {
		print("😵 Server no response / EMPTY users result received");
		console.log(result);
		await prompt("⌨️ Press [ENTER] to ERROR page!");
		return "FAIL" as State;
	}

	printNewLine();
	await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");

	return "MENU" as State;
}
