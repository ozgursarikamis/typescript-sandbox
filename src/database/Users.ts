import { DatabaseEntity } from "./DatabaseEntity";

export class Users extends DatabaseEntity {

    getAll() {
        return this.prisma.users.findMany();
    }

    getById(id: string) {
        return this.prisma.users.findUnique({
            where: {
                id
            }
        });
    }
}