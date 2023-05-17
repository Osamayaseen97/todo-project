// Ask the user to enter their name
let userName = prompt("Please enter your name:");
console.log(userName);

// Ask the user to enter their gender
let gender = prompt("Please enter your gender (male or female):");
console.log(gender);

// Ask the user to enter their age
let age = prompt("Please enter your age:");
if (age <= 0) {
    alert("Invalid age. Please enter a valid age."); }
    else {
        console.log(age);
      }
      // Alert a welcoming message
// Ask the user to confirm if they want to skip the welcoming message
let skipMessage = confirm("Do you want to skip the welcoming message?");
if (skipMessage) {
    console.log("Skipping the welcoming message.");
    //Alert a welcoming message with the name of the user and the title Mr if the user is male and Ms if the user is female
  } else  if (gender === "male") {
    alert("Welcome, Mr " + name + "!");
  } else if (gender === "female") {
    alert("Welcome, Ms " + name + "!");
  } else {
    alert("Welcome, " + name + "!");
  }
   // Ask three additional Yes/No questions
   let questions = [
    "Question 1: Do you like pizza?",
    "Question 2: Have you traveled abroad?",
    "Question 3: Do you enjoy outdoor activities?"
  ];
  
  let answers = [];
  for (let i = 0; i < questions.length; i++) {
    let answer = promptQuestion(questions[i]);
    answers.push(answer);
  }
    // Function to prompt the user and store their answer
    function promptQuestion(question) {
        return handleEmptyInput(prompt(question));
      }
  // Function to handle empty inputs and consider them as "invalid" strings
function handleEmptyInput(input) {
    if (!input) {
      return "invalid";
    }
    return input;
  }
    // Print the answers
    console.log("Name:", userName);
    console.log("Gender:", gender);
    console.log("Age:", age);
    console.log("Skip Message:", skipMessage);
    console.log("Answers:", answers);    