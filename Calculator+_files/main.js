// If the operator is sqrt
    // dqrt the first number
// If the operator is power
    // mutilpy the first number by itself 
// If the operator is +
    // add the two numbers together
// If the operator is -
    // subtract the second number from the first
// If the operator is /
    // divide the first number by the second
// If the operator is *
    // multiple the numbers together!

// Otherwise
    // WHAT YA PLAYIN AT

const firstNumber = Number(prompt("First number:"));
const operator = (prompt("Operator: (please choose +, -, /, *, sqrt, power").toLowerCase());
if (operator !== "sqrt" && operator !== "power") {
    const secondNumber = Number(prompt("Second number:"));
}

if (operator === "sqrt"){
    alert("Answer = " + Math.sqrt(firstNumber));
} else if (operator === "power"){
    alert("Answer = " + firstNumber * firstNumber);
} else if(operator === "+"){
    alert("Answer = " + firstNumber + secondNumber);
} else if (operator === "-") {
    alert(firstNumber - secondNumber);
} else if (operator === "/") {
    alert(firstNumber / secondNumber);
} else if (operator === "*") {
    alert(firstNumber * secondNumber);
}else {
    alert("WHAT YA PLAYIN AT");
}

