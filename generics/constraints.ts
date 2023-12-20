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