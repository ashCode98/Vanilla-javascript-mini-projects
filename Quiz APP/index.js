const questions = [
  {
    question: "Capital of France?",
    answers: [
      { text: "Berlin", correct: false },
      { text: "Madrid", correct: false },
      { text: "Paris", correct: true },
      { text: "Rome", correct: false },
    ],
  },
  {
    question: "Which planet is the red Planet?",
    answers: [
      { text: "Earth", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Venus", correct: false },
    ],
  },
  {
    question: "Which is a Python data type?",
    answers: [
      { text: "String", correct: false },
      { text: "Integer", correct: false },
      { text: "List", correct: false },
      { text: "All of these", correct: true },
    ],
  },
  {
    question: "Keyword to create an object in Java?",
    answers: [
      { text: "new", correct: true },
      { text: "create", correct: false },
      { text: "object", correct: false },
      { text: "make", correct: false },
    ],
  },
  {
    question: "Year World War II ended?",
    answers: [
      { text: "1942", correct: false },
      { text: "1945", correct: true },
      { text: "1948", correct: false },
      { text: "1948", correct: false },
    ],
  },
  {
    question: "Largest ocean on Earth?",
    answers: [
      { text: "Atlantic", correct: false },
      { text: "Indian", correct: false },
      { text: "Pacific", correct: true },
      { text: "Arctic", correct: false },
    ],
  },
  {
    question: "Currency of Japan?",
    answers: [
      { text: "Yen", correct: true },
      { text: "Won", correct: false },
      { text: "Dollar", correct: false },
      { text: "Peso", correct: false },
    ],
  },
  {
    question: "What is the square root of 144?",
    answers: [
      { text: "10", correct: false },
      { text: "11", correct: false },
      { text: "12", correct: true },
      { text: "14", correct: false },
    ]
  },
  {
    question: "HTTP stands for what?",
    answers: [
      { text: "HyperText Transfer Protocol", correct: true },
      { text: "High Transfer Text Protocol", correct: false },
      { text: "HyperText Translation Protocol", correct: false },
      { text: "High Transmission Text Protocol", correct: false },
    ]
  },
  {
    question: "What does CPU stand for in computing?",
    answers: [
      { text: "Central Process Unit", correct: false },
      { text: "Central Processing Unit", correct: true },
      { text: "Computer Personal Unit", correct: false },
      { text: "Central Programming Unit", correct: false },
    ]
  },
  {
    question: "What is the time complexity of binary search?",
    answers: [
      { text: "O(n)", correct: false },
      { text: "O(log n)", correct: true },
      { text: "O(n log n)", correct: false },
      { text: "O(1)", correct: false },
    ]
  },
  {
    question: "How do you declare an array in Java?",
    answers: [
      { text: "int[] arr = new int[5];", correct: true },
      { text: "int arr[] = new int[5];", correct: false },
      { text: "int arr = new int[5];", correct: false },
      { text: "int[] arr = 5;", correct: false },
    ]
  },
  {
    question: "What does DOM stand for in web development?",
    answers: [
      { text: "Document Object Model", correct: true },
      { text: "Dynamic Object Model", correct: false },
      { text: "Document Object Management", correct: false },
      { text: "Dynamic Object Manipulation", correct: false },
    ]
  }
];

let q = document.querySelector("p");
const answerBtn = document.querySelector(".op");
const next_btn = document.querySelector("#next-btn");

let currentQuestionIndex = 0;
let userScore = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  userScore = 0;
  showQuestion();
}

function showQuestion() {
  resetState();
  if (currentQuestionIndex == 5) {
    yourScore();
  }

  const randomIndex = Math.floor(Math.random() * questions.length);
  const question = questions[randomIndex].question;

  q.innerHTML = `${currentQuestionIndex + 1}. ${question}`;

  for (let i = 0; i < 4; i++) {
    answerBtn.children[i].innerHTML = questions[randomIndex].answers[i].text;
    answerBtn.children[i].onclick = () =>
      handleAns(i, questions[randomIndex].answers[i].correct);
  }
  currentQuestionIndex++;
}

function handleAns(index, isCorrect) {
  if (isCorrect) {
    userScore++;
    answerBtn.children[index].style.backgroundColor = "green";
  } else {
    answerBtn.children[index].style.backgroundColor = "red";
  }

  //Disabling all the buttons
  for (let i = 0; i < 4; i++) {
    answerBtn.children[i].disabled = true;
  }
}

function resetState() {
  for (let i = 0; i < 4; i++) {
    answerBtn.children[i].style.backgroundColor = "initial";
    answerBtn.children[i].disabled = false;
  }
}

next_btn.onclick = function () {
  showQuestion();
};

function yourScore() {
  const qna = document.querySelector(".qna");
  qna.innerHTML = `Your score is: ${userScore}/5`;
  next_btn.innerHTML = "Restart"
  next_btn.onclick = function () {
    window.location.reload();
  }
}

startQuiz();