class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(val) {
        this.stack.push(val);
        if (
            this.minStack.length === 0 ||
            val <= this.minStack[this.minStack.length - 1]
        ) {
            this.minStack.push(val);
        }
    }

    pop() {
        const popped = this.stack.pop();
        if (popped === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
    }

    top() {
        return this.stack[this.stack.length - 1];
    }

    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}
//Test the class 
const obj = new MinStack();

obj.push(-2);
obj.push(0);
obj.push(-3);

console.log("Min:", obj.getMin()); // ➜ -3

obj.pop();

console.log("Top:", obj.top());    // ➜ 0
console.log("Min:", obj.getMin()); // ➜ -2