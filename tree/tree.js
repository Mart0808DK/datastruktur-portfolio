class Node {
    constructor() {
        this.parent = null;
        this.childNodes = [];
        this.value = null;
        this.left = null;
        this.right = null;
        this.depth = 0;
    }

    firstChild() {
        return this.childNodes[0];
    }

    lastChild() {
        return this.childNodes[this.childNodes.length - 1];
    }

    hasChildNodes() {
        return this.childNodes.length > 0;
    }

    appendChild(child) {
        child.parent = this;
        this.childNodes.push(child);
    }

    removeChild(child) {
        this.childNodes = this.childNodes.filter(node => node !== child);
        child.parent = null;
    }

    replaceChild(newChild, oldChild) {
        this.childNodes = this.childNodes.map(node => (node === oldChild ? newChild : node));
        if (oldChild) {
            oldChild.parent = null;
        }
        newChild.parent = this;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    dump() {
        function traverse(node) {
            if (node === null) {
                return;
            }
            console.log(node);
            traverse(node.right);
            traverse(node.left);
        }

        traverse(this.root);
    }

    allChildren(node) {
        let children = [];
        if (node.left) {
            children.push(node.left);
        }
        if (node.right) {
            children.push(node.right);
        }
        return children;
    }

    addValue(value) {
        if (this.root === null) {
            this.root = new Node();
            this.root.value = value;
            return;
        }

        let currentNode = this.root;
        let newNode = new Node();
        newNode.value = value;

        while (true) {
            if (Math.random() < 0.5) {
                if (currentNode.left === null) {
                    currentNode.left = newNode;
                    newNode.parent = currentNode;
                    newNode.depth = currentNode.depth + 1;
                    currentNode.appendChild(newNode);
                    break;
                } else {
                    currentNode = currentNode.left;
                }
            } else {
                if (currentNode.right === null) {
                    currentNode.right = newNode;
                    newNode.parent = currentNode;
                    newNode.depth = currentNode.depth + 1;
                    currentNode.appendChild(newNode);
                    break;
                } else {
                    currentNode = currentNode.right;
                }
            }
        }
    }

    findValue(value) {
        let currentNode = this.root;
        while (currentNode !== null) {
            if (currentNode.value === value) {
                return currentNode;
            }
            currentNode = currentNode.left;
        }
        return null;
    }

    removeValue(value) {
        let node = this.findValue(value);
        if (node === null) {
            return;
        }

        let parent = node.parent;

        // ingen barn
        if (!node.hasChildNodes()) {
            if (parent) {
                parent.removeChild(node);
                if (parent.left === node) {
                    parent.left = null;
                } else {
                    this.root = null;
                }
            }
        }
        // har et barn
        if (node.childNodes.length === 1) {
            let child = node.firstChild();
            parent.replaceChild(child, node);
            if (parent.left === node) {
                parent.left = child;
            }

            if (this.root === node) {
                this.root = child;
            }
        }
    }
}

let tree = new Tree();
tree.addValue(1);
tree.addValue(2);
tree.addValue(3);
tree.addValue(4);

console.log(tree.allChildren(tree.root));
