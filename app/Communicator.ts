export class Communicator {
    constructor() {}

    greet(message: string) {
        return `<h1>${message}</h1>`;
    }
}

var communicator = new Communicator();
document!.body.innerHTML = communicator.greet("Hello, world!");