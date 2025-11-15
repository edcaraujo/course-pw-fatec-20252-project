import express from "express"
import userRoute from "./user.route"
import authRoute from "./auth.route"
import patientRoute from "./patient.route"

const route = express.Router();

route.use("/auth",authRoute);
route.use("/patient",patientRoute);
route.use("/user",userRoute);



export default route;