import express from "express"
import userController from "../controllers/user.controller"
import userWithTypeormController from "../controllers/userWithTypeorm.controller";

const route = express.Router()

route.get("/:username",userWithTypeormController.getUserByUsername);
route.get("/",userWithTypeormController.getUsers);
route.post("/",userWithTypeormController.createUser);

export default route;