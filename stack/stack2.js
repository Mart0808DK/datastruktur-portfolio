export class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

export class Stack2 {
    constructor() {
        this.head = null;
        this.lenght = 0;
    }

    push(data) {
        const node = new Node(data);
        node.next = this.head;
        this.head = node;
        this.lenght++;
    }

    pop() {
        if (!this.head) {
            return null;
        }

        const data = this.head.data;
        this.head = this.head.next;
        this.lenght--;
        return data;
    }

    peek() {
        return this.head ? this.head.data : null;
    }

    isEmpty() {
        return this.lenght === 0;
    }

    size() {
        return this.lenght;
    }
}



