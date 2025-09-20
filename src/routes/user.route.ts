import express from "express"
import userController from "../controllers/user.controller"

const route = express.Router()

route.get("/:username",userController.getUserByUsername);
route.get("/",userController.getUsers);
route.post("/",userController.createUser);

export default route;