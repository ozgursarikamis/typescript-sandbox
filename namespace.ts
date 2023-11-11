namespace MyMath {
    const PI = 3.14;
    export function calculateCircumference(diameter: number): number {
        return diameter * PI;
    }

    export class Rectangle {
        constructor(public width: number, public length: number) { }

        calculateSize(): number {
            return this.width * this.length;
        }

        public static calculateSize(width: number, length: number): number {
            return width * length;
        }
    }
}

// Path: app.ts

/// <reference path="namespace.ts" />

const result = MyMath.calculateCircumference(10);
console.log(result);

const rectangle = new MyMath.Rectangle(10, 20);
console.log(rectangle.calculateSize());

console.log(MyMath.Rectangle.calculateSize(10, 20));

MyMath.Rectangle.calculateSize(10, 20);