/* 1. printGreeting
Write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting.

console.log(printGreeting("Slimer"));
=> Hello there, Slimer! */

function printGreeting(name) { // Declares function printGreeting with the parameter name
    console.log(`What's Up ${name}`); // Console Logs String
} 
printGreeting("Frankie"); // Calls Function with "Frankie" as an argument

/* 2. reverseWordOrder
Write a function reverseWordOrder that accepts a single argument, a string. The function should return a string with the order of the words reversed. Don’t worry about punctuation.

console.log(reverseWordOrder("Ishmael me Call"));
=> "Call me Ishmael"

console.log(reverseWordOrder("I use Lâncome on my comb"));
=> "comb my on Lâncome use I" */

function reverseWordOrder(string) { // Declares function with the parameter string
    return string.split(" ").reverse().join(" "); // splits string between words into an array, reverses the array, then joins the array back into a string.
}
console.log(reverseWordOrder("Hello My Name Is Frankie")); // console logs/calling function with argument

/* 3. calculate
Write a function called calculate.

This function should take three arguments: two numbers and a string.

Name the parameters num1, num2, and operation.

If if the function is called with the third argument as “add”, it should return the sum of num1 and num2.

If if the function is called with the third argument as “sub”, it should return return num1 minus num2.

Do the same thing for multiplication “mult”, division “div”, and exponent “exp” (where num2 is the exponent of num1).

console.log(calculate(4, 3, "sub"));=> 1
console.log(calculate(4, 3, "exp"));=> 64 */

function calculate(num1, num2, operation) { // declares function calculate with parameters num1 num2 num3
    if (operation === "add") { // if/elseif to determine what operation to perform based on operation argument
        return num1 + num2;
    } else if (operation === "sub") {
        return num1 - num2;
    } else if (operation === "mult") {
        return num1 * num2;
    } else if (operation === "div") {
        return num1 / num2;
    } else if (operation === "exp") {
        return Math.pow(num1, num2); // Math.pow performs exponentation src: https://www.w3schools.com/jsref/jsref_pow.asp
    } else {
        return "Invalid Operation";
    }
}
console.log(calculate(5,5,"add"));
console.log(calculate(5,5,"sub"));
console.log(calculate(5,5,"mult"));
console.log(calculate(5,5,"div"));
console.log(calculate(5,5,"exp"));