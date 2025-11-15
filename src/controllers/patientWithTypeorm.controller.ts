import { Request, Response } from "express";
import Patient from "../models/patient.model";
import { AppDataSource } from "../datasource";

const repository = AppDataSource.getRepository(Patient);

async function getPatient(req: Request, res: Response) {
    /* #swagger.tags = ['Patient']
    */
    const id = Number(req.params.id);
    const patient = await repository.findOneBy({"id": id});

    if (patient == null) {
        res.sendStatus(404);
        return;
    }

    res.status(200).json(patient);
}

async function getPatients(req: Request, res: Response) {
    /* #swagger.tags = ['Patient']
    */
    const patients = await repository.find();

    res.status(200).json(patients);
}

async function createPatient(req: Request, res: Response) {
    /* #swagger.tags = ['Patient']
       #swagger.parameters['body'] = {
         in: 'body',
         description: 'Patient infos',
         required: true,
         schema: { $ref: '#/definitions/PatientData' }
       }
       #swagger.responses[201] = {
         description: 'Patient creation response',
         schema: { $ref: '#/definitions/PatientDataResponse' }
       }
       #swagger.security = [{"apiKey": []}]
    */
    const patient = req.body as Patient;
    const savedPatient = await repository.save(patient);

    res.status(200).json(savedPatient);
}

async function updatePatient(req: Request, res: Response) {
    /* #swagger.tags = ['Patient']
    */
    const id = Number(req.params.id)
    const patient = req.body as Patient;
    
    const existedPatient = await repository.findOneBy({'id': id});

    if (existedPatient !== null) {
        existedPatient.name = patient.name;
        existedPatient.code = patient.code;

        const savedPatient = await repository.save(existedPatient);

        if (savedPatient === null) {
            res.sendStatus(400);
            return;   
        }

        res.status(200).json(savedPatient);
    }

    if (existedPatient === null) {
        res.sendStatus(404);
        return;   
    }
}

async function deletePatient(req: Request, res: Response) {
    /* #swagger.tags = ['Patient']
    */
    const id = Number(req.params.id);
    const result = await repository.delete({"id":id})

    if (result.affected == null || result.affected == undefined) {
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