import { STATES, State } from "../../../states/states";
import { CurrentState } from "../../../states/currentState";
import { fetchPost } from "../../../api/fetch_post";
import { clear, print, prompt, printNewLine } from "../../../ui/console";

export async function browsePosts() {
	clear();
	// clear("nope");

	const desiredPostId = await prompt("Enter Post ID");

	// TODO: should we validate this?!

	print(`📨 Fetching post "${desiredPostId}...`);

	const result = await fetchPost(desiredPostId);

	print(`🥳 Received post:`);

	console.log(result);

	printNewLine();
	await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");

	// return result;
	return "MENU" as State;
}
