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

    const percentage = Math.round(correctAnswer / 3 * 100);

    if (percentage === 100) {
        const results = `Galloping Gargoyles ${userName}!!!!, You got ${correctAnswer}/3 right. Your score is ${percentage}%!`;
        resultsSection.textContent = results;
    } else {
        const fail = `You tried ${userName} but unfortunately your score is ${percentage}%. You are not a Potter-Head. Avada Kedavra!`;
        resultsSection.textContent = fail;
    }
}); 
