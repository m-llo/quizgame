// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score


var timerEl = document.querySelector("#timer");
var questionsEl = document.querySelector("#questions")
var quizEndEl = document.querySelector("#quiz-over")
var correctEl = document.querySelector("#correct")
var incorrectEl = document.querySelector("#incorrect")
var answersEl = document.querySelector("#answers")
var firstAnswerEl = document.querySelector("#first-answer")
var secondAnswerEl = document.querySelector("#second-answer")
var thirdAnswerEl = document.querySelector("#third-answer")
var fourthAnswerEl = document.querySelector("#fourth-answer")




var timeLeft = 120;
var correct = 0;
var incorrect = 0;

// var questionOne =["Inside which HTML element do we put the JavaScript?"];
// var questionTwo =["What is the correct JavaScript syntax to change the content of the HTML element below?"];
// var questionThree =["What is the correct place to insert a JavaScript?"];
// var questionFour =["What is the correct syntax for referring to an external script called 'xxx.js?'"];
// var questionFive =["How do you write 'Hello World' in an alert box?"];
// var totalScore = correct;

// var answersOne = ["scripting","js", "javascript","script"];
// var answersTwo = ["document.getElementById('p').innerHTML = 'Hello WOrld!'", "document.getElementById('demo').innerHTML='Hello World!'", "#demo.innerHTML = 'Hello World!'", "document.getElementsByName('p').innerHTML='Hello World!'"];
// var answersThree = ["the <body> section", "The <head> section","The <footer> section", "Both the <head> section and the <body> section are correct",];
// var answersFour = ["<script src = 'xxx.js'>", "<script name = 'xxx.js'>", "<script href='xxx.js'>"];
// var answersFive = ["alertBox('Hello World')", "alert('Hello World')", "msg('Hello World')", "msgBox('Hello World')"];

var questionMaster= [ 
    {
        question:"Inside which HTML element do we put the JavaScript?",
        answer : "script",
        options: ["scripting","js", "javascript"]
    },
    {
        question:"What is the correct syntax for referring to an external script called 'xxx.js?'",
        answer : "<script src = 'xxx.js'>",
        options: ["<script name = 'xxx.js'>", "<script href='xxx.js'>","None of these"]
    },
    {
        question:"Inside which HTML element do we put the JavaScript?",
        answer : "Both the <head> section and the <body> section are correct",
        options: ["the <body> section", "The <head> section","The <footer> section",]
    }

];







correctEl.textContent= "Correct: " + correct;
incorrectEl.textContent="Incorrect: " + incorrect;




// function init(){
// questionsEl.TextContent = "JavaScript Quiz Challenge"


// }
var startButton = document.querySelector("#start-button");

startButton.addEventListener ("click", function(){
console.log("It works!");
countDown();
quizContent();



});

function countDown() {
    quizEndEl.textContent=" "
    let timerInterval = setInterval(function() {
        timeLeft--;
        timerEl.textContent= "Time remaining: " + timeLeft;
        quizContent();
        if (timeLeft === 0) {
            clearInterval(timerInterval);
            quizOver();
        }
    }, 1000);
}



function quizContent(){
querySelector("#questions")
// for loop and indexof to move through array of options, +1
// var correctAnswer = /* document event target click answer;*/

for(var i = 0; i < questionMaster; i++) {
    questionsEl.innerHTML = questionMaster.question
    answersEl.innerHTML = questionMaster.options + questionMaster.answer
    console.log(questionsEl);
    console.log(answersEl);

    if (""){
        correct++

    }
    else {
        incorrect++;
    }
   
}
};




function quizOver(){
    if(correct >= incorrect){
    quizEndEl.textContent="YOU PASS!"
    } 
    else {
    quizEndEl.textContent="YOU FAILED!"    
    }
    questionsEl.textContent = "";
    answersEl.textContent = "";
    localStorage.setItem("highscores", correct);

};
console.log(timeLeft);
console.log(timerEl);
console.log(correct)
console.log(incorrect);


// countDown();
// // quizContent();
