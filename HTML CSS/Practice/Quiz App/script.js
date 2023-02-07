const quizDB = [
  {
    question: "Q1. HTML stands for?",
    a: "HighText Machine Language",
    b: "HyperText and links Markup Language",
    c: "HyperText Markup Language",
    d: "None of these",
    ans: "ans3",
  },
  {
    question:
      "Q2. The correct sequence of HTML tags for starting a webpage is - ",
    a: "Head, Title, HTML, body",
    b: "HTML, Body, Title, Head",
    c: "HTML, Head, Title, Body",
    d: "HTML, Head, Title, Body",
    ans: "ans4",
  },
  {
    question:
      "Q3. Which of the following element is responsible for making the text bold in HTML?",
    a: "<pre>",
    b: "<a>",
    c: "<b>",
    d: "<br>",
    ans: "ans3",
  },
  {
    question:
      "Q4. Which of the following tag is used for inserting the largest heading in HTML?",
    a: "<h3>",
    b: "<h1>",
    c: "<h5>",
    d: "<h6>",
    ans: "ans2",
  },
];

const question = document.getElementById("qst");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");
const submit = document.getElementById("submit");
const answers = document.querySelectorAll(".answer");
const showScores = document.querySelector("#showScore");

let qNo = 0;
let score = 0;
const loadQuetions = () => {
  question.innerHTML = quizDB[qNo].question;
  option1.innerText = quizDB[qNo].a;
  option2.innerText = quizDB[qNo].b;
  option2.innerText = quizDB[qNo].b;
  option3.innerText = quizDB[qNo].c;
  option4.innerText = quizDB[qNo].d;
  // qNo++;
};

loadQuetions();

const getCheckAns = () => {
  let answer;
  answers.forEach((curAns) => {
    if (curAns.checked) {
      answer = curAns.id;
    }
  });
  return answer;
};

const deselectAll = () => {
  answers.forEach((curElem) => {
    curElem.checked = false;
  });
};

submit.addEventListener("click", () => {
  const checkedAns = getCheckAns();
  console.log(checkedAns);
  if (checkedAns === quizDB[qNo].ans) {
    score++;
  }
  qNo++;

  deselectAll();

  if (qNo < quizDB.length) {
    loadQuetions();
  } else {
    showScores.innerHTML = `
    <h3>Your Score ${score}/${quizDB.length} ✌</h3>
    <button class="btn" onclick="location.reload()">Play Again</button>
    `;

    showScores.classList.remove("scoreArea");
  }
});
