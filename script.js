const quizData = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hypertext Markup Language",
      "Hypertext Mark Language",
      "Hypertransfer Markup Language",
      "Hyper Markup Language",
    ],
    correct: 0,
  },
  {
    question: "Which HTML element is used to define an unordered list?",
    options: ["<ol>", "<list>", "<ul>", "<dl>"],
    correct: 2,
  },
  {
    question: "What does the <div> element represent in HTML?",
    options: ["Division", "Document", "Description", "Display"],
    correct: 0,
  },
  {
    question: "Which attribute specifies the URL of the page the link goes to?",
    options: ["href", "link", "url", "src"],
    correct: 0,
  },
  {
    question: "Which HTML tag is used to define an image?",
    options: ["<img>", "<image>", "<picture>", "<src>"],
    correct: 0,
  },
  {
    question: "What is the correct HTML for creating a hyperlink?",
    options: [
      "<a href='http://www.example.com'>Example</a>",
      "<href='http://www.example.com'>Example</a>",
      "<a url='http://www.example.com'>Example</a>",
      "<a link='http://www.example.com'>Example</a>",
    ],
    correct: 0,
  },
  {
    question: "Which tag is used to define the metadata in HTML?",
    options: ["<head>", "<meta>", "<title>", "<style>"],
    correct: 1,
  },
  {
    question: "What is the correct HTML for creating a checkbox?",
    options: [
      "<input type='checkbox'>",
      "<checkbox>",
      "<input type='check'>",
      "<check>",
    ],
    correct: 0,
  },
  {
    question: "Which HTML tag is used to define the body of the document?",
    options: ["<body>", "<page>", "<html>", "<document>"],
    correct: 0,
  },
  {
    question:
      "Which attribute is used to provide additional information about an element?",
    options: ["alt", "title", "href", "src"],
    correct: 1,
  },
];

// main function
const main_quiz = document.querySelector(".main_quiz");
const answerElm = document.querySelectorAll(".answer ");
// select Multipule options in onces
// Selecting options correctly
const [questionElm, option_1, option_2, option_3, option_4] =
  document.querySelectorAll(
    "#question, #option_1, #option_2, #option_3, #option_4"
  );

const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

// loading Function

const Data = () => {
  const { question, options } = quizData[currentQuiz];
  questionElm.textContent = `${currentQuiz + 1}: ${question}`;
  option_1.textContent = options[0];
  option_2.textContent = options[1];
  option_3.textContent = options[2];
  option_4.textContent = options[3];
};

Data();

// selected data

const selectedOption = () => {
  let answerData = Array.from(answerElm);
  return answerData.findIndex((curElm) => curElm.checked);
};

// deselecte answer
const deselectAnswer = () => {
  answerElm.forEach((curElm) => (curElm.checked = false));
};
submitBtn.addEventListener("click", () => {
  const selectedOptionIndex = selectedOption();
  console.log(selectedOptionIndex);

  if (selectedOptionIndex === quizData[currentQuiz].correct) {
    score = score + 1;
  }

  currentQuiz++;

  if (currentQuiz < quizData.length) {
    deselectAnswer();
    Data();
  } else {
    main_quiz.innerHTML = `
    <div class="result">
    <h2>&#x1F3C6 You've scored: ${score} out of ${quizData.length}</h2>
    <p>Congratulations on completing the quiz. Well done!</p>
    <button class="reload" onclick="location.reload()">Play Again</button>
  </div>`;
  }
});
