class Queue {
    #Node = class {
        constructor(value) {
            this.value = value;
            this.next = null;
        }
    }

    constructor() {
        this.tail = null;
        this.front = null;
        this.length = 0;
    }

    enqueue(value) {
        const newNode = new this.#Node(value)

        if (this.isEmpty()) {
            this.front = newNode;
        } else {
            this.tail.next = newNode;
        }

        this.tail = newNode;
        this.length++;
    }

    dequeue() {
        if(this.isEmpty()) return null;

        const returnValue = this.front.value;
        if(this.length === 1) {
            this.tail = null;
            this.front = null;
        } else {
            this.front = this.front.next;
        }

        this.length--;
        return returnValue;
    }

    front() {
        return this.front();
    }

    isEmpty() {
        return this.length === 0;
    }
}

function factorial(n) {
    if (n === 1) return 1;

    return n * factorial(n - 1);
}

console.log(factorial(5))