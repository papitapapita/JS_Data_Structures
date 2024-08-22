class DoublyLinkedList {
    #Node = class {
        constructor(value) {
            this.value = value;
            this.prev = null;
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
            newNode.prev = this.tail;
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
            this.head.prev = newNode;
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
        newNode.prev = currentNode;
    
        currentNode.next.prev = newNode;
        currentNode.next = newNode;

        this.length++;
    }

    remove(index) {
        if (index > this.length || index < 0) return;

        if (index === 0) {
            this.head = this.head.next;
            if (this.head) {
                this.head.prev = null;
            } else {
                this.tail = null;
            }
        } else {
            let currentNode = this.head;

            for (let i = 0; i < index - 1; i++) {
                currentNode = currentNode.next;
            }

            let nodeToRemove = currentNode.next;
            currentNode.next = nodeToRemove.next;

            if (nodeToRemove.next) {
                currentNode.next.prev = currentNode;
            } else {
                this.tail = currentNode;
            }
        }

        this.length--;
        
    }

    isEmpty() {
        return !this.head;
    }
}

const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.append(2);
doublyLinkedList.append(5);
doublyLinkedList.append(10);
doublyLinkedList.append(3);
doublyLinkedList.prepend(4);
doublyLinkedList.insert(0, 1);
doublyLinkedList.insert(6, 6);
doublyLinkedList.insert(3, 7);



