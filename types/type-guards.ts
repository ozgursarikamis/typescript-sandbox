type alphanumeric = string | number;

export function add_typeof(a: alphanumeric, b: alphanumeric) {
    if (typeof a === "string" || typeof b === "string") {
        return `${a}${b}`;
    }
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }

    throw new Error("Parameters must be alphanumeric.");
}

class Customer {
    isCreditAllowed(): boolean { return true; }
}

class Supplier {
    isInShortList(): boolean { return true; }
}

type BusinessPartner = Customer | Supplier;

function signContract(partner: BusinessPartner): string | undefined {
    let message: string | undefined;
    if (partner instanceof Customer) {
        message = partner.isCreditAllowed() ? "Sign contract" : "Credit not allowed";
    } else if (partner instanceof Supplier) {
        message = partner.isInShortList() ? "Sign a new contract the supplier" : "Need to evaluate further";
    }

    return message;
}

function signContract_InOperator(partner: BusinessPartner): string | undefined {
    let message: string | undefined;
    if ('isCreditAllowed' in partner) {
        message = partner.isCreditAllowed() ? "Credit is allowed" : "Credit not allowed";
    } else {
        message = partner.isInShortList() ? "Sign a new contract the supplier" : "Need to evaluate further";
    }

    return message;
}

const partner: BusinessPartner = new Customer();
partner.isCreditAllowed = () => false;

console.log(signContract(partner));

const supplier: BusinessPartner = new Supplier();
supplier.isInShortList = () => true;

console.log(signContract(supplier));

// `in` Operator:
console.log();
console.group('In Operator');
const partner2: BusinessPartner = new Supplier();
partner2.isInShortList = () => true;

console.log(signContract_InOperator(partner2));

const supplier2: Supplier = new Supplier();
supplier2.isInShortList = () => false;

console.log(signContract_InOperator(supplier2));
console.groupEnd();
console.log();

console.group('USER-DEFINED TYPE GUARDS');
console.log();
function isCustomer(partner: any): partner is Customer {
    return partner instanceof Customer;
}

function isSupplier(partner: any): partner is Supplier {
    return partner instanceof Supplier;
}
console.groupEnd();
console.log();