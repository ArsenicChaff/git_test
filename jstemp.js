// FizzBuzz exercise

// a program that takes a user input (number) and prints out all numbers from one
//  to the the number entered.
// For multiples of three, print Fizz instead of the number
// For multiples of five, print Buzz instead of the number
// For multiples of both, print FizzBuss instead of the number

// involves a counter, and modulo % calulations

let input = parseInt(prompt("enter an integer above 1"))

for (let temp = 1; temp <= input; temp++) {
    // console.log(temp);
    if ((temp % 3 === 0) && (temp % 5 === 0)) {
        console.log('FizzBuzz');
    } else if (temp % 3 === 0) {
        console.log('fizz')
    } else if (temp % 5 === 0) {
        console.log('buzz');
    } else {
        console.log(temp)
    }
}