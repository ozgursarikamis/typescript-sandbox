function loggedMethod(originalMethod: Function, context: any) {
    function replacementMethod(this: any, ...args: any[]) {
        console.log("ENTERING THE METHOD");
        const result = originalMethod.apply(context, args);
        console.log("EXITING THE METHOD");
        return result;
    }
    return replacementMethod;
}

export class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    @loggedMethod
    greet() {
        console.log(`Hello, ${this.name}`);
        // This pattern is fairly common.
        // It sure would be nice if there was a way we could do this for every method!
    }
}

new Person("Ozzy").greet();

// Types of TypeScript Decorators
// Class Decorators
// Method Decorators
// Property Decorators
// Parameter Decorators