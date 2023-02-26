import { send_new_post } from "../../../api/send_new_post";
import { fetchAllUsers } from "../../../api/fetch_all_users";
import { STATES, State } from "../../../states/states";
import { CurrentState } from "../../../states/currentState";
import { stringValidator, numberValidator } from "../../../validator/validator";
import { clear, print, printNewLine, prompt } from "../../../ui/console";

export async function send_add_post() {
	clear();

	// NOTE: assuming all userID are in ascending order start from 1
	print(`Downloading user data...`);
	const result = await fetchAllUsers();
	if (result && result.length > 0) {
		print(`🥳 Received ${result.length} users data.`);
	} else {
		print("😵 Server no response / EMPTY users result received");
		console.log(result);
		await prompt("⌨️ Press [ENTER] to ERROR page!");
		return "FAIL" as State;
	}
	printNewLine();

	const newPostTitle = await prompt("Please input new post title? ");
	if (!stringValidator(newPostTitle)) {
		print(`INVALID input detected: '${newPostTitle}'`);
		await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");
		return "MENU" as State;
	}
	printNewLine();

	const newText = await prompt("Please input new post text?");
	if (!stringValidator(newText)) {
		print(`INVALID input detected: '${newText}'`);
		await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");
		return "MENU" as State;
	}
	printNewLine();

	// NOTE: assuming all userID are in ascending order start from 1
	print(`Valid userID range : 1 - ${result.length}`);
	const newUserID = await prompt(
		`Please input a valid userID for new post? (1-${result.length})`
	);
	if (!numberValidator(newUserID)) {
		print(`INVALID input detected: '${newUserID}'`);
		await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");
		return "MENU" as State;
	}
	if (Number(newUserID) < 1 || Number(newUserID) > result.length) {
		print(`INVALID input! Input NOT inside valid userID range: '${newUserID}'`);
		await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");
		return "MENU" as State;
	}
	printNewLine();

	print(`📨 Sending new post...`);
	const success = await send_new_post(newPostTitle, newText, newUserID);

	if (success === true) print("🥳 Post created successfully!");
	else {
		print("😵 Upload unsuccessful");
		await prompt("⌨️ Press [ENTER] to ERROR page!");
		return "FAIL" as State;
	}

	await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");

	return "MENU" as State;
}
