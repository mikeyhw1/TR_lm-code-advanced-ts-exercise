import { send_new_user } from "../../../api/send_new_user";
import { STATES, State } from "../../../states/states";
import { CurrentState } from "../../../states/currentState";
import { clear, print, printNewLine, prompt } from "../../../ui/console";

export async function send_add_user() {
	clear();

	const data = await prompt("What is the new user name? ");

	printNewLine();
	print(`📨 Sending data "${data}"...`);

	const success = await send_new_user(data);

	if (success === true) print("🥳 User created successfully!");
	else {
		print("😵 Upload NOT received.");
		await prompt("⌨️ Press [ENTER] to ERROR page!");
		return "FAIL" as State;
	}

	await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");

	return "MENU" as State;
}
