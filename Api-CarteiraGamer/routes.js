import express from "express";
import userController from "./controller/UserController.js";

const routes = express();

routes.use("/User", userController);

export default routes;