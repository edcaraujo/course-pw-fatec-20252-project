import { Request, Response } from "express";
import User from "../models/user.model";
import userRepository from "../repositories/user.repository";

function getUserByUsername(req: Request, res: Response) {
    const username = String(req.params.username);

    const user = userRepository.getUserByUsername(username);

    if (!user){
        res.sendStatus(404);
        return;
    }

    res.status(200).json(user);
}

function getUsers(req: Request, res: Response) {
    const users = userRepository.getUsers();

    res.status(200).json(users);
}

function createUser(req: Request, res: Response) {
    const data = req.body as User;
    const user = userRepository.createUser(data.username, data.password);

    //const {username, password} = req.body;
    //const user = userRepository.createUser(username, password);

    res.status(200).json(user);
}

export default {
    getUserByUsername,
    getUsers,
    createUser
}