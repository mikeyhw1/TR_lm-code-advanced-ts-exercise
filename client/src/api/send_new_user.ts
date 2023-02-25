import { print, prompt } from "../ui/console";
import { baseUrl } from "./base_url";

export async function send_new_user(data: string) {
	try {
		const result = await fetch(baseUrl + "/api/add/user", {
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify({ message: data }),
		});

		const json = await result.json();
		const { success } = json;

		return success;
	} catch (e) {
		console.error(e);
		return false;
	}
}
