import { EmailValidator } from "./validator-sample/email-validator";
import type { alphanumeric, person } from "./types";

let email = 'john.doe@typescripttutorial.net';

const validator = new EmailValidator();
console.log(validator.isValid(email));

console.log();

const identifier: alphanumeric = "JohnDoe65";

const person: person = {
    firstName: 'John',
    lastName: 'Doe',
}

type TypeConstraints = {
    [key: string]: number;
}

const constraintType: TypeConstraints = {
    age: 1,
    // experience: "10" // error
    experience: 10
}