/**
 * 单向链表
 * 1. append 可以在尾部增加节点
 * 2. prepend 可以在首部增加节点
 * 3. deleteWithValue 根据值来删除节点
 */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class linkList {
  constructor(head) {
    this.head = new Node(head) || null;
  }

  append(data) {
    if (this.head === null) {
      this.head = new Node(data);
      return;
    }
    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = new Node(data);
  }

  prepend(data) {
    const newHead = new Node(data);
    newHead.next = this.head;
    this.head = newHead;
  }

  deleteWithValue(data) {
    if (this.head === null) {
      return;
    }
    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next;
      }
      current = current.next;
    }
  }
}

const ll = new linkList();

ll.append(1);
ll.prepend(0);
ll.append(3);
ll.append(4);
ll.deleteWithValue(3);

let current = ll.head;
while (current.next) {
  console.log(current.data);
  current = current.next;
}
