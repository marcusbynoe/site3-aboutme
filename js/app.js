'use strict';

function whatUser() {
  let userName = prompt("What is your name?");
  let capName = userName.charAt(0).toUpperCase() + userName.slice(1);
  
  alert("Welcome " + capName + "! Please try to guess the answers to the following questions with yes/no or y/n.");
  return document.write(capName);

}
console.log(capName);
let user = whatUser();

let question1 = prompt("Can you guess? Do I have red hair?").toLowerCase();
if (question1 === "yes" || question1 === "y") {
  // console.log("You are correct!")
  alert("You are correct!")
} else {
  alert("Sorry, you are incorrect.")
  // console.log("Sorry, you are incorrect.")
}

let question2 = prompt("Do I like funk music?").toLowerCase();
if (question2 === "yes" || question2 === "y") {
  // console.log("You are correct!")
  alert("You are correct!")
} else {
  alert("Sorry, you are incorrect.")
  // console.log("Sorry, you are incorrect.")
}

let question3 = prompt("Do I play the guitar?").toLowerCase();
if (question3 === "no" || question3 === "n") {
  // console.log("You are correct!")
  alert("You are correct!")
} else {
  alert("Sorry, you are incorrect.")
  // console.log("Sorry, you are incorrect.")
}

let question4 = prompt("Do I play the drums?").toLowerCase();
if (question4 === "yes" || question4 === "y") {
  // console.log("You are correct!")
  alert("You are correct!")
} else {
  alert("Sorry, you are incorrect.")
  // console.log("Sorry, you are incorrect.")
}

let question5 = prompt("Do you wanna hear some more funky beats?").toLowerCase();
if (question5 === "yes" || question5 === "y") {
  // console.log("Oh! Give it to em!")
  alert("Oh! Give it to em!")
} else {
  alert("OK, that is fine.")
  // console.log("OK, that is fine.")
}

let myNum = 9;
let attemptsNum = 0;
let maxAttemts = 4;
let score = 0;
// console.log(typeof(myNum));

for (let index = 0; index < maxAttemts; index++) {
  let question6 = +prompt("Ready? Guess how many years did I live in Hawaii?");
  if (question6 > myNum) {
    alert("Your answer is too high");
  } else if (question6 < myNum){
    alert("You answer is too low.");
  } else if (question6 === myNum) {
    score++;
    alert("You are correct!");
  } break;

  if (i === 3) {
    alert(`Sorry, you are now out of attempts. You had ${maxAttempts}`)
  }
}

// while (attemptsNum < maxAttemts) {
//   let question6 = prompt("Ready? Guess how many years did I live in Hawaii?");
//   if (parseInt(question6) === myNum) {
//     alert("You are correct!");
//     score++;
//     console.log(typeof(myNum));
//     break;
//   } else if (question6 < myNum){
//     alert("You answer is too low.");
//     attemptsNum ++;
//   } else if (question6 > myNum){
//     alert("Your answer is too high");
//     attemptsNum ++;
//   }
// }


let answerArray = ["house", "country", "funk", "hip hop", "soul", "electronic"];
let maxTries = 6;

// declare userAnswer as input to a prompt
// iterate over answer array
// if userAnser is at an index in the answer array
// then the loop stops since it is true and increment the score and alert the user
// if the userAnswer is at an index and is not equal to the string at index,
// then prompt the user again



for (let i = 0; i < maxTries; i++) {
  let userAnswer = prompt("Name a genre of music do I listen to...");
  let answerBool = false;
  for (let j = 0; j < answerArray.length; j++) {

    if (userAnswer === answerArray[j]){
      answerBool = true;
      score++;
      break;
    } else {
      answerBool = false;
      break;
    }
  }
  if (answerBool === false) {
    alert(`Keep trying ${capName}!`)
  } else if (answerBool === true) {
    alert("Congrats!")
    break;
  }
}