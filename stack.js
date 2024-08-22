class Stack {
    #Node = class {
        constructor(value) {
            this.value = value;
            this.next = null;
        }
    }

    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    push(value) {
        const newNode = new this.#Node(value);

        if ( this.isEmpty() ) {
            this.bottom = newNode;
        } else {
            newNode.next = this.top;
        }

        this.top = newNode;
        this.length++;
    }

    pop() {
        if(this.isEmpty()) return;

        const returnValue = this.top.value;
        if(this.length === 1) {
            this.top = null;
            this.bottom = null;
        } else {
            this.top  = this.top.next;
        }

        this.length--;
        return returnValue;
    }

    isEmpty() {
        return this.length === 0;
    }
}

const stack = new Stack();
stack.push('a');
stack.push('b');
stack.push('c');
console.log(stack.length);
console.log(stack.top);
console.log(stack.pop());
console.log(stack.length);