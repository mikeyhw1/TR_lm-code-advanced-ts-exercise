import { exit } from "./exit/exit";
import { showMenu } from "./menu/menu";
import { browsePosts } from "./menu/options/browse_posts/browse_posts";
import { sendMessage } from "./menu/options/send_message/send_message";
import { showAllPosts } from "./menu/options/show_all_posts/show_all_posts";
import { showAllUsers } from "./menu/options/show_all_users/show_all_users";
// import { State } from "./states/state";
// import { states } from "./states/states";
import { State, STATES } from "./states/states";
import { CurrentState } from "./states/currentState";
import { clear, print, printNewLine, prompt } from "./ui/console";

async function begin() {
	clear(true);
	print("👋 Welcome to our cool blog browser!");
	await prompt("⌨️ Press [ENTER] to continue! 🕶️");
	main();
}

async function main() {
	// let state = new State();
	let state = new CurrentState();

	while (true) {
		switch (state.get()) {
			case "MENU":
				const newMenuOption: State = await showMenu();
				state.set(newMenuOption);
				break;
			case "SEND_MESSAGE":
				const nextState: State = await sendMessage();
				state.set(nextState);
				break;
			case "SHOW_POSTS":
				clear();
				const posts: State = await showAllPosts();
				state.set(posts);
				break;
			case "SHOW_USERS":
				clear();
				const users: State = await showAllUsers();
				state.set(users);
				break;
			case "BROWSE_POSTS":
				clear();
				const post: State = await browsePosts();
				state.set(post);
				break;
			case "ADD_USER":
				clear();
				print("🏗️  This functionality has not been implemented!");
				await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");
				// state.set(states.MENU);
				state.reset();
				break;
			case "UNKNOWN":
				clear();
				print("😵 We have entered an unknown state.");
				await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");
				// state.set(states.MENU);
				state.reset();
				break;
			case "CABBAGE":
				clear();
				print("🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬", false);
				print("🥬      CABBAGE MODE UNLOCKED     🥬", false);
				print("🥬     Why did you want this?     🥬", false);
				print("🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬", false);
				await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");
				// state.set(states.MENU);
				state.reset();
				break;
			default:
				clear();
				print(`🌋 😱 Uh-oh, we've entered an invalid state: "${state.get()}"`);
				print("💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥", false);
				print("💥 Crashing the program now...  💥", false);
				print("💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥", false);
				printNewLine();
				exit(99);
				break;
		}
	}
}

begin();
