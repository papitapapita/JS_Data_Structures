'use strict';

class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    at(index) {
        return this.data[index];
    }

    push(value) {
        this.data[this.length] = value;
        this.length++;
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    delete(index) {
        const itemToDelete = this.data[index];
        this.shiftIndex(index);
        delete this.data[this.length - 1];
        this.length--;
        return itemToDelete;
    }

    shift() {
        if(this.length === 0) return;

        const itemToDelete = this.data[0];
        this.shiftIndex(0);
        delete this.data[this.length - 1];
        this.length--;

        return itemToDelete;
    }

    shiftIndex(index) {
        const limit = this.length - 1;
        for (let i = index; i < limit; i++) {
            this.data[i] = this.data[i + 1];
        }
    }

    unshift(value) {
        if (value) {
            if (this.length > 0) {
                this.unshiftIndex();
            }
            this.data[0] = value;
            this.length++;
        }

        return this.length;
    }

    unshiftIndex() {
        for (let i = this.length; i > 0; i--) {
            this.data[i] = this.data[i - 1];
        }
    }
    

}

const myArray = new MyArray()
myArray.unshift("Suerte")
myArray.unshift("Con el")
myArray.unshift("desafio")
myArray.unshift("platzinauta")
myArray.unshift("Un 🐱 random en el desafío")

myArray.shift()