export const STATES = [
	"MENU",
	"SEND_MESSAGE",
	"SHOW_POSTS",
	"SHOW_USERS",
	"BROWSE_POSTS",
	"ADD_USER",
	"FAIL",
	"UNKNOWN",
	"CABBAGE",
] as const;
export type State = typeof STATES[number];
