'use strict';

function whatUser() {
  let userName = prompt("What is your name?");
  let capName = userName.charAt(0).toUpperCase() + userName.slice(1);
  
  alert("Welcome " + capName + "! Please try to guess the answers to the following questions with yes/no or y/n.");
  return document.write(capName);
}

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