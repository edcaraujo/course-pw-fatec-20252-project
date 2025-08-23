import { Request, Response } from "express";
import Patient from "../models/patient.model";
import patientRepository from "../repositories/patient.repository";

function getPatients(req: Request, res: Response) {
    const patients = patientRepository.getPatients();

    res.status(200).json(patients);
}

function createPatient(req: Request, res: Response) {
    const data = req.body as Patient;
    const patient = patientRepository.createPatientWithObject(data);

    res.status(200).json(patient);
}

export default {
    getPatients,
    createPatient
}