import { Request, Response } from '../types/RequestResponse';

class HomeHandler {
    static index = (request: Request, response: Response) => {
        return {
            message: 'Welcome to the API World!',
            timestamp: new Date().toISOString()
        }
    }
}

export const homeRoutes = [
    { method: 'GET', path: '/', handler: HomeHandler.index },
];