function calculateBMI() {
  const h = parseFloat(document.getElementById('height').value);
  const w = parseFloat(document.getElementById('weight').value);
  if (!h || !w) {
    alert("Please enter valid numbers"); return;
  }
  const bmi = w / ((h / 100) ** 2);
  let category = "";
  if (bmi < 18.5) category = "Underweight";
  else if (bmi < 25) category = "Normal";
  else if (bmi < 30) category = "Overweight";
  else category = "Obese";
  document.getElementById("bmi-result").innerText = `Your BMI is ${bmi.toFixed(1)} (${category})`;
}

function gradeQuiz() {
  const total = 5;
  let score = 0;

  // Loop through questions q1–q5
  for (let i = 1; i <= total; i++) {
    const choice = document.querySelector(`input[name="q${i}"]:checked`);
    if (!choice) {
      alert("Please answer every question before submitting.");
      return;
    }
    score += Number(choice.value);   // correct = 1, wrong = 0
  }

  // Build result message
  const percent = (score / total) * 100;
  let message = `You answered ${score} out of ${total} correctly (${percent}%). `;
  if (score === total) message += "🏆 VKG super‑fan!";
  else if (score >= 3) message += "Nice job — you know VKG pretty well!";
  else message += "Keep learning about VKG and try again!";

  document.getElementById("quiz-result").innerText = message;
}
