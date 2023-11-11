
// Export a function
export function sayHello(name: string) {
  console.log(`Hello, ${name}!`);
}

// Export a constant
export const PI = 3.14159;

// Export a class
export class Person {
  constructor(public name: string, public age: number) {}

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}