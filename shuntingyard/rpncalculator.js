import Stack from "./stack.js";

export default function rpnCalculator(arr) {
    const calcStack = new Stack();

    while (arr.length > 0) {
        let element = arr.shift();
        if (!isNaN(Number(element))) {
            calcStack.push(element);
        } else {
            operation(element, calcStack);
        }
    }
    return calcStack.peek();
}

function operation(operation, stack) {
    const b = Number(stack.pop());
    const a = Number(stack.pop());

    switch (operation) {
        case "+":
            stack.push(a + b);
            break;
        case "-":
            stack.push(a - b);
            break;
        case "*":
            stack.push(a * b);
            break;
        case "/":
        case "%":
            stack.push(a / b);
            break;
        case "^":
            stack.push(a ** b);
            break;
        default:
            break;
    }
}
