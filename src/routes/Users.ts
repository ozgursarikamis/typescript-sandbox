import { Users } from '../database/Users';
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

    static getById = async (request: Request, response: Response) => {
        const { id } = request.params;

        const userClient = new Users();
        const user = await userClient.getById(id);

        return {
            user,
            timestamp: new Date().toISOString()
        }
    }
    static getAll = async (request: Request, response: Response) => {
        const userClient = new Users();
        const users = await userClient.getAll();

        return {
            users,
            timestamp: new Date().toISOString()
        }
    }
}

export const usersRoutes = [
    { method: 'GET', path: '/users', handler: UsersHandler.usersIndex },
    { method: 'GET', path: '/users/{id}', handler: UsersHandler.getById }
];