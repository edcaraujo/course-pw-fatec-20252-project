import Patient from "../models/patient.model";

const patients: Patient[] = []; // Used to simulate database

function getPatients() : Patient[] {
    return patients;
}

function createPatient(code: string,  name: string) : Patient {
    const patient = new Patient(code, name);

    patients.push(patient);

    return patient;
}

function createPatientWithObject(data: Patient) : Patient {    
    return createPatient(data.code, data.name);
}

export default {
    getPatients,
    createPatient,
    createPatientWithObject    
}