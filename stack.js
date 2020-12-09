class Stack {
    constructor() {
        this.stack = {};
        this.length = 0;
    }

    push(item) {
        this.stack[this.length++] = item;
        return;
    }

    pop() {
        let item = this.stack[this.length-1];
        delete this.stack[--this.length];
        return item;
    }
    peek() {
        return this.stack[this.length-1];
    }
}