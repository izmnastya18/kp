const dataTasks = [
	{
		question: 'Hello',
		answer: [ 'Привет', 'Пока', 'Море', 'Бегать', 'Прыгать','Троллейбус' ],
		trueAnswer: 'Привет'
	},
	{
        question: 'Manufacturing',
		answer: [ 'Море', 'Поле', 'Производство', 'Смысл' ],
		trueAnswer: 'Производство'
    },
    {
		question: 'Set up',
		answer: [ 'Установить', 'Примерить', 'Набраться сил', 'Разбогатеть' ],
		trueAnswer: 'Установить'
    },
    {
		question: 'Programming',
		answer: [ 'Практическая', 'Программа', 'Программирование', 'Мозг' ],
		trueAnswer: 'Программирование'
    },
    {
		question: 'Milk',
		answer: [ 'Привет', 'Подпись', 'Молоко', 'Забор' ],
		trueAnswer: 'Молоко'
	},
	{
		question: 'Mouse',
		answer: [ 'Пока', 'Поле', 'Мышь', 'Макияж' ],
		trueAnswer: 'Мышь',
	}
];


let play=false; // идёт ли тест
let count = 0;
let timeQuestions = 0;
let currentQuestions = 0;
let countAnswer = 0;
let startButton=document.getElementById('start'); 
let pQuestion = document.querySelector('p');
let buttonsAnswer;



console.log(dataTasks[0].answer.length);

function start(){ // Ждём когда нажмут кнопку старт и запускаем тест 
		play = true;
		startButton.style.display='none';
		console.log("Нажатие произошло");
		generateTask(dataTasks); //ВОТ ТУТ ФУНКЦИЯ ЗАПУСКАЕТСЯ, КОГДА МЫ КЛИКАЕМ ПО КНОПКЕ НАЧАТЬ, А ВНЕ ФУНКЦИИ PLAY НЕ МЕНЯЕТ ЗНАЧЕНИЕ

}
	
startButton.onclick = start; //ЛОВИМ КЛИК НА НАЧАЛО ТРЕНАЖЁРА



if(count==1){
	// добавляются  кнопки
	generateTask(dataTasks);    //Play не становится true, поэтому условие не истинное и функция не работает 
	


// ГДЕ ВООБЩЕ РЕАЛИЗОВЫВАТЬ ФУНКЦИЮ ИЛИ КОД(ЧТО ЭТО МОЖЕТ БЫТЬ),КОТОРЫЙ БУДЕТ ПРОВЕРЯТЬ ПРАВИЛЬНОСТЬ ОТВЕТОВ НУ И ЛОВИТЬ КЛИКИ




	// currentAnswer = dataTasks[count]
	// generateTask(currentAnswer); 

	// document.getElementById('question').innerHTML=document.getElementById('question').innerHTML = dataTasks.aswer  + (currentAnswer+1) + '/' + countAnswer;
	// currentAnswer = dataTasks[count]
	// generateTask(currentAnswer); 
    // передаём первый вопрос 
	// далее после того как юзер ответил - опять определяю клик на кнопке другой только, 
	// снова вызываю generateTask после count++ 

    // как определить правильный ответ: 
	// после ответа юзера определяю клик и на том что он кликнул,узнаю чему равен
	// textContent - и сравниваю с currentAnswer.trueAnswer
};


///////////// Вспомогательные ф-и
// let intervalID = setInterval(sec, 1000);

// Ф-я принимает элемент массива task и отрисовывает на странице вопросы и ответы
// РАБОТАЕТ ТОЛЬКО ИЗНАЧАЛЬНО С ПЕРВЫМ ОБЬЕКТОМ И МАССИВОМ ----> Как это исправить,чтобы выводились по очереди другие слова???
function generateTask(dataTask){  
	for(let i=0;i < dataTask[0].answer.length;i++)
	{
		buttonsAnswer = document.createElement('button');
		document.body.appendChild(buttonsAnswer);
		divButtons = document.querySelector('div');
		divButtons.insertAdjacentElement("afterbegin", buttonsAnswer);
		pQuestion.innerHTML = dataTask[0].question;
		buttonsAnswer.innerHTML += dataTasks[0].answer[i] ;
		console.log(dataTasks[i].answer.length);
	}
	return generateTask;
}	
