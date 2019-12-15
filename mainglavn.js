const dataTasks = [
	{
		question: 'Hello',
		answer: [ 'Привет', 'Пока', 'Море', 'Бегать', 'прыгать' ],
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

console.log(dataTasks[0].question);

let play=false; // идёт ли тест
let count = 0;
let timeQuestions = 0;
let currentQuestions = 0;
let countAnswer = 0;
let startButton=document.getElementById('start'); 
let pQuestion = document.querySelector('p');
let buttonsAnswer;



console.log(dataTasks[0].answer.length);

// startButton.addEventListener("onclick",function(){ // Ждём когда нажмут кнопку старт и запускаем тест 
// 	play = true;
// 	startButton.style.display='none';
// 	console.log("Нажатие произошло");
// });
function start(){ // Ждём когда нажмут кнопку старт и запускаем тест 
		play = true;
		startButton.style.display='none';
		console.log("Нажатие произошло");
	};
	
startButton.onclick = start;
generateTask(dataTasks);
console.log(dataTasks[0].answer);
if(play){
	// добавляются  кнопки











    // for(let i = 0; i < dataTasks.length; i++){
	// 	for(let j = 0; j < count; j++)
	// 	{
	// 		buttonsAnswer.style.display='block';
	// 	}
	// }
	
	// for(let i = 0; i < dataTasks.length; i++)
	// {
	// 	buttonsAnswer.innerHTML = dataTasks[i].answer[i];
	// 	console.log("fdnjfn");
	// }
		// let intervalID = setInterval(sec, 1000);

	// document.getElementById('question').innerHTML=document.getElementById('question').innerHTML = dataTasks.aswer  + (currentAnswer+1) + '/' + countAnswer;
	// currentAnswer = dataTasks[count]
	// generateTask(currentAnswer); 
	// alert("gfhfdj");
    // передаём первый вопрос 
	// далее после того как юзер ответил - опять определяю клик на кнопке другой только, 
	// снова вызываю generateTask после count++ 

    // как определить правильный ответ: 
	// после ответа юзера определяю клик и на том что он кликнул,узнаю чему равен
	// textContent - и сравниваю с currentAnswer.trueAnswer
}



///////////// Вспомогательные ф-и

// Ф-я принимает элемент массива task и отрисовывает на странице вопросы и ответы
function generateTask(dataTask){  
	for(let i=0;i < dataTask.length;i++)
	{
		buttonsAnswer = document.createElement('button');
		document.body.appendChild(buttonsAnswer);
		pQuestion.innerHTML = dataTask[i].question;
	}
	for(let i = 0; i < dataTask[i].answer.length; i++)
	{
		buttonsAnswer[i].innerHTML += dataTasks[0].answer;
	}
	return generateTask;
}	
