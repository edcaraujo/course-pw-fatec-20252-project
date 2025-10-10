import express from "express";
import patientController from "../controllers/patient.controller";
import logger from "../middlewares/logger.middleware";
import auth from "../middlewares/auth.middleware"
import patientWithTypeormController from "../controllers/patientWithTypeorm.controller";

const router = express.Router();

router.get("/:id", patientWithTypeormController.getPatient);
router.get("/", patientWithTypeormController.getPatients);
router.post("/", patientWithTypeormController.createPatient);
router.put("/:id", patientWithTypeormController.updatePatient);
router.delete("/:id", patientWithTypeormController.deletePatient);

export default router;