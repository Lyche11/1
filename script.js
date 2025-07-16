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