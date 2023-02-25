import { print, prompt } from "../ui/console";
import { baseUrl } from "./base_url";

export async function send_new_user(message: string) {
	try {
		const result = await fetch(baseUrl + "/add/user/", {
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify({ message: message }),
		});

		const json = await result.json();

		const { success } = json;

		return success;
	} catch (e) {
		console.error(e);
		return false;
	}
}
