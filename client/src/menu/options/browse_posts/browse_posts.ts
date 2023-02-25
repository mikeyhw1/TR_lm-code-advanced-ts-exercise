import { STATES, State } from "../../../states/states";
import { CurrentState } from "../../../states/currentState";
import { fetchPost } from "../../../api/fetch_post";
import { clear, print, prompt, printNewLine } from "../../../ui/console";
import { numberValidator } from "../../../validator/validator";

export async function browsePosts() {
	clear();

	const desiredPostId = await prompt("Enter Post ID");
	if (!numberValidator(desiredPostId)) {
		print(`INVALID input detected: '${desiredPostId}'`);
		await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");
		return "MENU" as State;
	}

	print(`📨 Fetching post "${desiredPostId}...`);
	const result = await fetchPost(desiredPostId);

	if (result && result.length > 0) {
		print(`🥳 Received post:`);
		console.log(result);
	} else {
		print("😵 Server no response / EMPTY post result received");
		await prompt("⌨️ Press [ENTER] to ERROR page!");
		return "FAIL" as State;
	}

	printNewLine();
	await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");

	return "MENU" as State;
}
