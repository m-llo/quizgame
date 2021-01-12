let timerEl = document.querySelector("#timer");
let questionsEl = document.querySelector("#questions")
let quizEndEl = document.querySelector("#quiz-over")
let correctEl = document.querySelector("#correct")
let incorrectEl = document.querySelector("#incorrect")


let timeLeft = 120;
let correct = 0;
let incorrect = 0;

timerEl.textContent= "Time remaining: " + timeLeft;
correctEl.textContent= "Correct: " + correct;
incorrectEl.textContent="Incorrect: " + incorrect;


function countDown() {
    
    // let timeLeft = 120;
    // timerEl.textContent= "Time remaining: " + timeLeft;
    let timerInterval = setInterval(function() {
        timeLeft++;
        if (timeLeft === 0) {
            clearInterval(timerInterval);
            quizOver();
        }
    }, 1000);
}

function quizOver(){
    if(correct > incorrect){
    quizEndEl.textContent="YOU PASS!"
    } else {
    quizEndEl.textContent="YOU FAILED!"    
    }
}
console.log(timeLeft);
console.log(timerEl);
console.log(correct)
console.log(incorrect);

countDown();

quizOver();