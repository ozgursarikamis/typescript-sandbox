function logProperty(
    target: any,
    key: string
) {
    let value = target[key];

    const getter = () => {
        console.log(`Get: ${key} => ${value}`);
        return value;
    }

    const setter = (next: any) => {
        console.log(`Set: ${key} => ${next}`);
        value = next;
    }

    Object.defineProperty(target, key, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    });
}

class MyClass {
    @logProperty
    public name: string | undefined;

    constructor() { }
}

const instance = new MyClass();
instance.name = 'John';

console.log(instance.name);
