const skill: [string, number] = ['Development', 3];
console.log(skill);

const skillType = skill[0];
const rank = skill[1];
console.log({
    skillType,
    rank
});

function doSomething(pair: [string, number]) {
    const a = pair[0];
    const b = pair[1];

    console.log({ a, b });
}

doSomething(["hello", 42]);
// doSomething(["Hello", false]); // Fail


function destructureTuple(stringHash: [string, number]) {
    const [inputString, hash] = stringHash;
    return { inputString, hash };
}

const x = destructureTuple(["hello", 42]);
console.log("x", x);