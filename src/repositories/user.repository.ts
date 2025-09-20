import User from "../models/user.model";

const users: User[] = []; // Used to simulate database

function getUserByUsername(username: string) : User | undefined {
    return users.find(user => user.username === username);    
}

function getUsers() {
    return users;
}

function createUser(username: string, password: string) : User {
    const user = new User(username,password);

    users.push(user);

    return user;
}

export default {
    getUserByUsername,
    getUsers,
    createUser,
}