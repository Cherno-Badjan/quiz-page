// import functions and grab DOM elements
import { rightAnswer } from './utils.js';
const submitButton = document.getElementById('submit-button');
const resultsSection = document.getElementById('results-section');


// set event listeners to update state and DOM
submitButton.addEventListener('click', () => {
    alert('Welcome to the Ordinary Wizarding TriQuestion Quiz!');

    const proceedMessage = confirm('Are you ready to start the TriQuestion Quiz?');
    if (!proceedMessage) return;

    let rightAnswer = 0;



    const userName = prompt('What is your name');
    const answerOne = prompt('Is Harry a Muggle?');
    const answerTwo = prompt('Is Hagrid the boy who lived?');
    const answerThree = prompt('Is Dumbledore also known as Tom Marvolo Riddle?');





});
