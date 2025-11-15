import express from "express";
import patientController from "../controllers/patient.controller";
import logger from "../middlewares/logger.middleware";
import auth from "../middlewares/auth.middleware"
import patientWithTypeormController from "../controllers/patientWithTypeorm.controller";

const router = express.Router();

router.get("/:id",auth.jwtAuthMiddleware,patientWithTypeormController.getPatient);
router.get("/",auth.jwtAuthMiddleware,patientWithTypeormController.getPatients);
router.post("/",auth.jwtAuthMiddleware,patientWithTypeormController.createPatient);
router.put("/:id",auth.jwtAuthMiddleware,patientWithTypeormController.updatePatient);
router.delete("/:id",auth.jwtAuthMiddleware,patientWithTypeormController.deletePatient);

export default router;