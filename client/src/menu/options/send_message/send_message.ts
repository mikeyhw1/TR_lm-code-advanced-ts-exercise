import { sendMessageToServer } from "../../../api/send_message_to_server";
import { STATES, State } from "../../../states/states";
import { CurrentState } from "../../../states/currentState";
import { clear, print, printNewLine, prompt } from "../../../ui/console";

export async function sendMessage() {
	clear();

	const message = await prompt("What message shall we send? ");

	printNewLine();
	print(`📨 Sending message "${message}"...`);

	const success = await sendMessageToServer(message);

	if (success === true) print("🥳 Message received successfully!");
	else {
		print("😵 Message NOT received.");
		await prompt("⌨️ Press [ENTER] to ERROR page!");
		return "FAIL" as State;
	}

	await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");

	return "MENU" as State;
}
