const countries = [
  {
    name: "India",
    flag: "https://flagcdn.com/w320/in.png"
  },
  {
    name: "France",
    flag: "https://flagcdn.com/w320/fr.png"
  },
  {
    name: "Japan",
    flag: "https://flagcdn.com/w320/jp.png"
  },
  {
    name: "Brazil",
    flag: "https://flagcdn.com/w320/br.png"
  },
  {
    name: "Canada",
    flag: "https://flagcdn.com/w320/ca.png"
  }
];

let currentCountry;
let score = 0;

function loadQuestion() {
  currentCountry = countries[Math.floor(Math.random() * countries.length)];
  document.getElementById("flag").src = currentCountry.flag;
  document.getElementById("answer").value = "";
  document.getElementById("result").innerText = "";
}

function checkAnswer() {
  const userAnswer = document.getElementById("answer").value.trim();
  const result = document.getElementById("result");

  if (userAnswer.toLowerCase() === currentCountry.name.toLowerCase()) {
    result.innerText = "🎉 Correct!";
    result.style.color = "#00ffcc";
    score++;
  } else {
    result.innerText = "❌ Wrong! It was " + currentCountry.name;
    result.style.color = "#ff7675";
  }

  document.getElementById("score").innerText = "Score: " + score;
  setTimeout(loadQuestion, 1200);
}

loadQuestion();


