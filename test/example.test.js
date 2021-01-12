// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { rightAnswer } from '../utils.js';

const test = QUnit.test;

test('rightAnswer should return true when fed a y/Y', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = rightAnswer('Yes');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
