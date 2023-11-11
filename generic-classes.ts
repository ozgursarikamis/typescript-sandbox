export class GenericClass<T extends number | string> {
    private _value: T | undefined;
    set value(value: T) {
        this._value = value;
    }
    get value(): T {
        return this._value as T;
    }
}

var genericClass = new GenericClass<number>();
genericClass.value = 123;
console.log(genericClass.value);

var genericClass2 = new GenericClass<string>();
genericClass2.value = "hello";
console.log(genericClass2.value);

// This will throw a compilation error because boolean is not a valid type for GenericClass
// var genericClass3 = new GenericClass<boolean>();
