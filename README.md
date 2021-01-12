# quiz-page plan
•	First create repo.
•	Run create-alchemy-bootstrap (npx create-alchemy-bootstrap .)
•	ACP directly to main.
•	Make dev branch (git checkout -b dev)
•	Quiz-page plan:
Outcome: There should be an alert.
There should be a confirm so the user can opt out.
There should be a first name prompt.
There should be a last name prompt.
There should be three question prompts.
The user should be able to see their results after quiz.
•	HTML setup:
-Some information, presented nicely with an image and some list items.
Why? So the user knows what to do.
-A button to launch the quiz (The button will need an ID)
Why? To launch the quiz.
-A secret empty results div.
Why? To inject/display results to user.
1.	Get DOM Elements.
-button
-secret div
2.	Add event listeners.
-button
-Console.log to test button
3.	Respond to user-input.
-launch an alert.
   -console.log to test.
-launch a confirmation.
    -If user says no, nothing else happens (‘return nothing to break out of cool zone)
     -If user says yes, launch the series of prompts.
-launch a first name prompt.
   -Store that output to display later.
-launch last name prompt.
  -Store output to display later.
-launch quiz prompts with specific yes/no questions.
   -How do we evaluate the answers?
    -What counts as a yes?
        -Anything that starts with a Y. 
        -How many times are we going to see if something counts as a yes?
             -Three times
              - instead of copying and pasting, lets write a ‘countAsAYes’ function!
-make a results string
-display results string
    -How? Inject stuff into ‘textContent’ of our secret results div.
