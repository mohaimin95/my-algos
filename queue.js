class Queue {
    constructor() {
        this.queue = {};
        this.length = 0
        this.head = 0;
    }

    enqueue(item) {
        this.queue[this.length++] = item;
        return item;
    }

    dequeue() {
        let item = this.queue[this.head];
        delete this.queue[this.head++];
        return item;
    }
    peek() {
        return this.queue[this.head];
    }
}