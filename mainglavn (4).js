const dataTasks = [
	{
		question: 'Hello',
		answer: ['Прыгать', 'Пока', 'Море', 'Бегать', 'Привет'],
		trueAnswer: 'Привет'
	},
	{
		question: 'Manufacturing',
		answer: ['Море', 'Поле', 'Производство', 'Смысл', 'Мысль'],
		trueAnswer: 'Производство'
	},
	{
		question: 'Set up',
		answer: ['Установить', 'Примерить', 'Набраться сил', 'Разбогатеть',"Бегать"],
		trueAnswer: 'Установить'
	},
	{
		question: 'Programming',
		answer: ['Практическая', 'Программа', 'Программирование', 'Мозг', 'Процесс'],
		trueAnswer: 'Программирование'
	},
	{
		question: 'Milk',
		answer: ['Привет', 'Подпись', 'Молоко', 'Забор', 'Мир'],
		trueAnswer: 'Молоко'
	},
	{
		question: 'Mouse',
		answer: ['Пока', 'Поменять', 'Мышь', 'Макияж', "Мост"],
		trueAnswer: 'Мышь',
	}
];


let play = false; // идёт ли тест
let count = dataTasks.length; // Всего вопросов
let timeQuestions = 0;
let countAnswer = 0;
let currentQuestions = null// dataTasks[countAnswer];// текущий вопрос
// Номер текущего вопроса
let startButton = document.getElementById('start');
let pQuestion = document.querySelector('p');
let countTrueAnswers = 0;
let countPraviln = document.getElementsByClassName('answer').length; 
let buttonsAnswer;
let buttonText;//содержимое кнопки


// console.log(dataTasks[0].answer.length);






//////////// Основая логика теста начало!
startButton.onclick = start; //ЛОВИМ КЛИК НА НАЧАЛО ТРЕНАЖЁРА

function test() {
	if (play == true ) {
		let answerButton = document.getElementsByClassName('answer');
		for (let index = 0; index < answerButton.length; index++) {
			let buttons = answerButton[index].addEventListener('click', function (event) {
				event.preventDefault(); // Чтобы только на кликнутой кнопке сработало
				buttonText = this.textContent;//содержимое кнопки
				if(buttonText == dataTasks[countAnswer].trueAnswer) {
					console.log('rightAnswer');
					countTrueAnswers++;
					++countAnswer; 
					 if (countAnswer != count){
						currentQuestions = dataTasks[countAnswer];
						generateNewTask(currentQuestions); //каждый раз вызываем чтобы менялись 
					 }
					 else endTest();
				}
				else{
					console.log('errror');
				}
			})

		}

	}
	//else{
		
		// Тут будт запускаться ф-и конца теста
		//document.getElementById('question').innerHTML=document.getElementById('question').innerHTML = dataTasks.aswer  + (currentAnswer+1) + '/' + countAnswer;
		// currentAnswer = dataTasks[count]
		// generateTask(currentAnswer); 
		//	}
		
		//////////// Основая логика теста заканчивается
		
	}
	
console.log(countTrueAnswers);

///////////// Вспомогательные ф-и
// let intervalID = setInterval(sec, 1000);
// функция для вывода результата
function generateNewTask(currentQuestions) {
	console.log(currentQuestions.answer.length)
	document.querySelector('p').innerHTML = currentQuestions.question; //выводится слово,которое нужно переводить
		let buts = document.querySelectorAll('button')
	for (let i = 0; i < currentQuestions.answer.length; i++) { 
		buts[i].innerHTML = currentQuestions.answer[i];
		console.log(currentQuestions.answer[i])
	}
	//document.getElementById('result').textContent = currentQuestions.question;
}

// функция начала теста
function start() { // Ждём когда нажмут кнопку старт и запускаем тест 
	play = true; //меняем на true
	startButton.style.display = 'none'; //скрываем кнопку НАЧАТЬ
	generateTaskBlock(dataTasks,countAnswer); //запускаем функцию с countAnswer, которая изначально 0
	test(); //запускаем основную функцию теста
}

// функция создания кнопок теста, вывода слова, которое нужно переводить
function generateTaskBlock(dataTask,counts) { 
	for (let i = 0; i < dataTask[counts].answer.length; i++) { //пока i каждый раз меньше длины количества вопросов у каждого обьекта
		buttonsAnswer = document.createElement('button'); //создаём кнопки 
		document.body.appendChild(buttonsAnswer).classList.add('answer'); //создаём класс у кнопок при их создании
		divButtons = document.querySelector('div'); //находим уже созданный div
		divButtons.insertAdjacentElement("afterbegin", buttonsAnswer); //в контейнер помещаются созданные кнопки
		pQuestion.innerHTML = dataTask[counts].question; //выводится слово,которое нужно переводить
		buttonsAnswer.innerHTML = dataTasks[counts].answer[i]; //в кнопку записывается значение из массива всех ответов вместе с правильным
		console.log(dataTask[counts].answer[i]);
	}
}
function endTest() {
	document.querySelector('div').remove();
	document.querySelector('p').remove();
	p=document.getElementById('result'); //выводим нужный результат
}

