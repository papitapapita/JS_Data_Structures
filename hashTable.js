class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    hashMethod(key) {
        let hash = 0;

        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) & this.data.length;
        }

        return hash;
    }

    set(key, value) {
        const address = this.hashMethod(key);

        if (!this.data[address]) {
            this.data[address] = [];
        }

        this.data[address].push([key, value]);

        return this.data;
    }

    get(key) {
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];

        if (!currentBucket) return;

        for (let i = 0; i < currentBucket.length; i++) {
            if (currentBucket[i][0] !== key) continue;

            return currentBucket[i][1];
        }
    }

    delete(key) {
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];

        if (!currentBucket) return null;

        for (let i = 0; i < currentBucket.length; i++) {
            if (currentBucket[i][0] !== key) continue;

            const itemToDelete = currentBucket.splice(i, 1)[0];
            return itemToDelete;
        }

        return null;
    }

    getAllKeys() {
        return this.data
            .flat()
            .map(pair => pair[0]);
    }
}

const myHashTable = new HashTable(50);
myHashTable.set("Diego", 1990);
myHashTable.set("Mariana", 1998);
myHashTable.set("Adriana", 2000);

console.log(myHashTable.getAllKeys());