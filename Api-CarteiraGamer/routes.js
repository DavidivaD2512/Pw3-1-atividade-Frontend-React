import express from "express";
import userController from "./controller/UserController.js";
import gamesController from "./controller/GamesController.js";

const routes = express();

routes.use("/User", userController);
routes.use("/games", gamesController);

export default routes;