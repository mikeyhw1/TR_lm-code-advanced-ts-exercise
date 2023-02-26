import { print, prompt } from "../ui/console";
import { baseUrl } from "./base_url";

export async function send_new_post(
	newPostTitle: string,
	newText: string,
	newUserID: string
) {
	try {
		const result = await fetch(baseUrl + "/api/add/post", {
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify({ newPostTitle, newText, newUserID }),
		});
		const json = await result.json();
		const { success } = json;
		return success;
	} catch (e) {
		console.error(e);
		return false;
	}
}
