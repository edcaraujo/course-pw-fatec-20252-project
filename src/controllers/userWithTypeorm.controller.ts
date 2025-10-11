import { Request, Response } from "express";
import User from "../models/user.model";
import userRepository from "../repositories/user.repository";

import { AppDataSource } from "../datasource";

const repository = AppDataSource.getRepository(User);

async function getUserByUsername(req: Request, res: Response) {
    const username = String(req.params.username);
    const user = await repository.findOneBy({"username": username});

    if (user == null){
        res.sendStatus(404);
        return;
    }

    res.status(200).json(user);
}

async function getUsers(req: Request, res: Response) {
    const users = await repository.find();

    res.status(200).json(users);
}

async function createUser(req: Request, res: Response) {
    const data = req.body;
    const user = repository.create(data);
    const savedUser = await repository.save(user);

    res.status(200).json(savedUser);
}

export default {
    getUserByUsername,
    getUsers,
    createUser
}