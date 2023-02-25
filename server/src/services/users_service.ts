import { User } from "../types/posts.types";

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
