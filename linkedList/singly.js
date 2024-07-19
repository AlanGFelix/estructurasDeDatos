class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.length = 1;
        this.tail = this.head
    }

    append(value) {
        const newTail = new Node(value);

        this.tail.next = newTail;
        this.tail = newTail;
        this.length++;

        return this;
    }

    prepend(value) {
        const newNode = new Node(value);

        newNode.next = this.head;
        this.head = newNode;
        this.length++;

        return this;
    }

    insert(index, value) {
        if(index > this.length) {
            this.append(value);
            return this;
        }

        const newNode = new Node(value);

        const firstPointer = this.getTheIndex(index - 1);
        newNode.next = firstPointer.next;
        firstPointer.next = newNode;
        this.length++;
        return this;
    }

    remove(index) {
        if(index > this.length || index < 0) {
            return undefined;
        }

        let firstPointer;
        if(index === 0) {
            this.head = this.head.next
        }else {
            firstPointer = this.getTheIndex(index - 1);
            const actualPointer = this.getTheIndex(index);
            firstPointer.next = actualPointer.next;
        }
        this.length--;
        return this;
    }

    getTheIndex(index) {
        let actualNode = this.head;
        for(let i = 0; i <= this.length; i++) {
            if(i === index) {
                return actualNode;
            }

            actualNode = actualNode.next;
        }
    }
}

const list = new SinglyLinkedList(1);
console.log(list.append(2));
console.log(list.prepend(3));
console.log(list.insert(1, 10));
console.log(list.insert(10, 7));
console.log(list.remove(0));