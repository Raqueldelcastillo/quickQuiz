//  I am creating some varables that will interact with HTML

var questionElement = document.querySelector("#question-title");
var startbutton = document.querySelector("#start");
var mainPage = document.querySelector("#start-screen");
var questionPage = document.querySelector("#questions");
var choicesPage = document.querySelector("#choices");

//These are the questions that I would like to use for the quiz

var questions = [
  {
    question: "Which country is not from the European Union?",
    options: ["Spain", "Serbia", "Ireland", "Rumenia"],
    answer: "Serbia",
  },
  {
    question: "Movie that is not from 2023?",
    options: [
      "Past Lives",
      "Maverick",
      "Barbie",
      "Mission Imposible: Dead Reckning",
    ],
    answer: "Maverick",
  },
  {
    question: "Largest city in the world?",
    options: ["Beijing", "New York", "Tokyo", "Mumbai"],
    answer: "Tokyo",
  },
  {
    question: " Smallest city in the world?",
    options: ["Monaco", "San Marino", "Vatican", "Palau"],
    answer: "Vatican",
  },
];

//This fuction will make my questions appear on the browser.
function displayQuestions() {
  mainPage.classList.add("hide");
  questionPage.classList.remove("hide");
  questionElement.textContent = questions[0].question;
  choicesPage.textContent = questions[0].options;

  //   questionElement.textContent = questions[1].question;
  //   questionElement.textContent = questions[2].question;
  //   questionElement.textContent = questions[3].question;
}
startbutton.addEventListener("click", displayQuestions);
//
// for (var i = 0; i < questions.lengh; i++) {
//   var button = document.createElement("button");
//   button.setAttribute("class", "choises");
// }
function getQuestion() {
  var currentQuestion = questions[currentQuestion];
  currentQuestion.options.array.forEach(function (choise, i) {
    for (var i = 0; i < questions.lengh; i++) {
      var button = document.createElement("button");
      button.setAttribute("class", "choises");
    }
  });
}
