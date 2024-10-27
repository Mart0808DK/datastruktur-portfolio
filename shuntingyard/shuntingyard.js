import Queue from "./queue.js";
import rpnCalculator from "./rpncalculator.js";
import Stack from "./stack.js";

function infixToPostFix(expression) {
    const inputQueue = new Queue();
    const outputQueue = new Queue();
    const operatorStack = new Stack();

    const precedence = {
        "^": 5,
        "*": 4,
        "/": 3,
        "+": 2,
        "-": 2,
    };

    const associativity = {
        "^": "right",
        "*": "left",
        "/": "left",
        "+": "left",
        "-": "left",
    };

    const tokens = expression.split(" ");

    tokens.forEach(token => inputQueue.enqueue(token));

    while (inputQueue.size() > 0) {
        const token = inputQueue.dequeue();

        if (!isNaN(Number(token))) {
            outputQueue.enqueue(token);
        } else if (precedence[token]) {
            while (!operatorStack.isEmpty() && operatorStack.peek() !== "(" && associativity[token] === "left" && precedence[token] <= precedence[operatorStack.peek()]) {
                outputQueue.enqueue(operatorStack.pop());
            }
            operatorStack.push(token);
        } else if (token === "(") {
            operatorStack.push(token);
        } else if (token === ")") {
            while (!operatorStack.isEmpty() && operatorStack.peek() !== "(") {
                outputQueue.enqueue(operatorStack.pop());
            }
            operatorStack.pop();
        }
    }

    while (!operatorStack.isEmpty()) {
        outputQueue.enqueue(operatorStack.pop());
    }

    return outputQueue.toArray();
}

function finalCalc(expression) {
    const postFixArr = infixToPostFix(expression);
    console.log(postFixArr);
    return rpnCalculator(postFixArr);
}

window.infixToPostFix = infixToPostFix;
window.finalCalc = finalCalc;
