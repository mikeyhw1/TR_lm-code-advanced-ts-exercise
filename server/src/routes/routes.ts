import * as express from "express";
import { Express } from "express";
import { PostDatabase } from "../services/posts_service";
import { UserDatabase } from "../services/users_service";
import { User } from "../types/posts.types";

/*

	This file hooks up routes such as `/` or `/users` with methods that can handle their response

	Normally we'd put those methods in a Controller layer, to keep them separate...

	... but for this little project we'll bypass that and keep the logic all in this one file.

*/

export function initialiseRoutes(app: Express) {
	console.log("🏗️  Setting up routers...");

	// create user & post database(temp)
	const userDatabase = new UserDatabase();
	const postDatabase = new PostDatabase(userDatabase);

	addBaseRouter(app);

	addAPIRoutes(app, userDatabase, postDatabase);
}

function addBaseRouter(app: Express) {
	console.log("🛠️  Creating base router...");

	const baseRouter = express.Router();

	baseRouter.use((req, res, next) => {
		res.header("Access-Control-Allow-Methods", "GET");
		console.log(`📨 ${req.url}`);
		next();
	});

	console.log("🏠❤️‍🩹  Adding home health check route...");
	baseRouter.get("/", (req, res) => {
		res.status(200).send("👍 Okay! The server is responding! 🙌");
	});

	console.log("🛠️  Applying base router to Express server...");
	app.use("/", baseRouter);
}

// this function adds all the routes we can access by going to /api/[someRoute]
function addAPIRoutes(
	app: Express,
	userDatabase: UserDatabase,
	postDatabase: PostDatabase
) {
	console.log("🛠️  Creating API router...");

	const apiRouter = express.Router();
	apiRouter.use((req, res, next) => {
		// we'll use this router to return specifically JSON
		res.setHeader("Content-Type", "application/json");
		next();
	});

	// this route allows the client to "send a message" to the server
	console.log("📨  Adding messaging route...");
	apiRouter.post("/send/", (req, res) => {
		const { body } = req;

		// we don't do anything with the message, but let's echo it back in the console
		console.log(`👋 Received "${body.message}"`);

		// reply with a success boolean
		res.status(200).send({ success: true });
	});

	// now we'll add some routes that let us browse some blog posts
	console.log("✍️  Adding blog post routes...");
	apiRouter.get("/posts/all", (req, res) => {
		res.status(200).send(JSON.stringify(postDatabase.getAllPosts()));
	});

	apiRouter.get("/posts/:id", (req, res) => {
		const post = postDatabase.getAllPosts().find((p) => p.id === req.params.id);
		if (post !== undefined)
			res.status(200).send(JSON.stringify({ postFound: true, ...post }));
		else res.status(200).send(JSON.stringify({ postFound: false }));
	});

	console.log("✍️  Adding user routes...");
	apiRouter.get("/users/all", (req, res) => {
		res.status(200).send(JSON.stringify(userDatabase.getAllUsers()));
	});

	// ❗ [1] See README

	apiRouter.get("/users/:id", (req, res) => {
		res
			.status(200)
			.send(
				JSON.stringify(
					userDatabase.getAllUsers().filter((u) => u.id === req.params.id)
				)
			);
	});

	apiRouter.post("/add/user", (req, res) => {
		const { body } = req;
		const result = userDatabase.addUser(body.data);
		console.log(`👋 Received new use name : "${body.data}"`);
		// reply with a success boolean
		res.status(200).send({ success: true });
	});

	apiRouter.post("/add/post", (req, res) => {
		const { body } = req;
		const { newPostTitle, newText, newUserID } = body;

		// todo: further validation required
		const user: User | undefined = userDatabase
			.getAllUsers()
			.find((u) => u.id === newUserID);

		if (user === undefined) {
			res
				.status(500)
				.send({ success: false, errorMsg: "user database error!" });
		} else {
			postDatabase.addPost(newPostTitle, newText, user);
			console.log(`👋 Created new post!"`);
			// reply with a success boolean
			res.status(200).send({ success: true });
		}
	});

	console.log("🛠️  Applying API router to Express server...");
	app.use("/api", apiRouter);
}
