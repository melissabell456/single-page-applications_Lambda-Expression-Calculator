let output = document.getElementById("output");
let input1 = document.getElementById("num1");
let input2 = document.getElementById("num2");
let allButtons = document.getElementsByTagName("button");

for (i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener("click", calculate);
}

function addNumbers(a, b) {
    let sum = parseInt(a) + parseInt(b);
    return sum;
}
function subtractNumbers(a, b) {
    let difference = a - b;
    return difference;
}
function multiplyNumbers(a, b) {
    let product = a * b;
    return product;
}
function divideNumbers(a, b) {
    let quotient = a / b;
    return quotient;
}

function calculate(event) {
    let totalOutput;
    whichOp = event.currentTarget.id;
    opDetermine = `${whichOp}Numbers`;
    totalOutput = window[opDetermine](input1.value, input2.value);
    printToDom(totalOutput);
    return totalOutput;
}

function printToDom(total) {
    output.innerHTML = total;
}


