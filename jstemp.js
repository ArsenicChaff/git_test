// FizzBuzz exercise

// a program that takes a user input (number) and prints out all numbers from one
//  to the the number entered.
// For multiples of three, print Fizz instead of the number
// For multiples of five, print Buzz instead of the number
// For multiples of both, print FizzBuss instead of the number

// involves a counter, and modulo % calulations

let input = parseInt(prompt("enter an integer above 1"))


//counter
//for as long as; temp<inputInt, run below code; increase temp by 1
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


//overall
// function overall(input) {
//     if checkFizzBuzz(input) {
//         return checkFizzBuzz();
//     } else return input;
// }



//checking multiple of three and five
function checkFizzBuzz(input) {
    if (((input % 3) === 0) && ((input % 5) === 0)) {
        let output = "FizzBuzz"
        return output;
    } else if ((input % 3) === 0) {
        let fizz = "Fizz";
        return fizz;
    } else if ((input % 5) === 0) {
        let buzz = "Buzz";
         return buzz;
    }
}

// console.log(checkFizzBuzz(inputInt))