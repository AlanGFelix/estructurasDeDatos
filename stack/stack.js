class Node {
    constructor(value){
        this.value = value
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    push(value) {
        const newValue = new Node(value);

        if(!this.bottom) {
            this.bottom = newValue;
        } else {
            newValue.next = this.top;
        }
        this.top = newValue;
        this.length++;
        return newValue;
    }

    pop() {
        if(!this.top)
            return undefined;

        const lastItem = this.top
        this.top = this.top.next;
        this.length--;
        if(this.length === 0)
            this.bottom = null;

        return lastItem;
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.peek());
stack.pop()
console.log(stack);