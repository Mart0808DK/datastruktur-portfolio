import {Stack1} from './stack1.js';
import {Stack2} from './stack2.js';

window.addEventListener("load", main);

function main() {

    console.log("Stack1------------------------------------");

    const stack = new Stack1();
    stack.push(1);
    stack.push(2);

    console.log(stack.peek());
    console.log(stack.pop());
    console.log(stack.pop());
    console.log(stack.isEmpty());

    console.log("Stack2------------------------------------");
    

    const stack2 = new Stack2();
    stack2.push(1);
    stack2.push(2);
    stack2.push(3);
    console.log(stack2.size());
    console.log(stack2.get(1));
    
    console.log(stack2.pop());
    console.log(stack2.size());

    console.log(stack2.peek());

}
