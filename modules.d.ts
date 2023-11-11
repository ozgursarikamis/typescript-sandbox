declare module "pslib" {
    export const numOfAuhors: number;
    export function getAuthors(): string[];
    export class Book {
        constructor(public title: string, public author: string);
    }
}