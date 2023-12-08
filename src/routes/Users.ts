import { Request, Response } from '../types/RequestResponse';

class UsersHandler {
    static usersIndex = (request: Request, response: Response) => {
        const { name } = request.query;
        if (name) {
            return {
                message: `Hello, ${name}!`,
                timestamp: new Date().toISOString()
            }
        }
        return {
            message: 'Users Home Page',
            timestamp: new Date().toISOString()
        }
    }
}

export const usersRoutes = [
    { method: 'GET', path: '/users', handler: UsersHandler.usersIndex },
];