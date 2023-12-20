function getRandomElement<T>(items: T[]): T {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex]; 
}

const strArray = ['a', 'b', 'c', 'd'];
const numArray = [1, 2, 3, 4];
const booleanArray = [true, false, true, false];

const strRandom = getRandomElement(strArray);
const numRandom = getRandomElement(numArray);
const boolRandom = getRandomElement(booleanArray);

console.log({
    strRandom,
    numRandom,
    boolRandom
});

// Generic functions with multiple types:

function merge<U, V>(obj1: U, obj2: V) {
    return {
        ...obj1,
        ...obj2
    }
}

const mergeResult = merge(
    { firstName: 'Oz' },
    { lastName: 'Srkms' }
);

console.log(mergeResult);