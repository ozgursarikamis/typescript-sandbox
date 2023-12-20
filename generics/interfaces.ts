interface Pair<K, V, P> {
    key: K,
    value: V,
    order: P
}

const month: Pair<string, number, number> = {
    key: 'JAN',
    value: 1,
    order: 1
};

console.log("month", month);
console.log();

interface Collection<T> {
    add(o: T): void;
    remove(o: T): void;
}

class List<T> implements Collection<T> {

    add(o: T): void {
        throw new Error("Method not implemented.");
    }
    remove(o: T): void {
        throw new Error("Method not implemented.");
    }

}

interface Options<T> {
    [name: string]: T
}

const inputOptions: Options<boolean> = {
    'disabled': false,
    'visible': true,
    // 'hidden': 'yes' // ERROR
};
