import Patient from "../models/patient.model";

const patients: Patient[] = []; // Used to simulate database

function getPatient(id: number) : Patient | undefined {
    return patients.find(patient => patient.id === id);
}

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

function updatePatient(id: number, code: string, name: string) : Patient | undefined {
    const index = patients.findIndex(patient => patient.id === id);

    if (index === -1) {
        return undefined;
    }

    if (patients[index]) {
        patients[index].code = code;
        patients[index].name = name;
    }
    
    return patients[index];
}

function updatePatientWithObject(data: Patient) : Patient | undefined {
    return updatePatient(data.id, data.code, data.name);
}

function deletePatient(id: number) : boolean {
    const index = patients.findIndex(patient => patient.id === id);
    
    if (index === -1) {
        return false;
    }

    patients.splice(index, 1);

    return true;
}

export default {
    getPatient,
    getPatients,
    createPatient,
    createPatientWithObject,
    updatePatient,
    updatePatientWithObject,
    deletePatient
}