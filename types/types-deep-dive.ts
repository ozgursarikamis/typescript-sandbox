// literal types:

const name: "John" | "Marry" = "John";

const numbers: Array<number> = [1, 2, 3, 4, 5];
const names: Array<string> = ["John", "Marry"];

interface BusinessPartner {
    name: string;
    credit: number;
};

interface Identity {
    id: number;
    name: string;
};

interface Occupation {
    occupation: string;
    experience: number;
};

interface Contact {
    email: string;
    phone: string;
};

type BusinessPartnerIdentity = BusinessPartner & Identity & Occupation;

type Employee = Identity & Contact;
type Customer = BusinessPartner & Contact;

const partner: BusinessPartnerIdentity = {
    id: 1,
    name: "John",
    credit: 100,
    occupation: "Developer",
    experience: 10
};

const employee: Employee = {
    id: 1,
    name: "John",
    email: "",
    phone: ""
};

const customer: Customer = {
    name: "John",
    credit: 100,
    email: "",
    phone: ""
};

export default { name, numbers, names, partner, employee, customer };