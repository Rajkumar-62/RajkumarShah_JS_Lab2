//  [[[[[[[[ For 2 QUESTIONS ]]]]]]]]
// function Quiz(questions) {
//   this.score = 0;
//   this.currQuestIndex = 0;
//   this.questions = questions;
// } 

// Quiz.prototype.getQuestion = function () {
//   return this.questions[this.currQuestIndex];
// }; 

// Quiz.prototype.isEnded = function () {
//   return this.currQuestIndex === this.questions.length; };

// Quiz.prototype.validateAnswerAndUpdateScore = function (choice) {
//   let question = this.getQuestion();
//   if (question.answer === choice) {
//     this.score++;
//   }
//   this.currQuestIndex++;
// }; 

// function Question(text, options, answer) {
//   this.text = text;
//   this.options = options;
//   this.answer = answer;
// } 

// let questions = [
//   new Question(
//     "Who is the current PM of India?",
//     ["Narenda Modi", "Jawaharlal Nehru", "Pratibha Patil", "Adbul Kalam"],
//     "Narenda Modi"
//   ),
//   new Question(
//     "Whats the National bird of India?",
//     ["Piegon", "Peocock", "Koyal", "Crow"],
//     "Peocock"
//   ),
// ]; 
// function showScores() {
//   console.log("Scores :-", quiz.score);
//   let gameOverHTML = "<h1>Result</h1>";
//   gameOverHTML += `<h2 id='score'> Your Scores:- ${
//     quiz.score
//   } 
//   and mark percentage is :- ${(quiz.score / questions.length) * 100}% </h1>`;
//   document.getElementById("quiz").innerHTML = gameOverHTML;
// } 
// function loadQuestions() {
//   if (quiz.isEnded()) {
//     showScores();
//   } 
//   else {
//     let questionEle = document.getElementById("question");
//     let curQuest = quiz.getQuestion();
//     questionEle.innerHTML = curQuest.text;
//     let options = quiz.getQuestion().options;
//     for (var i = 0; i < options.length; i++) {
//       let currOption = options[i];
//       let eachOptElement = document.getElementById("choice" + i);
//       eachOptElement.innerHTML = currOption;
//       handleOptionBtn("btn" + i, currOption);  }
//     showProgress();
//   }
// }
// function showProgress() {
//   let curQuestNumber = quiz.currQuestIndex + 1;
//   let progress = document.getElementById("progress");
//   progress.innerHTML = `Question ${curQuestNumber} of ${quiz.questions.length}`;
// }
// function handleOptionBtn(btnId, choice) {
//   let btn = document.getElementById(btnId);
//   btn.addEventListener("click", () => {
//     quiz.validateAnswerAndUpdateScore(choice);
//     loadQuestions();
//   });
// }
// let quiz = new Quiz(questions);
// loadQuestions();










//  [[[[[[[[ For 3 QUESTIONS ]]]]]]]]
function Quiz(questions) {
    this.score = 0;
    this.currQuestIndex = 0;
    this.questions = questions;
  }
  Quiz.prototype.getCurrentQuestionIndex = function () {
    return this.questions[this.currQuestIndex];
  };
  Quiz.prototype.isEnded = function () {
    return this.currQuestIndex === this.questions.length;
  };
  Quiz.prototype.validateAnswerAndUpdateScore = function (choice) {
    let question = this.getCurrentQuestionIndex();
    if (question.answer === choice) {
      this.score++;
    }
    this.currQuestIndex++;
  };
  function Question(text, options, answer) {
    this.text = text;
    this.options = options;
    this.answer = answer;
  }
  let questions = [
    new Question(
      "Who is the Founder and CEO of Great Learning?",
      ["Mohan Lakhamraju", "Mark Elliot Zuckerburg", "Jeff Bezos", "Larry Page & Sergey Brin"],
      "Mohan Lakhamraju"
    ),
    new Question(
      "When was Great Learning founded?",
      ["2000", "2013", "2003", "2023"],
      "2013"
    ),
    new Question(
      "How much revenue does Great Learning generate?",
      ["$40M", "$30M","$10M", "$20M"],
      "$10M"
    )
  ];
  function showScores() {
    console.log("Scores :-", quiz.score);
    let gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += `<h2 id='score'> Your Scores:- ${
      quiz.score
    } and mark percentage is :- ${(quiz.score / questions.length) * 100}% </h1>`;
    document.getElementById("quiz").innerHTML = gameOverHTML;
  }
  function loadQuestions() {
    if (quiz.isEnded()) {
      showScores();
    } else {
        let curQuest = quiz.getCurrentQuestionIndex();
    if (curQuest.text) {
      let questionEle = document.getElementById("question");
      questionEle.innerHTML = curQuest.text;
      let options = curQuest.options;
      for (var i = 0; i < options.length; i++) {
        let currOption = options[i];
        let eachOptElement = document.getElementById("choice" + i);
        eachOptElement.innerHTML = currOption;
        handleOptionBtn("btn" + i, currOption);
      }
    } 
    showProgress();
  }
}
function showProgress() {
  let curQuestNumber = quiz.currQuestIndex + 1;
  let progress = document.getElementById("progress");
  progress.innerHTML = `Question ${curQuestNumber} of ${quiz.questions.length}`;
}
function handleOptionBtn(btnId, choice) {
  let btn = document.getElementById(btnId);
  btn.onclick = () => {
    quiz.validateAnswerAndUpdateScore(choice);
    loadQuestions();
};
}
let quiz = new Quiz(questions);
loadQuestions();