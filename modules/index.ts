import { EmailValidator } from "./validator-sample/email-validator";

let email = 'john.doe@typescripttutorial.net';

const validator = new EmailValidator();
console.log(validator.isValid(email));
