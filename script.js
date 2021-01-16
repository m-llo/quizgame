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


var currentQuestionIndex = 0;
var totalScore = correct;


var questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answer: "<script>",
        options: ["<scripting>", "<js>", "<script>", "<javascript>"]
    },
    {
        question: "What is the correct syntax for referring to an external script called 'xxxx.js?'",
        answer: "<script src = 'xxxx.js'>",
        options: ["<script name = 'xxxx.js'>", "<script href='xxxx.js'>", "<script src = 'xxxx.js'>", "None of these"]
    },
    {
        question: "What is the correct place to insert a JavaScript?",
        answer: "Both the <head> section and the <body> section are correct",
        options: ["Both the <head> section and the <body> section are correct", "the <body> section", "The <head> section", "The <footer> section",]
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        answer: "<script src = 'xxxx.js'>",
        options: ["alertBox('Hello World')", "alert('Hello World')", "msg('Hello World')", "msgBox('Hello World')"]
    },
    {
        question: "How do you create a function in JavaScript?",
        answer: "function myFunction()",
        options: ["function = myFunction()", "function:myFunction()", "function myFunction()", "myFunction(), Function"]
    },
    {
        question: "How do you call a function named 'myFunction'",
        answer: "myFunction()",
        options: ["myFunction()", "call function myFunction()", "call Function()", "myFunction"]
    },
    {
        question: "How to write an IF statement in JavaScript",
        answer: "if(i==5){}",
        options: ["if i=5()", "if i==5 then", "if i==5{}", "if(i==5){}"]
    },

];




var startButton = document.querySelector("#start-button");

startButton.addEventListener("click", function () {
    console.log("It works!");
    countDown();
    displayQuestion();
    timeLeft = 30;
    startButton.style.visibility = "hidden";
});


var timeLeft = "";
function countDown() {
    quizEndEl.textContent = " "
    let timerInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = "Time remaining: " + timeLeft;
        if (timeLeft <= 0) {

            clearInterval(timerInterval);
            quizOver();
        }
    }, 1000);
}
var game = document.querySelector("#gameplay")


function displayQuestion() {
    var q = questions[currentQuestionIndex].question
    var h2 = document.createElement("h2")
    h2.textContent = q;
    game.appendChild(h2);


    for (var i = 0; i < questions[currentQuestionIndex].options.length; i++) {
        var div = document.createElement("button");
        var choice = questions[currentQuestionIndex].options[i];
        div.addEventListener("click", function () {
            var playerChoice = this.textContent
            checkAnswer(questions[currentQuestionIndex].answer, playerChoice)
        })
        div.textContent = choice;
        game.appendChild(div);
    }
};




var correctEl = document.querySelector("#correct")
var incorrectEl = document.querySelector("#incorrect")
var correct = 0;
var incorrect = 0;




function checkAnswer(answer, choice) {

    if (answer === choice) {
        correct++;
        timeLeft += 2;
        console.log("right")
    }
    else {
        timeLeft -= 2;
        incorrect++;
        console.log("wrong")
    }
    correctEl.textContent = "Correct: " + correct;
    incorrectEl.textContent = "Incorrect: " + incorrect;
    console.log("answer: " + answer);
    console.log("choice: " + choice);
    console.log(correct)
    console.log(incorrect)
    currentQuestionIndex++;
    game.textContent = "";
    displayQuestion()

};
function quizOver() {

    quizEndEl.textContent = "All Done!"
    game.textContent = "";
    var enterName = document.createElement("p");
    enterName.textContent = "Enter your name to log your score!";
    var scoresInput = document.createElement("input");
    var submitScore = document.createElement("button");
    submitScore.setAttribute("type", "submit");
    submitScore.textContent = "Submit";
    game.append(enterName);
    game.append(scoresInput);
    game.append(submitScore);
    
    startButton.style.visibility = "visible";
   
    function saveScore(){
        var logScores = {
            name: scoresInput.value,
            score: correct,
        };
        localStorage.setItem("scores", JSON.stringify(logScores));
    };

    submitScore.addEventListener("click,", function (event) {
    event.preventDefault;
    saveScore();
    })
    
};



var scoreEl = document.querySelector("#score-log")


scoreEl.addEventListener("click,", function (event) {
    event.preventDefault();
    renderScore()
    function renderScore(){
    var lastScore = JSON.parse(localStorage.getItem("Scores"));
    var scoreList = scoreEL.createElement("p");
       scoreEl.append(scoreList);
       scoreList.textContent = lastScore
   


}});




