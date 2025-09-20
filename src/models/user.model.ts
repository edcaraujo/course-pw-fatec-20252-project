class User {
    id: number;
    username: string;
    password: string;

    private static counter = 1;

    constructor(username: string, password: string) {
        this.id = User.counter++;
        this.username = username;
        this.password = password;
    
    }
}

export default User;