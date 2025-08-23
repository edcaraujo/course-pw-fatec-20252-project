class Patient {
    id: number;
    name: string;
    code: string;

    private static counter = 1;

    constructor(code: string, name: string) {
        this.id = Patient.counter++;
        this.name = name;
        this.code = code;
    }
}

export default Patient;