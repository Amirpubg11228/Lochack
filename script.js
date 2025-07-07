
function checkAnswer() {
  const userAnswer = document.getElementById('answer').value.trim();
  const resultDiv = document.getElementById('result');

  if (userAnswer === "") {
    resultDiv.textContent = "لطفاً جواب رو وارد کن عشقم 🥺";
    resultDiv.style.color = "#b02e5a";
    return;
  }

  if (userAnswer === "7") {
    resultDiv.textContent = " آفرین عشق دلم! جواب درسته حالا بالای سرتو نگاه کن🎉❤️";
    resultDiv.style.color = "#27ae60";
    resultDiv.classList.add("animate__animated", "animate__bounceIn");
  } else {
    resultDiv.textContent = "نه نازنینم، یه بار دیگه امتحان کن 😘";
    resultDiv.style.color = "#d6336c";
    resultDiv.classList.add("animate__animated", "animate__shakeX");
  }

  // حذف کلاس انیمیشن بعد از اجرا برای دفعات بعدی
  setTimeout(() => {
    resultDiv.classList.remove("animate__animated", "animate__bounceIn", "animate__shakeX");
  }, 1000);
}
