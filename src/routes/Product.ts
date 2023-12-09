import { Products } from '../database/Products';
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

    static getProducts = async (request: Request, response: Response) => {
        const client = new Products();
        const products = await client.getAllProducts();
        return {
            products,
            timestamp: new Date().toISOString()
        }
    }

    static getProductById = async (request: Request, response: Response) => {
        const client = new Products();
        const { id } = request.params;
        const product = await client.getProductById(id);
        return {
            product,
            timestamp: new Date().toISOString()
        }
    }
}

export const productRoutes = [
    { method: 'GET', path: '/products', handler: ProductsHandler.productsIndex },
    { method: 'GET', path: '/products/all', handler: ProductsHandler.getProducts },
    { method: 'GET', path: '/products/{id}', handler: ProductsHandler.getProductById }
];