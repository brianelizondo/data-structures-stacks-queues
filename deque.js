/** Node: node for a deque. */
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */
 class Deque {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    /** appendleft(val): add new value to start of the deque. Returns undefined. */
    appendleft(val) {
        if(this.first === null){
            this.appendright(val);
        }else{
            let newNode = new Node(val);
            this.first.prev = newNode;
            newNode.next = this.first;
            this.first = newNode;
            this.size++;
        }
    }

    /** appendright(val): add new value to end of the deque. Returns undefined. */
    appendright(val) {
        let newNode = new Node(val);

        if (this.first === null) this.first = newNode;
        if (this.last !== null) this.last.next = newNode;
        newNode.prev = this.last;
        this.last = newNode;

        this.size++;
    }

    /** popleft(): remove the node from the beginning of the deque
    * and return its value. Should throw an error if the deque is empty. */
     popleft() {
        if(this.first === null){
            throw new Error("The deque is empty");
        }else{
            let currentFirst = this.first;
            this.first = this.first.next;           
            this.size--;
            if(this.size == 0){
                this.first = null;
                this.last = null;
            }
            return currentFirst.val;
        }
    }

    /** popright(): remove the node from the end of the deque
    * and return its value. Should throw an error if the deque is empty. */
     popright() {
        if(this.first === null){
            throw new Error("The deque is empty");
        }else{
            let currentFirst = this.first;
            while(currentFirst){
                if(currentFirst === this.last){
                    this.last = currentFirst.prev;
                    if(this.length == 0){
                        this.head = null;
                        this.tail = null;
                    }
                    this.size--;
                    return currentFirst.val;
                }
                currentFirst = currentFirst.next;
            }
        }
    }

    /** peekleft(): return the value of the beginning in the deque. */
    peekleft() {
        return this.first.val;
    }

    /** peekright(): return the value of the end in the deque. */
    peekright() {
        return this.last.val;
    }

    /** isEmpty(): return true if the deque is empty, otherwise false */
    isEmpty() {
        return this.size === 0 ? true : false;
    }
}

module.exports = Deque;
