import Patient from "../../models/patient.model";

describe('Patient model', () => {
    it('deveria criar uma instancia de paciente', () => {
        const code = '123';
        const name = 'Eduardo';

        const patient = new Patient(code,name);

        expect(patient.code).toBe(code);
        expect(patient.name).toBe(name);

        expect(patient.id).toBeUndefined();
    });

    it('deveria alterar a propriedade id apenas', () => {
        const patient = new Patient('123','Eduardo');
        patient.id = 999;

        expect(patient.id).toBe(999);
        expect(patient.code).toBe('123');
        expect(patient.name).toBe('Eduardo');
    });
});