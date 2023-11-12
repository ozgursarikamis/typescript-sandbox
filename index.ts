import { cube } from "./cube";

const c1 = cube(3); // 27
console.log(c1);

// compilation error after cube.d.ts is added:
// index.ts:9:17 - error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.

const c2 = cube('3'); // Error: Argument of type '"3"' is not assignable to parameter of type 'number'.
console.log(c2);

const c3 = cube('"2.4"');
console.log(c3); // NaN


