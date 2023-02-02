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

/* 4. pandigital numbers
Note: The following question is weird, we know. In interviews, you will absolutely be given coding challenges with “weird” questions and you’ll need to be very careful when reading these types of questions to make sure you understand what you’re being asked to do.

A number of length n is 1-to-n pandigital if it makes use of all the digits 1 to n exactly once.

The number 15234 is 1-to-n pandigital because it is 5 numbers long and includes 1, 2, 3, 4, and 5.
The number 333 is not 1-to-n pandigital.
The number 0 is not 1-to-n pandigital.
The number 987654321 is 1-to-n pandigital.
Write a function that checks if a number is 1-to-n pandigital. */

function isPandigital(number) { // Declares isPandigital as function with number parameter
    let n = number.toString().length; // declares n variable, converting to string array, finding length
    let p = Array.from(number.toString()); // creates string array from number declaring p
    let t = p.sort(); // sorts p array in numerical order
    let numIsPandigital = false; // decalres numIsPandigital variable as false
    for (let i = 0; i < n; i++) { // sorts through array
        if (t[0] === "1" && t[n-1] === n.toString()) { // if t array index 0 is equal to 1, and the last index is equal to length of array - 1 (which would be highest number in the array completing the 1-n pandigital check)
            numIsPandigital = true;
        }
    }
    if (numIsPandigital) {
        console.log(`${number} is pandigital`);
    } else {
        console.log(`${number} is NOT pandigital`);
    }

}
isPandigital(987654321);