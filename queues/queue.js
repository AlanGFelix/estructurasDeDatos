class Node {
    constructor(value){
        this.value = value
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        return this.last;
    }

    enqueue(value) {
        const newValue = new Node(value);

        if(!this.last) {
            this.last = newValue;
        } else {
            this.first.next = newValue;
        }
        this.first = newValue;
        this.length++;
        return newValue;
    }

    dequeue() {
        if(!this.last)
            return undefined;

        const firstItem = this.last
        this.last = this.last.next;
        this.length--;
        if(this.length === 0)
            this.first = null;

        return firstItem;
    }
}

const stack = new Stack();
stack.enqueue(1);
stack.enqueue(2);
console.log(stack.peek());
stack.enqueue(3);
stack.enqueue(4);
stack.dequeue()
console.log(stack);