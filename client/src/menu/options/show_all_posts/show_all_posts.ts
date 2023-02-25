import { STATES, State } from "../../../states/states";
import { CurrentState } from "../../../states/currentState";
import { fetchAllPosts } from "../../../api/fetch_all_posts";
import { clear, print, prompt, printNewLine } from "../../../ui/console";

export async function showAllPosts() {
	clear(true);

	printNewLine();

	print("📨 Fetching posts...");

	const result = await fetchAllPosts();

	if (result && result.length > 0) {
		print(`🥳 Received ${result.length} posts. Here they are:`);
		console.log(result);
	} else {
		print("😵 Server no response / EMPTY posts result received");
		console.log(result);
		await prompt("⌨️ Press [ENTER] to ERROR page!");
		return "FAIL" as State;
	}

	printNewLine();
	await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");

	return "MENU" as State;
}
