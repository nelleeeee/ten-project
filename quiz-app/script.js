const quizData = [
  {
    question: "How old is Florin?",
    a: "10",
    b: "17",
    c: "19",
    d: "101",
    correct: "c",
  },
  {
    question: "What is the most used programming language on 2019?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "a",
  },
  {
    question: "Who is he president of US",
    a: "Floe",
    b: "Donald Trump",
    c: "Ivan",
    d: "Mihai",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason O N",
    d: "agsdgsdgg",
    correct: "a",
  },
];

const quiz = document.getElementById("quiz");
const answerELs = document.querySelectorAll(".answer");
const questionEL = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];

  questionEL.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerELs.forEach((answerEL) => {
    if (answerEL.checked) {
      answer = answerEL.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerELs.forEach((answerEL) => {
    answerEL.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions. </h2>
      <button onClick="location.reload()">Reload</button>`;
    }
  }
});
