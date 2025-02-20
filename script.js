let display = document.getElementById("display");
let firstNum = "";
let oldNum = "";
let currentOp = "";

function handleNum(num) {
    firstNum += num;
    display.value = oldNum + " " + currentOp + " " + firstNum;
}

function appendOp(operator) {
    currentOp = operator;
    oldNum = firstNum;
    firstNum = "";
    display.value = oldNum + " " + currentOp;
}

function calc() {
    const num1 = parseFloat(oldNum);
    const num2 = parseFloat(firstNum);
    let result;

    switch (currentOp) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            return;
    }

    firstNum = result.toString();
    display.value = firstNum;

    oldNum = "";
    currentOp = "";
    firstNum = "";
}