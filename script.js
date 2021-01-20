var timerEl = document.querySelector("#timer");
var questionsEl = document.querySelector("#questions")
var quizEndEl = document.querySelector("#quiz-over")
var enterName = document.createElement("p");
var scoresInput = document.createElement("input");
var submitScore = document.createElement("button");
var game = document.querySelector("#gameplay")
var startButton = document.querySelector("#start-button");
var currentQuestionIndex = 0;
var totalScore = correct;
var correctEl = document.querySelector("#correct")
var incorrectEl = document.querySelector("#incorrect")
var correct = 0;
var incorrect = 0;

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


// Starts the quiz
startButton.addEventListener("click", function () {
    console.log("It works!");
    currentQuestionIndex = 0;
    correct = 0;
    incorrect = 0;
    timeLeft = 0;
    scoresInput.style.visibility = "hidden";
    enterName.style.visibility = "hidden";
    submitScore.style.visibility = "hidden";
    scoreList.style.visibility = "hidden";
    countDown();
    displayQuestion();
    timeLeft = 30;
    startButton.style.visibility = "hidden";
    ;
});
// time remaining counter appears once start button is clicked
var timeLeft = "";
function countDown() {
    quizEndEl.textContent = " "
    let timerInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = "Time remaining: " + timeLeft;
        if (timeLeft <= 0) {

            clearInterval(timerInterval);
            quizOver();
            return;
        }
    }, 1000);
}
// confirms if the user selected the correct answer, logs scores, and calls next questions
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
    console.log("current question index: " + currentQuestionIndex);
    if (currentQuestionIndex === 7) {
        timeLeft = 0
        return;
    };
    game.textContent = "";
    displayQuestion();

};


// cycles through questions array 
function displayQuestion() {
    var q = questions[currentQuestionIndex].question;
    var h2 = document.createElement("h2");
    h2.textContent = q;
    h2.style.margin = 'auto';
    h2.style.width = '50%';
    game.appendChild(h2);


    for (var i = 0; i < questions[currentQuestionIndex].options.length; i++) {
        var div = document.createElement("button");
        var choice = questions[currentQuestionIndex].options[i];
        div.addEventListener("click", function () {
            var playerChoice = this.textContent
            checkAnswer(questions[currentQuestionIndex].answer, playerChoice)
        })
        div.textContent = choice;
        div.style.margin = '15px';
        div.style.marginLeft='25%';
        div.style.width = '50%';
        div.style.borderRadius ='8px';
        div.style.color = '#fff';
        div.style.backgroundColor ='#33A8FF';
        div.style.fontSize = '28px';
        div.style.textAlign = 'center';
        game.appendChild(div);
    }
};
// once quiz is over clears game area and prompts user name to log score
function quizOver() {

    quizEndEl.textContent = "All Done!"
    game.textContent = "";
    enterName.textContent = "Enter your name to log your score!";
    submitScore.setAttribute("type", "submit");
    submitScore.style.color='#fff';
    submitScore.style.backgroundColor='#33A8FF';
    submitScore.style.fontSize='28px';
    submitScore.style.margin='2px';
    submitScore.style.borderRadius='8px';
    submitScore.textContent = "Submit";
    scoresInput.style.fontSize = "28px";
    enterName.style.fontSize = "24px";
    scoresInput.style.visibility = "visible";
    enterName.style.visibility = "visible";
    submitScore.style.visibility = "visible";
    game.append(enterName);
    game.append(scoresInput);
    game.append(submitScore);

    startButton.style.visibility = "visible";

};

submitScore.addEventListener("click", function () {
    console.log(scoresInput.value);
    console.log(correct)
    saveScore()
});

function saveScore() {
    var savedScores = JSON.parse(localStorage.getItem("Scores")) || [];

    var loggedScore = {
        name: scoresInput.value,
        score: correct,
    };
    savedScores.push(loggedScore);
    localStorage.setItem("scores", JSON.stringify(loggedScore));
    console.log(savedScores);

};

var scoreEl = document.querySelector("#score-log")

scoreEl.addEventListener("click", function (event) {
    event.preventDefault();
    scoreList.style.visibility = "visible"
    renderScore()
});

var nameList = [10];
var scoreList = document.querySelector("#scores");
function renderScore() {
    var scores = JSON.parse(localStorage.getItem("scores"));
    var scoreList = document.querySelector("#scores");
    var renderedScore = scores.name + " , " + scores.score;
    for (var i = 0; i < nameList.length; i++) {
        var li = document.createElement("li");
        li.textContent = renderedScore;
        li.setAttribute("data-index", i);
        scoreList.appendChild(li);
    }

};


