type Point = { x: number, y: number };
type P = keyof Point;

const p: P = "x";
const q: P = "y";
// const r: P = "z"; // error