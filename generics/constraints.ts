function merge<U extends object, V extends object>(obj1: U, obj2: V) {
    return {
        ...obj1,
        ...obj2
    }
}

const person = merge(
    { name: 'John' },
    { age: 24 }
)

console.log(person);

function prop<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

const john = { name: 'John', age: 24 };
const johns_age = prop(john, 'age');
const johns_name = prop(john, 'name');
console.log("john", { johns_name, johns_age });
