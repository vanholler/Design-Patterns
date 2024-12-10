class Iterator {
    constructor(collection) {
        this.index = 0;
        this.collection = collection;
    }

    next() {
        if (this.index < this.collection.length) {
            return {
                done: false,
                value: this.collection[this.index++]
            };
        } else {
            return { done: true };
        }
    }
}

const collection = [1, 2, 3, 4, 5];
const iterator = new Iterator(collection);

let next = iterator.next();
while (!next.done) {
    console.log(next.value); // Outputs 1, 2, 3, 4, 5
    next = iterator.next();
}