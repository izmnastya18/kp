const dataTasks1lvl = [
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
		answer: ['Установить', 'Примерить', 'Набраться сил', 'Разбогатеть', "Бегать"],
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

const dataTasks2lvl = [
	{
		question: 'sixteen',
		trueAnswer: 'Шестнадцать',
	},
	{
		question: 'veteran',
		trueAnswer: 'Ветеран'
	},
	{
		question: 'fool',
		trueAnswer: 'дурак'
	},
	{
		question: 'Cuba',
		trueAnswer: 'Куба'
	},
	{
		question: 'panic',
		trueAnswer: 'паника'
	},
	{
		question: 'calendar',
		trueAnswer: 'календарь',
	}
];

let play = false; // идёт ли тест
let count = dataTasks1lvl.length; // Всего вопросов
let time = 0;
let countAnswer = 0;
let currentQuestions = 0;// dataTasks[countAnswer];// Номер текущего вопроса
let startButton = document.getElementById('start');
let pQuestion = document.querySelector('#word');
let countTrueAnswers = 0;
let countPraviln = document.getElementsByClassName('answer').length;
let buttonsAnswer;
let buttonText;//содержимое кнопки
let res = document.getElementById('time');
let inputs;
let buttonsCheck;
//////////// Основая логика теста начало!
startButton.onclick = start; //ЛОВИМ КЛИК НА НАЧАЛО ТРЕНАЖЁРА

function test() {
	if (play == true) {
		let answerButton = document.getElementsByClassName('answer');
		for (let index = 0; index < answerButton.length; index++) {
			let buttons = answerButton[index].addEventListener('click', level1);
		}
	}
}
function level1(event) {
	if (countAnswer < dataTasks1lvl.length) { // Проверка на количество оставшихся вопросов
		event.preventDefault(); // Чтобы только на кликнутой кнопке сработало
		buttonText = this.textContent;//содержимое кнопки
		if (buttonText == dataTasks1lvl[countAnswer].trueAnswer) {
			countTrueAnswers++;
			++countAnswer;
			if (countAnswer < count) {
				currentQuestions = dataTasks1lvl[countAnswer];
				generateNewTask(currentQuestions); //каждый раз вызываем чтобы менялись 	
			}
			else {
				if(countTrueAnswers==6){
					endTimer();
					level2();
				}
				else{
				endTest();
				endTimer();
				}
			}
		}
		else {
			countAnswer++;
			if (countAnswer < dataTasks1lvl.length) { 
				currentQuestions = dataTasks1lvl[countAnswer];
				generateNewTask(currentQuestions);
			}
		}
	}
	else endTest()
}


//функция второго уровня
function level2() {
	let inputs = document.createElement('input'); //создается поле ввода слова
	let buttonsCheck = document.createElement('button');
	document.body.appendChild(inputs); 
	document.body.appendChild(buttonsCheck); 
	buttonsCheck.innerHTML = 'Проверить';
	let resultStr = `Вы перешли на 2 уровень`;
	document.getElementById('result').innerHTML = resultStr;
	document.getElementById('word').style.display='block';
	pQuestion.innerHTML = dataTasks2lvl[0].question;
	buttonsCheck.onclick=function(){
	document.querySelector('#result').style.display ="none";
	document.querySelector('#time').style.display = 'none';
	checks();
}
}
function checks(dataTaskы2lvl){
	let inp=document.getElementsByTagName('input');
	for(i=0; i<dataTasks2lvl.length;i++){
		pQuestion.innerHTML = dataTasks2lvl[0].question;
		if(inp.value == dataTasks2lvl[0].trueAnswer){
			console.log(countRt);
			countRT++
		}
		else{
			console.log('errors');
		}
}
}

	

///////////// Вспомогательные ф-и
// функция начала теста
function start() { // Ждём когда нажмут кнопку старт и запускаем тест 
	play = true; //меняем на true
	let intervalID = setInterval(sec, 1000);
	startButton.style.display = 'none';//скрываем кнопку НАЧАТЬ
	generateTaskBlock(dataTasks1lvl, countAnswer); //запускаем функцию с countAnswer, которая изначально 0
	test(); //запускаем основную функцию теста
}

//функция создания кнопок теста 1 уровня, вывода слова, которое нужно переводить
function generateTaskBlock(dataTask1lvl, counts) {
	for (let i = 0; i < dataTask1lvl[counts].answer.length; i++) { //пока i каждый раз меньше длины количества вопросов у каждого обьекта
		buttonsAnswer = document.createElement('button'); //создаём кнопки 
		document.body.appendChild(buttonsAnswer).classList.add('answer'); //создаём класс у кнопок при их создании
		divButtons = document.querySelector('div'); //находим уже созданный div
		divButtons.insertAdjacentElement("afterbegin", buttonsAnswer); //в контейнер помещаются созданные кнопки
		pQuestion.innerHTML = dataTask1lvl[counts].question; //выводится слово,которое нужно переводить
		buttonsAnswer.innerHTML = dataTasks1lvl[counts].answer[i]; //в кнопку записывается значение из массива всех ответов вместе с правильным
		console.log(dataTask1lvl[counts].answer[i]);
	}
}
//функция для вывода следующих слов в 1 уровне
function generateNewTask(currentQuestions) {
	document.getElementById('word').innerHTML = currentQuestions.question; //выводится слово,которое нужно переводить
	let buts = document.getElementsByClassName('answer');
	for (let i = 0; i < currentQuestions.answer.length; i++) {
		buts[i].innerHTML = currentQuestions.answer[i];
	}
}
//конец тренажера 1 уровня
function endTest() {
	play = false;   // Вот же спецом завёл переменную
	document.querySelector('div').remove();
	document.getElementById('word').style.display='none';
	let resultStr = `Правильных ответов: ${countTrueAnswers}  из  ${dataTasks1lvl.length} `;
	document.getElementById('result').innerHTML = resultStr;
	document.querySelector('#time').style.display = 'block';
}
function endTimer() {
	endTest();
	// document.querySelector('#time').style.display = 'block';
}
//функция таймера
function sec() {
	if (time <= 12 && play) {// По ней узнаём состояяниие теста
		time++;
		document.getElementById('time').innerText = `Прошло времени: ${time}  сек`;
	}
	else {
		if (play) {
			res.innerHTML = `Время вышло!`;
			endTimer();
			play=false;
		}
	}
}
//функция создания второго 2 уровня
// function generateTaskBlockFor_2Level(dataTask2lvl, counts) {
// 	inputAnswer = document.createElement('input'); //создаём кнопки 
// 	for (let i = 0; i < dataTask2lvl.length; i++) {
// 		document.body.appendChild(inputAnswer).classList.add('answer'); //создаём класс у кнопок при их создании
// 		divButtons = document.querySelector('div'); //находим уже созданный div
// 		pQuestion.innerHTML = dataTask2lvl[0].question; //выводится слово,которое нужно переводить
// 	}
// }
