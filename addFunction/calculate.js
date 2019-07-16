const addFunction = (num1, num2) => 
    console.log(num1 + num2);

addFunction(1, 2);

//1. Create a function that logs the result of adding two numbers

const calculate = (num1, num2, funky) => {
    funky(num1, num2)
}

calculate(17, 17, addFunction)

//2. Create a second function called "calculate" that takes three arguments: two numbers and a fucntion
//Execute the second function and make it output 34

//3. Design a function named `evenOrOdd` that take a single number as an argument.
// It should return the string "Even" if the number is evenly divisible by two.
// It should return the string "Odd" if the number is not evenly divisible by two.
// Invoke the function once with an even number argument
// Invoke the function once with an odd number argument

// Use the modulo - or remainder - operator in JavaScript to accomplish this.

const evenOrOdd = number => {
    if (number % 2 === 0) {
        return "Even"
    }
    return "Odd"
}

const result1 = evenOrOdd(2)
    console.log(result1)

const result2 = evenOrOdd(17)
    console.log(result2)

    //  4. 1. Create an array of numbers. Some even, some odd.
    // 2. Iterate the array using the `forEach()` array method, and invoke the `evenOrOdd` function passing the current number as the argument.
    // 3. Use `console.log` to display the result in the Developer Console

const numbers = [2, 4, 3, 7]

numbers.forEach(
    (currentNumber) => {
        const isItEvenOrOdd = evenOrOdd(currentNumber)
        console.log(isItEvenOrOdd)
})