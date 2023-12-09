import { PrismaClient } from "@prisma/client";

export class DatabaseEntity {
    prisma: PrismaClient;
    constructor() {
        this.prisma = new PrismaClient();
    }
}