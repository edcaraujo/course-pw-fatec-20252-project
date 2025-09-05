import { Request, Response } from "express";
import Patient from "../models/patient.model";
import patientRepository from "../repositories/patient.repository";

function getPatient(req: Request, res: Response) {
    const id = Number(req.params.id);
    const patient = patientRepository.getPatient(id);

    if (!patient) {
        res.sendStatus(404);
        return;
    }

    res.status(200).json(patient);
}

function getPatients(req: Request, res: Response) {
    const patients = patientRepository.getPatients();

    res.status(200).json(patients);
}

function createPatient(req: Request, res: Response) {
    const data = req.body as Patient;
    const patient = patientRepository.createPatientWithObject(data);

    res.status(200).json(patient);
}

function updatePatient(req: Request, res: Response) {
    const id = Number(req.params.id)
    const data = req.body as Patient;
    data.id = id;

    const patient = patientRepository.updatePatientWithObject(data);

    if (!patient) {
        res.sendStatus(404);
        return;   
    }

    res.status(200).json(patient);
}

function deletePatient(req: Request, res: Response) {
    const id = Number(req.params.id);
    const patient = patientRepository.deletePatient(id);

    if (!patient) {
        res.sendStatus(404);
        return;
    }

    res.sendStatus(204);
}

export default {
    getPatient,
    getPatients,
    createPatient,
    updatePatient,
    deletePatient
}