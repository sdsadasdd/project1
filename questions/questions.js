let questionElement = document.getElementById("QuestionsText");
let numberElement = document.getElementById("numberText");
let changeButton = document.getElementById("ButtonChange");
let number = 3;

let questions = [
  {text: "Як називається стадіон, на якому проводить свої домашні матчі ФК Барселона?",},
  {text: "Хто є рекордсменом за кількістю забитих м'ячів на чемпіонатах світу?",},
  { text: "У якому році було засновано Футбольний клуб Реал Мадрид?" },
  { text: "Як звати головного тренера ФК Ліверпуль станом на 2024 рік?" },
  { text: "Хто виграв Золотий м'яч у 2021 році?" },
  { text: "Яка країна виграла Кубок світу з футболу в 2018 році?" },
  { text: "Як називається найбільша футбольна асоціація у світі?" },
  { text: "Скільки гравців у футбольній команді під час гри на полі?" },
  { text: "Хто є кращим бомбардиром в історії Ліги чемпіонів УЄФА?" },
  { text: "Яка команда виграла Лігу чемпіонів УЄФА у сезоні 2020/2021?" },
  { text: "Хто є рекордсменом за кількістю здобутих Золотих м'ячів?" },
  { text: "У якому році відбулася перша офіційна гра з футболу?" },
  {text: "Скільки країн приймали участь у першому чемпіонаті світу з футболу?",},
  { text: "Який клуб виграв найбільше титулів у Лізі чемпіонів УЄФА?" },
  { text: "Хто є кращим гравцем у світі за версією ФІФА у 2022 році?" },
  { text: "Скільки гравців може бути замінено в футбольному матчі?" },
  { text: "Як звати найкращого воротаря у світі станом на 2024 рік?" },
  { text: "Яка країна виграла Євро-2020?" },
  {text: "Хто є кращим гравцем у світі за версією Золотого м'яча у 2023 році?",},
  { text: "Яка країна виграла Копа Америка у 2021 році?" },
];
changeButton.addEventListener("click", function () {
    if (number > 0) {
        let randomIndex = Math.floor(Math.random() * questions.length);
        questionElement.textContent = questions[randomIndex].text;
        number--;
        numberElement.textContent = number;
    }
  if (number === 0) {
    changeButton.removeEventListener("click", arguments.callee);
  }
});
