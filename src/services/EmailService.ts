interface IMailTo {
    name: string,
    email: string,
}

interface IMailMessage {
    subject: string,
    body: string,
    attachment?: string[];
}

interface IMessageDTO {
    to: IMailTo,
    message: IMailMessage
}

// Data Transfer Object (DDD)

class EmailService {
    sendMail({to, message}: IMessageDTO)  {
        console.log(`Email Enviado para ${to.name}: ${message.subject}`);
    }
}

export default EmailService;