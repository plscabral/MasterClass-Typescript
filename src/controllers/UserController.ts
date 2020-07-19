import {Request, Response} from 'express';
import EmailService from '../services/EmailService';

const users = [
    { name: 'Paulo Luiz', email: 'paulo.luiz127@gmail.com' }
]

export default {
    async index(req: Request, res: Response) {
        return res.json(users)
    },
    async create(req: Request, res: Response) {
        const emailService = new EmailService()

        emailService.sendMail({
            to: { 
                name: 'Paulo', 
                email: 'paulo.luiz127@gmail.com'
            },
            message: { 
                subject: 'Bem-Vindo ao sistema', 
                body: 'Seja Bem-vindo' 
            }
        });

        return res.send('Sucess');
    }
};