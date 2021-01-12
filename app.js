// import functions and grab DOM elements
import { rightAnswer } from './utils.js';
const submitButton = document.getElementById('submit-button');
const resultsSection = document.getElementById('results-section');


// set event listeners to update state and DOM
submitButton.addEventListener('click', () => {
    alert('Welcome to the Ordinary Wizarding TriQuestion Quiz!');

    const proceedMessage = confirm('Are you ready to start the TriQuestion Quiz?');
    if (!proceedMessage) return;

    let correctAnswer = 0;



    const userName = prompt('What is your name');
    const answerOne = prompt('Are the Dursleys Muggles?');

    if (rightAnswer(answerOne)) ++correctAnswer;

    const answerTwo = prompt('Is Hagrid the boy who lived?');

    if (!rightAnswer(answerTwo)) ++correctAnswer;

    const answerThree = prompt('Is Dumbledore also known as Tom Marvolo Riddle?');

    if (!rightAnswer(answerThree)) ++correctAnswer;

    const results = `Well ${userName}, You scored ${correctAnswer} right!`;
    resultsSection.textContent = results;
});
