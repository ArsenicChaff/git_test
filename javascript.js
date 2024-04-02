

let userInput = parseInt(prompt('Rock, Paper, or Scissors? (enter your option as 0, 1, or 2 respectively.)'))
let comInput = Math.floor(Math.random() * 3)
const losePoint = "The computer wins a point!"
const winPoint = "Congrats! You won this round!"

console.log(rockPaperScissors(userInput, comInput))


function rockPaperScissors(userInput, comInput) {
    if (userInput > 2 || userInput < 0) {
        console.log('Please try again, improper selection.')
    } else if (userInput === comInput) {
        console.log("It's a tie! Try again!")
    } else if (userInput === 0) {
        if (comInput === 1) {
            console.log(losePoint)
        } else if (comInput === 2) {
            console.log(winPoint)
        }
    } else if (userInput === 1) {
        if (comInput === 0) {
            console.log(winPoint)
        } else if (comInput === 2) {
            console.log(losePoint)
        }
    } else if (userInput === 2) {
        if (comInput === 0) {
            console.log(losePoint)
        } else if (comInput === 1) {
            console.log(winPoint)
        }
    } else {
        console.error("error. end of calculation, no winner")
}
}

// using the funcitons below. Doesnt work. Results not defined

// function rockPaperScissors(userInput, comInput) {
//     if (checkTie) {
//         result;
//     }
//     if (checkInput) {
//         result;
//     }
//     if (checkPaper) {
//         result;
//     }
//     if (checkRock) {
//         result;
//     }
//     if (checkScissors) {
//         result;
//     }
// }

//attempt to nest more functions to make it simpler

// function checkInput(userInput) {
//     if (userInput > 2 || userInput < 0) {
//         console.log('Please try again, improper selection.')
//     }
// }

// function checkTie(userInput, comInput) {
//     if (userInput === comInput)
//     console.log("It's a tie! Try again!")
// }

// function checkScissors(userInput, comInput) {
//     if (userInput === 0) {
//         if (comInput === 1) {
//             console.log(losePoint)
//         } else if (comInput === 2) {
//             console.log(winPoint)
//         }
//     }
// }

// function checkRock(userInput, comInput) {
//     if (userInput === 1) {
//         if (comInput === 0) {
//             console.log(winPoint)
//         } else if (comInput === 2) {
//             console.log(losePoint)
//         }
//     }
// }

// function checkPaper(userInput, comInput) {
//     if (userInput === 2) {
//         if (comInput === 0) {
//             console.log(losePoint)
//         } else if (comInput === 1) {
//             console.log(winPoint)
//         }
//     }
// }