import { DoubleLinkedList } from "./doublelinked-list.js";

const list = new DoubleLinkedList();
list.addLast("C");
list.addLast("A");
list.addLast("T");
list.swapNodes(list.first(), list.last());
list.dumpList();
