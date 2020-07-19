import {Request, Response} from 'express';

const users = [
    { name: 'Paulo Luiz', email: 'paulo.luiz127@gmail.com' }
]

export default {
    async index(req: Request, res: Response) {
        return res.json(users)
    }
};

