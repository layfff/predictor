const answersArray = [
  "Стоит",
  "Обязательно сделай это",
  "Это очень плохо",
  "Точно нет",
  "Скорее всего можно",
  "Можно сделать, но если аккуратно",
  "За такое можно и по шапке получить",
]

function getAnswer(answerArray) {
  const randomIndex = Math.floor(Math.random() * answerArray.length)
  return answerArray[randomIndex]
}

function showAnswer() {
  const answerElement = document.querySelector("[data-js-answer]")
  const fieldElement = document.querySelector("[data-js-field]")

  if (fieldElement.value.trim() === '') {
    return answerElement.textContent = "Вы не ввели запрос."
  }

  const answer = getAnswer(answersArray)
  answerElement.textContent = answer
}

document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();
});