import { send_new_user } from "../../../api/send_new_user";
import { STATES, State } from "../../../states/states";
import { CurrentState } from "../../../states/currentState";
import { stringValidator } from "../../../validator/validator";
import { clear, print, printNewLine, prompt } from "../../../ui/console";

export async function send_add_user() {
	clear();

	const data = await prompt("Please input the new user name? ");
	if (!stringValidator(data)) {
		print(`INVALID input detected: '${data}'`);
		await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");
		return "MENU" as State;
	}

	printNewLine();
	print(`📨 Sending data "${data}"...`);

	const success = await send_new_user(data);

	if (success === true) print("🥳 User created successfully!");
	else {
		print("😵 Upload unsuccessful");
		await prompt("⌨️ Press [ENTER] to ERROR page!");
		return "FAIL" as State;
	}

	await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");

	return "MENU" as State;
}
