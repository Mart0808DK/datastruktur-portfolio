class Node {
    constructor(new_data) {
        this.data = new_data;
        this.next = null;
    }
}

export class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.lenght = 0;
    }

    // enqueue(data)
    enqueue(data) {
        const node = new Node(data);

        if (this.head === null) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = node;
        }
        this.lenght++;
    }

    // dequeue()
    dequeue() {
        if (this.head === null) return null;
        this.head = this.head.next;
        this.lenght--;
    }

    // peek()
    peek() {
        return this.head.data;
    }

    // size()
    size() {
        return this.lenght;
    }

    // get(index)
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
            console.log(current);
            current = current.next;
        }
    }

    clear() {
        this.head = null;
        this.tail = null;
    }
}


