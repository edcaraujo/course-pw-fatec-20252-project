import Patient from "../../models/patient.model";
import { Response, Request } from "express";

const mockRepository = {
    find: jest.fn(),
    delete: jest.fn()
}

jest.mock('../../datasource', () => ({
    AppDataSource: {
            getRepository: jest.fn(() => mockRepository)
        }
}));

import patientWithTypeormController from "../../controllers/patientWithTypeorm.controller";

const mockRequestResponse = (reqOverrides: Partial<Request> = {}) => {
    const req: Partial<Request> = {
        params: {},
        body: {},
        ...reqOverrides
    }

    const res: Partial<Response> = {
        status: jest.fn(() => res as Response),
        json: jest.fn(),
        sendStatus: jest.fn()
    }

    return { req: req as Request, res: res as Response};
};

describe('Patient controller', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('getPatients', () => {
        it('deveria retornar a lista de pacientes', async() => {
            const mockPatients: Patient[] = [
                {id: 1, code: "123", name: "Eduardo"}, 
                {id: 2, code: "456", name: "Joao"}
            ];

            mockRepository.find.mockResolvedValue(mockPatients);

            const {req, res} = mockRequestResponse();

            await patientWithTypeormController.getPatients(req as Request, res as Response);


            expect(mockRepository.find).toHaveBeenCalledTimes(1);
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(mockPatients);

        });
    });

    describe('deletePatient', () => {
        it('deveria deletar um paciente', async() => {
            mockRepository.delete.mockResolvedValue({affected: 1});

            const {req, res} = mockRequestResponse({params: {id: '1'}});

            await patientWithTypeormController.deletePatient(req as Request, res as Response);

            expect(mockRepository.delete).toHaveBeenCalledTimes(1);
            expect(res.sendStatus).toHaveBeenCalledWith(204);
        });

        it('deveria deletar um paciente que nao existe', async() => {
            mockRepository.delete.mockResolvedValue({affected: null});

            const {req, res} = mockRequestResponse({params: {id: '1'}});

            await patientWithTypeormController.deletePatient(req as Request, res as Response);

            expect(mockRepository.delete).toHaveBeenCalledTimes(1);
            expect(res.sendStatus).toHaveBeenCalledWith(404);
        });
    });
});


