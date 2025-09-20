import express from "express"
import authController from "../controllers/auth.controller"

const route = express.Router();

route.post("/login",authController.login);

export default route;