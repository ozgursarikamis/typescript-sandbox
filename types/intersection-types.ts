type typeA = { firstName: string, lastName: string };
type typeB = { phone: string };

type typeAB = typeA & typeB; // will have all properties from both `typeA` and `typeB`

const person: typeAB = {
    firstName: "Ozgur",
    lastName: "Srkms",
    phone: "+44 7474 747474"
}

console.log();
console.log("person", person);

interface BusinessPartner { name: string; credit: number; };
interface Identity { id: number; name: string };
interface Contact { email: string; phone: string };

type Employee = Identity & Contact;
type Customer = BusinessPartner & Contact;
type Friend = Contact | Identity;

const friend: Friend = {
    email: "mail@example.com",
    phone: "+44 0704 070404"
}

console.log("friend", friend);

// TYPE CASTING:

const friendFromPerson = person as unknown as Contact;
const anotherConversion = <Friend><unknown>person;

console.log("friendFromPerson", friendFromPerson);
console.log("anotherConversion", anotherConversion);
console.log();

// TYPE ASSERTION = TYPE NARROWING:

function getNetPrice(price: number, discount: number, format: boolean): number | string {
    let netPrice = price * (1 - discount);
    return format ? `$${netPrice}` : netPrice;
}

const netPriceString = getNetPrice(100, 0.5, true) as string;
const netPriceNumber = getNetPrice(100, 0.5, false) as number;

console.log("netPrice (string)", netPriceString);
console.log("netPrice (number)", netPriceNumber);