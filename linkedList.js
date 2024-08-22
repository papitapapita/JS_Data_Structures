class LinkedList {
    #Node = class {
        constructor(value) {
            this.value = value;
            this.next = null;
        }
    }

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(value) {
        const newNode = new this.#Node(value);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    prepend(value) {
        const newNode = new this.#Node(value);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }

    insert(index, value) {
        if (index > this.length || index < 0) return;
        if (index === 0) return this.prepend(value);
        if (index === this.length) return this.append(value);

        let currentNode = this.head;

        for (let i = 0; i < index - 1; i++) {
            currentNode = currentNode.next;
        }

        const newNode = new this.#Node(value);
        newNode.next = currentNode.next;
        currentNode.next = newNode;

        this.length++;
    }

    remove(index) {
        if (index > this.length || index < 0) return;

        if (index === 0) {
            this.head = this.head.next;
            if (this.length === 1) {
                this.tail = null;
            }
            this.length--;
            return;
        }

        let currentNode = this.head;
        for (let i = 0; i < index - 1; i++) {
            currentNode = currentNode.next;
        }

        currentNode.next = currentNode.next.next;

        if (index === this.length - 1) {
            this.tail = currentNode;
        }

        this.length--;
    }

    isEmpty() {
        return !this.head;
    }
}

const linkedList = new LinkedList();
linkedList.append(2);
linkedList.append(5);
linkedList.append(10);
linkedList.append(3);


