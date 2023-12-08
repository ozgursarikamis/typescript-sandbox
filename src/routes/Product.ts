import { Request, Response } from '../types/RequestResponse';

class ProductsHandler {
    static productsIndex = (request: Request, response: Response) => {
        const { name } = request.query;
        if (name) {
            return {
                message: `Hello, ${name}!`,
                timestamp: new Date().toISOString()
            }
        }
        return {
            message: 'Products Home Page',
            timestamp: new Date().toISOString()
        }
    }
}

export const productRoutes = [
    { method: 'GET', path: '/products', handler: ProductsHandler.productsIndex },
];