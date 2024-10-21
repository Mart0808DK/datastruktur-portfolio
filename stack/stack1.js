export class Plate {
    constructor(data) {
        this.data = data;
    }
}

export class Stack1 {
    constructor() {
        this.stack = [];
        this.pointer = 0;
    }

    push(data) {
        this.stack.push(new Plate(data));
        this.pointer++;
    }

    pop() {
        this.pointer--;
        return this.stack.pop();
    }

    peek() {
        return this.stack[0];
    }

    isEmpty() {
        return this.stack.length === 0;
    }   
}