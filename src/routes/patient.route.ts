import express from "express";
import patientController from "../controllers/patient.controller";

const router = express.Router();

router.get("/", patientController.getPatients);
router.post("/", patientController.createPatient);

export default router;