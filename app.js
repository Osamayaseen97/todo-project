//  Ask the user to enter their name
const name = prompt('Enter your name:');

// Ask the user to enter their gender
const gender = prompt('Enter your gender (male or female):');

// Ask the user to enter their age
const age = parseInt(prompt('Enter your age:'));

// Validate the age and alert the user if it's less than or equal to zero
if (age <= 0) {
  alert('Invalid age! Age must be greater than zero.');
}

// Function to ask a Yes/No question and return the answer
function askYesNoQuestion(question) {
  const answer = prompt(question + ' (Yes/No)').toLowerCase();
  if (answer === '') {
    return 'Invalid';
  }
  return answer === 'yes';
}

// Function to print an array on the console
function printArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}


// Ask the user if they want to skip the welcoming message
const skipMessage = confirm('Do you want to skip the welcoming message?');

// Store the answers in an array
const answers = [name, gender, age, skipMessage];

// Ask three additional Yes/No questions
answers.push(askYesNoQuestion('Are you a student?'));
answers.push(askYesNoQuestion('Do you like coding?'));
answers.push(askYesNoQuestion('Have you traveled abroad?'));

// Print the items in the array on the console using a for loop
for (let i = 0; i < answers.length; i++) {
  console.log(answers[i]);
}
