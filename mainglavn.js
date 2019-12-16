const dataTasks = [
	{
		question: 'Hello',
		answer: ['Привет', 'Пока', 'Море', 'Бегать', 'Прыгать', 'Троллейбус'],
		trueAnswer: 'Привет'
	},
	{
		question: 'Manufacturing',
		answer: ['Море', 'Поле', 'Производство', 'Смысл'],
		trueAnswer: 'Производство'
	},
	{
		question: 'Set up',
		answer: ['Установить', 'Примерить', 'Набраться сил', 'Разбогатеть'],
		trueAnswer: 'Установить'
	},
	{
		question: 'Programming',
		answer: ['Практическая', 'Программа', 'Программирование', 'Мозг'],
		trueAnswer: 'Программирование'
	},
	{
		question: 'Milk',
		answer: ['Привет', 'Подпись', 'Молоко', 'Забор'],
		trueAnswer: 'Молоко'
	},
	{
		question: 'Mouse',
		answer: ['Пока', 'Поле', 'Мышь', 'Макияж'],
		trueAnswer: 'Мышь',
	}
];


let play = false; // идёт ли тест
let count = dataTasks.length; // Всего вопросов
let timeQuestions = 0;
let countAnswer = 0;
let currentQuestions = dataTasks[countAnswer];// текущий вопрос
// Номер текущего вопроса
let startButton = document.getElementById('start');
let pQuestion = document.querySelector('p');
let countTrueAnswers = 0;

let buttonsAnswer;



// console.log(dataTasks[0].answer.length);






//////////// Основая логика теста начало!
startButton.onclick = start; //ЛОВИМ КЛИК НА НАЧАЛО ТРЕНАЖЁРА

function test() {
	if (play == true && countAnswer != count) {
		
		let answerButton = document.getElementsByClassName('answer'); // Как -то находите кнопки ответа - можете по классу или как хотите
		for (let index = 0; index < answerButton.length; index++) {
			let buttons = answerButton[index].addEventListener('click', function (event) {
				event.preventDefault(); // Чтобы только на кликнутой кнопке сработало
				if (checkTask(event))
				countTrueAnswers++;
				generateNewTask(currentQuestions);
				countAnswer++;
				 // Не уверен что пересчитается новый вопрос, надо теститить и если что явно указывать номер вопроса
			})

		}

	}

	else {
		/// Тут будт запускаться ф-и конца теста
		// document.getElementById('question').innerHTML=document.getElementById('question').innerHTML = dataTasks.aswer  + (currentAnswer+1) + '/' + countAnswer;
		// currentAnswer = dataTasks[count]
		// generateTask(currentAnswer); 
	}

	//////////// Основая логика теста заканчивается

}




// передаём первый вопрос 
// далее после того как юзер ответил - опять определяю клик на кнопке другой только, 
// снова вызываю generateTask после count++ 

// как определить правильный ответ: 
// после ответа юзера определяю клик и на том что он кликнул,узнаю чему равен
// textContent - и сравниваю с currentAnswer.trueAnswer







///////////// Вспомогательные ф-и
// let intervalID = setInterval(sec, 1000);

// Ф-я принимает элемент массива task и отрисовывает на странице вопросы и ответы
// РАБОТАЕТ ТОЛЬКО ИЗНАЧАЛЬНО С ПЕРВЫМ ОБЬЕКТОМ И МАССИВОМ

/*
* Ф-я принимает элемент массива dataTasks
* и вставляет новые тексты в кнопки ответов и вопрос
*/

function generateNewTask(currentQuestions) {
	document.getElementById('result').textContent = currentQuestions.question;
}
	// по подобию с ответами
}

/*
* Ф-я принимает dom - элемент, кнопку на которую нажали
* проверяет правильность ответа
* возвращает true или false
*/

function checkTask(button) {
	const userAnswer = button.textContent
	return userAnswer == currentQuestions.trueAnswer


}

function start() { // Ждём когда нажмут кнопку старт и запускаем тест 

	play = true;
	startButton.style.display = 'none';
	console.log("Нажатие произошло");
	generateTaskBlock(dataTasks);
	test();
}
function generateTaskBlock(dataTask) {  // Эта ф-я должна 1 создать блок с вопросом и кнопками ответов. 
	for (let i = 0; i < dataTask[2].answer.length; i++) {
		buttonsAnswer = document.createElement('button');
		document.body.appendChild(buttonsAnswer).classList.add('answer');
		divButtons = document.querySelector('div');
		divButtons.insertAdjacentElement("afterbegin", buttonsAnswer);
		pQuestion.innerHTML = dataTask[2].question;
		buttonsAnswer.innerHTML += dataTasks[2].answer[i];

	}
}

