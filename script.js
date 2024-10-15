function LinkedList() {
    //append(value) adds a new node containing value to the end of the list
    this.append = function(value) {
        let node = new Node(value);
        let current;

       if (this.head === null) {
        this.head = node;
       }
       else {
            current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = node;
            this.tail = node;
       }

        this.size++;
    }
    //prepend(value) adds a new node containing value to the start of the list
    this.prepend = function(value) {

        let node = new Node(value);
        let current;

        if (this.head === null) {
            this.head = node;
            return;
        }
        else {
            current = this.head;

            while (current.next) {
                current = current.next
            }
            current.next = node;
        }

        this.size++;
    }
    //size returns the total number of nodes in the list
    this.size = 0;
// //head returns the first node in the list
    this.head = null;
    // tail returns the last node in the list
    this.tail = null;
    //at(index) returns the node at the given index
    this.at = function(index) {
        let current;

        for (let i = 0; i < index; i++) {
            current = this.head;

            while (current.next && i < index) {
                current = current.next;
            }

            return current.value;

        }
    }
    // pop removes the last element from the list
    this.pop = function() {
        let current = this.head;
        current.value = null;

        while (current.next && current.next != this.tail) {
            current = current.next;
        }

        current.next = null;
        this.tail = null;

    }
    // contains(value) returns true if the passed in value is in the list and otherwise returns false.
    this.contains = function(value) {
        let current = this.head;
        let contains = false;

        while (current.next && !contains) {
            current = current.next;

            if (current.value === value) {
                contains = true;
                return contains;
            }
        }

        return contains;

    }
    // find(value) returns the index of the node containing value, or null if not found.
    this.find = function(value) {

        if (this.contains(value)) {
            let current = this.head;
            let length = this.size;

            for (let i = 0; i <= length; i++) {
                if (current.value === value) {

                    return i;
                } else {current = current.next;}
            }
        }
    }
    // // toString represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
    this.toString = function() {
        let current = this.head;


            while (current.next) {
                console.log(`( ${current.value} ) ->`)
                current = current.next;
            }

            console.log(`( ${current.value} ) -> null`)


    }

    function Node(value) {
        this.value = value;
        this.next = null;
    }

}
const list = new LinkedList();

list.prepend('dog')
list.prepend('cat')
list.append('crow')
list.prepend('kangaroo')
list.prepend('cow');
list.prepend('bird');

console.log(list)
console.log(list.at(2))

console.log(list)
console.log(list.contains('bird'))
console.log(list.contains('wooo'))
console.log(list.find('bird'))
list.toString();

function DOM() {

    const list = new LinkedList();
    console.log(list)
    
    const update = () => {
        for (const child of list.childNodes) {
            let text = document.createTextNode(child.value);
            document.body.appendChild(text)
        }
        
    }
    const input = document.getElementById('value')
    const appendBtn = document.getElementById('append');
    const prependBtn = document.getElementById('prepend');

    appendBtn.addEventListener('click', () => {
        list.append(input.value);
        input.value = '';
        update();
        console.log(list)
    })

    prependBtn.addEventListener('click', () => {
        list.prepend(input.value);
        input.value = '';
        update();
        console.log(list)
    })
}