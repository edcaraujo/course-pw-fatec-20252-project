import { Request, Response } from "express";
import Patient from "../models/patient.model";
import { AppDataSource } from "../datasource";

const repository = AppDataSource.getRepository(Patient);

async function getPatient(req: Request, res: Response) {
    /* #swagger.tags = ['Patient']
       #swagger.description = 'Endpoint to get a specific patient by ID.'
       #swagger.parameters['id'] = {
            in: 'path',
            description: 'Patient ID',
            required: true,
            type: 'integer'
       }
       #swagger.responses[200] = {
            description: 'Patient found successfully.',
            schema: { $ref: '#/definitions/PatientResponseSchema' }
       }
       #swagger.responses[404] = { description: 'Patient not found.' }
       #swagger.security = [{"JWT": []}]
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
       #swagger.description = 'Endpoint to get all patients.'
       #swagger.responses[200] = {
            description: 'List of patients found successfully.',
            schema: [{ $ref: '#/definitions/PatientResponseSchema' }]
       }
       #swagger.security = [{"JWT": []}]
    */
    const patients = await repository.find();

    res.status(200).json(patients);
}

async function createPatient(req: Request, res: Response) {
    /* #swagger.tags = ['Patient']
       #swagger.description = 'Endpoint to create a new patient.'
       #swagger.parameters['body'] = {
         in: 'body',
         description: 'Patient infos',
         required: true,
         schema: { $ref: '#/definitions/PatientSchema' }
       }
       #swagger.responses[201] = {
         description: 'Patient created successfully.',
         schema: { $ref: '#/definitions/PatientResponseSchema' }
       }
       #swagger.security = [{"JWT": []}]
    */
    const patient = req.body as Patient;
    const savedPatient = await repository.save(patient);

    res.status(201).json(savedPatient);
}

async function updatePatient(req: Request, res: Response) {
    /* #swagger.tags = ['Patient']
       #swagger.description = 'Endpoint to update an existing patient.'
       #swagger.parameters['id'] = {
            in: 'path',
            description: 'Patient ID',
            required: true,
            type: 'integer'
       }
       #swagger.parameters['body'] = {
         in: 'body',
         description: 'Patient infos to update',
         required: true,
         schema: { $ref: '#/definitions/PatientSchema' }
       }
       #swagger.responses[200] = {
         description: 'Patient updated successfully.',
         schema: { $ref: '#/definitions/PatientResponseSchema' }
       }
       #swagger.responses[404] = { description: 'Patient not found.' }
       #swagger.security = [{"JWT": []}]
    */
    const id = Number(req.params.id)
    const patient = req.body as Patient;
    
    const existedPatient = await repository.findOneBy({'id': id});

    if (existedPatient === null) {
        res.sendStatus(404);
        return;
    }

    existedPatient.name = patient.name;
    existedPatient.code = patient.code;

    const savedPatient = await repository.save(existedPatient);

    if (savedPatient === null) {
        res.sendStatus(400);
        return;   
    }

    res.status(200).json(savedPatient);
}

async function deletePatient(req: Request, res: Response) {
    /* #swagger.tags = ['Patient']
       #swagger.description = 'Endpoint to delete a patient.'
       #swagger.parameters['id'] = { in: 'path', description: 'Patient ID', required: true }
       #swagger.responses[204] = { description: 'Patient deleted successfully.' }
       #swagger.responses[404] = { description: 'Patient not found.' }
       #swagger.security = [{"JWT": []}]
    */
    const id = Number(req.params.id);
    const result = await repository.delete({"id":id})
    if (result.affected === 0 || result.affected === null) {
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