class Stack<T> {
    private elements: T[] = [];

    constructor(private size: number) { }

    isEmpty(): boolean {
        return this.elements.length === 0;
    }

    isFull(): boolean {
        return this.elements.length === this.size;
    }

    push(element: T): void {
        if(this.elements.length === this.size) {
            throw new Error('The stack is overflow!');
        }
        this.elements.push(element);
    }

    pop(): T | undefined {
        if( this.elements.length === 0) {
            throw new Error('The stack is empty!');
        }
        return this.elements.pop();
    }
}

const words = 'The quick brown fox jumps over the lazy dog'.split(' ');
const wordStack = new Stack<string>(words.length);

words.forEach(word => wordStack.push(word));

console.log("wordStack", wordStack);

while (!wordStack.isEmpty()) {
    console.log("wordStack.pop()", wordStack.pop());
}
