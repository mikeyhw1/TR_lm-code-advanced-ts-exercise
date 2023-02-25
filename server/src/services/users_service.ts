import { User } from "../types/posts.types";

// export function getAllUsers(): User[] {
// 	// in the absence of a true Model layer, our service can simply return a hard-coded array of users

// 	return [
// 		{
// 			id: "1",
// 			name: "Spicy Hotfish",
// 			creationDate: new Date(),
// 		},
// 		{
// 			id: "2",
// 			name: "Sally-Anne Writerperson",
// 			creationDate: new Date(),
// 		},
// 		{
// 			id: "3",
// 			name: "Jimmy Alias",
// 			creationDate: new Date(),
// 		},
// 		{
// 			id: "4",
// 			name: 'Steve "The Hoop" Hooper',
// 			creationDate: new Date(),
// 		},
// 	];
// }

const basicUser: User[] = [
	{
		id: "1",
		name: "Spicy Hotfish",
		creationDate: new Date(),
	},
	{
		id: "2",
		name: "Sally-Anne Writerperson",
		creationDate: new Date(),
	},
	{
		id: "3",
		name: "Jimmy Alias",
		creationDate: new Date(),
	},
	{
		id: "4",
		name: 'Steve "The Hoop" Hooper',
		creationDate: new Date(),
	},
];

export class UserDatabase {
	userDatabase: User[];

	constructor() {
		this.userDatabase = basicUser;
	}

	public getAllUsers(): User[] {
		return this.userDatabase;
	}

	public addUser(name: string): boolean {
		this.userDatabase.push({
			id: String(this.userDatabase.length + 1),
			name: name,
			creationDate: new Date(),
		});
		return true;
	}
}
