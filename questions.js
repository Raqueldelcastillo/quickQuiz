//  I am creating some varables that will interact with HTML

var questionElement = document.querySelector("#question-title");
var startbutton = document.querySelector("#start");
var mainPage = document.querySelector("#start-screen");
var questionPage = document.querySelector("#questions");

//These are the questions that I would like to use for the quiz
var questions = [
  {
    question1: "Which country is not from the European Union?",
    options: ["Spain", "Serbia", "Ireland", "Rumenia"],
    answer: "Serbia",
  },
  {
    question2: "Movie that is not from 2023?",
    options: [
      "Past Lives",
      "Maverick",
      "Barbie",
      "Mission Imposible: Dead Reckning",
    ],
    answer: "Maverick",
  },
  {
    question3: "Biggest city in the world?",
    options: ["Spain", "Serbia", "Ireland", "Rumenia"],
    answer: "Serbia",
  },
  {
    question4: " Smallest city in the world?",
    options: ["Monaco", "San Marino", "Vatican", "Palau"],
    answer: "Vatincan",
  },
];

//This fuction will make my questions appear on the browser.
function displayQuestions() {
  mainPage.classList.add("hide");
  questionPage.classList.remove("hide");
  questionElement.textContent = questions[0].question;
  questionElement.textContent = questions[1].question;
  questionElement.textContent = questions[2].question;
  questionElement.textContent = questions[3].question;
}
startbutton.addEventListener("click", displayQuestions);

for (var i = 0; i < questions.lengh; i++) {}
