import { DatabaseEntity } from "./DatabaseEntity";

export class Products extends DatabaseEntity  {

    constructor() {
        super();
    }

    async getAllProducts() {
        return await this.prisma.products.findMany();
    }

    async getProductById(id: string) {
        return await this.prisma.products.findUnique({
            where: {
                id
            }
        });
    }
}