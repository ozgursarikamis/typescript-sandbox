import { toUpper } from "lodash";

export class Communicator {
    constructor() {}

    greet(message: string) {
        // return `<h1>${message}</h1>`;
        return `<h1>${ toUpper(message) }</h1>`;
    }
}

var communicator = new Communicator();
document!.body.innerHTML = communicator.greet("Hello, world!");