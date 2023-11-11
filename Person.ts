export class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    greet() {
        console.log("ENTERING THE METHOD");
        console.log(`Hello, ${this.name}`);
        console.log("EXITING THE METHOD");
        // This pattern is fairly common.
        // It sure would be nice if there was a way we could do this for every method!
    }
}

new Person("Ozzy").greet();