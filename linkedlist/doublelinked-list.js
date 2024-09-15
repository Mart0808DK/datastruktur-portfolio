class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

export class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.lenght = 0;
    }

    addNodeLast(node) {
        const newNode = node;
        const lastNode = this.tail;

        if(this.head == null && this.tail == null) {
            this.head = newNode;
            this.tail = newNode
        }

        if (lastNode) {
            lastNode.next = newNode;
            newNode.prev = lastNode;
            this.tail = newNode;
        }
        this.lenght++;
    }

    addNodeFirst(node) {
        const newNode = node 
        const current = this.head;

        if (!current) {
            newNode = current;
        } else {
            newNode.next = current
            current.prev = newNode
            this.head = newNode;
        }

        this.lenght++;
    }

    removeNode(existingNode) {
        let current = this.tail

        if(existingNode === this.head) {
            this.removeFirst();
        } else if(existingNode === this.tail) {
            this.removeLast();
        } else {
            while (current.prev != null) {
                if (current === existingNode) {
                    const nextNode = current.next;
                    const prevNode = current.prev;
                    prevNode.next = nextNode;
                    nextNode.prev = prevNode;
                    this.lenght--;
                }

                current = current.prev;
            }
        }
        
    }

    insertBefore(newNode, existingNode ) {
        if(existingNode === null) return null;
        let current = this.head;
        while (current.next != null) {
            if (existingNode == current) {
                const prevToNewNode = existingNode.prev;
                newNode.prev = prevToNewNode;
                newNode.next = existingNode;
                prevToNewNode.next = newNode;
                existingNode.prev = newNode;

            }
            current = current.next
        }
        this.lenght++;
    }


    insertAfter(newNode, existingNode ) {
        if (existingNode === null) return null;
        let current = this.head
        while (current.next != null) {
            if ( existingNode == current) {
                const nextToNewNode = existingNode.next;
                newNode.next = nextToNewNode
                existingNode.next = newNode;
                newNode.prev = existingNode;
                nextToNewNode.prev = newNode

            }
            current = current.next
        }
        this.lenght++;
        
    }

    swapNodes(nodeA, nodeB) {
        let tmp = nodeA.data;
        nodeA.data = nodeB.data;
        nodeB.data = tmp;

    }

    

    addFirst(data) {
        const newNode = new Node(data);
        this.addNodeFirst(newNode);
        this.lenght++;
    }

    addLast(data) {
        const newNode = new Node(data);
        this.addNodeLast(newNode)
        this.lenght++;
    }

    nodeAt(index) {
        let current = this.head;
        let count = 0;

        while (current) {
            if (count == index) {
                return current;
            }
            count++;
            current = current.next;
        }

        return null;
    }

    removeFirst() {
        const current = this.head;
        const currentNext = this.tail

        if (current == null && currentNext == null) {
            console.log("List is empty");
        } else if (current == currentNext) {
            current = null;
            currentNext = null;
        } else {
           const nextNode = current.next;
           nextNode.prev = null
           this.head = nextNode
           

        }

        this.lenght--;
    }

    removeLast() {
        if (this.tail == null && this.head == null) {
            console.log("List is empty");
        } else if (this.tail == this.head) {
            current = null;
            currentNext = null;
        } else {
            const currentNextLast = this.tail.prev;
            currentNextLast.next = null;
            this.tail = currentNextLast;
        }
        this.lenght--;
    }

    removeIndex(index) {
        const nodeToRemove = this.nodeAt(index);
        this.removeNode(nodeToRemove)
        
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

    remove(data) {
        if (this.head === null) return null;
        
        if (this.head.data == data) {
            this.removeFirst();
        } else if (this.tail.data == data) {
            this.removeLast();
        }

        let current = this.head;
        while (current.next != null) {
            if (current.data === data) {
                const nextToCurrent = current.next;
                const prevToCurrent = current.prev;
                prevToCurrent.next = nextToCurrent;
                nextToCurrent.prev = prevToCurrent;

                this.lenght--;
                return;
            }
            current = current.next;
        }
    }

    indexOf(data) {
        let current = this.head;
        let count = 0;

        while (current) {
            if (current.data == data) {
                return count;
            }
            count++;
            current = current.next;
        }

        return null;
    }

    first() {
        return this.head;
    }

    last() {
       return this.tail
    }

    size() {
        return this.lenght;
    }

    clear() {
        this.head = null;
        this.tail = null;
    }

    dumpList() {
        let current = this.head;
        if (current === null) return console.log("List is empty");
        while (current != null) {
            console.log(current);
            current = current.next;
        }
    }
}