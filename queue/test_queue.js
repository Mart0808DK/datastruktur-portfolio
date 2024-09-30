import { Queue } from "./queue.js";


const q = new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);

q.dumpList();

q.enqueue(40);
console.log(q.size());
q.dequeue();

console.log(q.peek());
q.dumpList();
console.log(q.size());

