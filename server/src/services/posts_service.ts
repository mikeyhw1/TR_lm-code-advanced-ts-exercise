import { Post, User } from "../types/posts.types";
import { UserDatabase } from "./users_service";

// export function getAllPosts(userDatabase: UserDatabase): Post[] {
// 	// Normally it's not advised to hard-code all your data!
// 	// in the absence of a true Model layer, our service can simply return a hard-coded array of posts

// 	return [
// 		{
// 			id: "1",
// 			title: "The Best Day of My Life",
// 			text: "I went to the zoo and I saw a giraffe! It was very big.",
// 			author: userDatabase.getAllUsers()[0] || "default A", // this should look suspicious...
// 		},
// 		{
// 			id: "2",
// 			title: "Minutes of Our Recent Meeting",
// 			text: "Incentivize adoption exposing new ways to evolve our design language criticality . Can we align on lunch orders please advise soonest, for strategic staircase, so show pony, but run it up the flagpole. Big picture we have to leverage up the messaging, but proceduralize fast track , nor technologically savvy, can you put it on my calendar?. Paddle on both sides. High-level our competitors are jumping the shark, and today shall be a cloudy day, thanks to blue sky thinking, we can now deploy our new ui to the cloud turn the crank, canatics exploratory investigation data masking, so root-and-branch review. Quick win we want to empower the team with the right tools and guidance to uplevel our craft and build better first-order optimal strategies, yet corporate synergy. Curate form without content style without meaning, strategic staircase one-sheet, and green technology and climate change , or onward and upward, productize the deliverables and focus on the bottom line. Marginalised key performance indicators crank this out.",
// 			author: userDatabase.getAllUsers()[1] || "default B", // 😬 doing it again..!
// 		},
// 		{
// 			id: "3",
// 			title: "The Worst Day of My Life",
// 			text: "I went to the zoo and the giraffes were asleep. Then I dropped my ice cream.",
// 			author: userDatabase.getAllUsers()[2] || "default C", // 🤢 accessing arrays that aren't *guaranteed* to have these numbers in!
// 		},
// 	];
// }

function setBasicPost(userDatabase: UserDatabase): Post[] {
	return [
		{
			id: "1",
			title: "The Best Day of My Life",
			text: "I went to the zoo and I saw a giraffe! It was very big.",
			author: userDatabase.getAllUsers()[0] || "default A", // this should look suspicious...
		},
		{
			id: "2",
			title: "Minutes of Our Recent Meeting",
			text: "Incentivize adoption exposing new ways to evolve our design language criticality . Can we align on lunch orders please advise soonest, for strategic staircase, so show pony, but run it up the flagpole. Big picture we have to leverage up the messaging, but proceduralize fast track , nor technologically savvy, can you put it on my calendar?. Paddle on both sides. High-level our competitors are jumping the shark, and today shall be a cloudy day, thanks to blue sky thinking, we can now deploy our new ui to the cloud turn the crank, canatics exploratory investigation data masking, so root-and-branch review. Quick win we want to empower the team with the right tools and guidance to uplevel our craft and build better first-order optimal strategies, yet corporate synergy. Curate form without content style without meaning, strategic staircase one-sheet, and green technology and climate change , or onward and upward, productize the deliverables and focus on the bottom line. Marginalised key performance indicators crank this out.",
			author: userDatabase.getAllUsers()[1] || "default B", // 😬 doing it again..!
		},
		{
			id: "3",
			title: "The Worst Day of My Life",
			text: "I went to the zoo and the giraffes were asleep. Then I dropped my ice cream.",
			author: userDatabase.getAllUsers()[2] || "default C", // 🤢 accessing arrays that aren't *guaranteed* to have these numbers in!
		},
	];
}

export class PostDatabase {
	postDatabase: Post[];

	constructor(userDatabase: UserDatabase) {
		this.postDatabase = setBasicPost(userDatabase);
	}

	public getAllPosts(): Post[] {
		return this.postDatabase;
	}

	public addPost(title: string, text: string, author: User): boolean {
		this.postDatabase.push({
			id: String(this.postDatabase.length + 1),
			title: title,
			text: text,
			author: author,
		});
		return true;
	}
}
