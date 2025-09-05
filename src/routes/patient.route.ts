import express from "express";
import patientController from "../controllers/patient.controller";

const router = express.Router();

router.get("/:id", patientController.getPatient);
router.get("/", patientController.getPatients);
router.post("/", patientController.createPatient);
router.put("/:id", patientController.updatePatient);
router.delete("/:id", patientController.deletePatient);

export default router;