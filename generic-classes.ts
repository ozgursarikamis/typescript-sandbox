export class GenericClass<T> {
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
