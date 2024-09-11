import { SingleLinkedList } from "./singlelinkedlist";

const ll = new SingleLinkedList();
ll.add(10);
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);
ll.add(60);

console.log(ll.getNodeWith(30));
