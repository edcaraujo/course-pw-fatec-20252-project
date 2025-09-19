import express from "express";
import patientController from "../controllers/patient.controller";
import logger from "../middlewares/logger.middleware";
import auth from "../middlewares/auth.middleware"

const router = express.Router();

router.get("/:id", patientController.getPatient);
router.get("/", logger.consoleLoggerMiddleware, patientController.getPatients);
router.post("/", auth.basicAuthMiddleware, patientController.createPatient);
router.put("/:id", patientController.updatePatient);
router.delete("/:id", patientController.deletePatient);

export default router;