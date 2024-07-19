class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.length = 1;
        this.tail = this.head;
    }

    append(value) {
        const newTail = new Node(value);
        newTail.prev = this.tail;

        this.tail.next = newTail;
        this.tail = newTail;
        this.length++;

        return this;
    }

    prepend(value) {
        const newNode = new Node(value);

        newNode.next = this.head;
        this.head.prev = newNode;
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
        firstPointer.next.prev = newNode;
        newNode.next = firstPointer.next;
        newNode.prev = firstPointer;
        firstPointer.next = newNode;
        this.length++;
        return this;
    }

    remove(index) {
        if(index > this.length || index < 0) {
            return undefined;
        }

        if(index === 0) {
            this.head = this.head.next
            this.head.prev = null;
        }else {
            let firstPointer = this.getTheIndex(index - 1);
            const actualPointer = this.getTheIndex(index);
            firstPointer.next = actualPointer.next;
            actualPointer.prev = firstPointer;
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

const list = new DoublyLinkedList(1);
console.log('primer append: ', list.append(2));
console.log('primer prepend: ',list.prepend(3));
console.log('primer insert: ',list.insert(1, 10));
console.log('segundo insert: ',list.insert(10, 7));
console.log('primer remove: ',list.remove(0));