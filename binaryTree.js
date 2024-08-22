class BinaryTree {
    #Node = class {
        constructor(value) {
            this.value = value;
            this.left = null;
            this.right = null;
        }
    }

    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new this.#Node(value);

        if ( this.isEmpty() ) {
            this.root = newNode;
        } else {
            this.#insertNode(this.root, newNode);
        }
    }

    #insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this.#insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this.#insertNode(node.right, newNode);
            }
        }
    }

    search(value) {
        return this.#searchNode(this.root, value);
    }

    #searchNode(node, value) {
        if (!node) return false;

        if (value < node.value) {
            return this.#searchNode(node.left, value);
        } else if (value > node.value) {
            return this.#searchNode(node.right, value);
        } else {
            return true;
        }
    }

    static printTree(node) {
        if(!node) return null;

        console.log(node.value);
        printTree(node.left);
        printTree(node.right);
    }

    isEmpty() {
        return !this.root;
    }
}