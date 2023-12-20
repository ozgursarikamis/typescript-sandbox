type StringNumberBooleans = [string, number, ...boolean[]];
type StringBooleansNumber = [string, ...boolean[], number];
type BooleanStringNumber = [...boolean[], string, number];


const a: StringNumberBooleans = ["hello", 1];
const b: StringNumberBooleans = ["beautiful", 2, true];
const c: StringNumberBooleans = ["world", 3, true, true, true];

function readButtonInput(...args: [string, number, ...boolean[]]) {
    const [name, version, ...input] = args;
    //...
}

// `readonly` Tuples:

function doSomething1(pair: readonly [string, number]) {
    // pair[0] = "Hello!" // error! because `pair` is readonly.
}

let point = [3, 4] as const; // point is readonly now!

function distanceFromOrigin([x, y]: [number, number]) {
    return Math.sqrt(x ** 2 + y ** 2);
}

let distance = distanceFromOrigin([5, 12]);
console.log({distance})
