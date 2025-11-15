import express from "express"
import userRoute from "./user.route"
import authRoute from "./auth.route"
import patientRoute from "./patient.route"

const route = express.Router();

route.use("/auth",authRoute);
route.use("/patients",patientRoute);
route.use("/users",userRoute);



export default route;