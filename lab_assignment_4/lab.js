// *******************************************************
// JAVASCRIPT QUIZ GAME (MULTIPLE CHOICE + SCORES)
// This quiz runs in the browser console.
// It asks MCQ questions and stores your high score using localStorage.
// *******************************************************

// Quiz questions stored in an array
const quizQuestions = [
  {
    question: "What is the capital of France?",
    options: ["A: London", "B: Paris", "C: Rome", "D: Berlin"],
    answer: "b"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["A: Jupiter", "B: Mars", "C: Saturn", "D: Venus"],
    answer: "b"
  },
  {
    question: "What is the largest mammal?",
    options: ["A: Elephant", "B: Giraffe", "C: Blue Whale", "D: Hippo"],
    answer: "c"
  },
  {
    question: "What is 10 + 15?",
    options: ["A: 20", "B: 25", "C: 30", "D: 35"],
    answer: "b"
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: ["A: Dickens", "B: Tolstoy", "C: Shakespeare", "D: Homer"],
    answer: "c"
  }
];

// Main Quiz Function
function runQuiz() {
  let score = 0;

  alert("Welcome to the Quiz! Answer using a, b, c, or d.");

  for (let i = 0; i < quizQuestions.length; i++) {
    const q = quizQuestions[i];

    const questionText =
      q.question +
      "\n" +
      q.options.join("\n") +
      "\n(Type: a, b, c, or d)";

    let userInput = prompt(questionText);

    if (userInput === null) {
      alert("Quiz ended early.");
      return;
    }

    userInput = userInput.toLowerCase().trim();

    if (userInput === q.answer) {
      score++;
      alert("Correct!");
    } else {
      alert("Wrong! Correct answer: " + q.answer.toUpperCase());
    }
  }

  alert("Quiz Completed!\nYour Score: " + score + "/" + quizQuestions.length);
  saveHighScore(score);
}

// Save high score
function saveHighScore(score) {
  let previousHighScore = localStorage.getItem("quizHighScore");

  if (previousHighScore === null || score > Number(previousHighScore)) {
    localStorage.setItem("quizHighScore", score);
    alert("New High Score! 🎉 Score: " + score);
  } else {
    alert(
      "Your Score: " + score +
      "\nCurrent High Score: " + previousHighScore
    );
  }
}

// Start the quiz
runQuiz();
