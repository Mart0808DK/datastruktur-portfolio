class Node {
    constructor(new_data) {
        this.data = new_data;
        this.next = null;
    }
}
export default class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    enqueue(data) {
        const newNode = new Node(data);
        if (this.tail) {
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }
        this.length++;
    }
    dequeue() {
        if (!this.head) {
            return null;
        }

        const dequeuedData = this.head.data;
        this.head = this.head.next;
        this.length--;

        if (!this.head) {
            this.tail = null;
            this.length = 0;
        }

        return dequeuedData;
    }
    peek() {
        return this.head ? this.head.data : null;
    }
    size() {
        return this.length;
    }
    get(index) {
        let current = this.head;
        let count = 0;
        while (current) {
            if (count == index) {
                return current.data;
            }
            count++;
            current = current.next;
        }
        return null;
    }
    dumpList() {
        let current = this.head;
        if (current === null) return console.log("List is empty");
        while (current != null) {
            console.log(current.data);
            current = current.next;
        }
    }
    clear() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    toArray() {
        const arr = [];
        let current = this.head;

        while (current) {
            arr.push(current.data);
            current = current.next;
        }
        return arr;
    }
}
