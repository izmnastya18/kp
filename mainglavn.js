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

// startButton.addEventListener("onclick",function(){ // Ждём когда нажмут кнопку старт и запускаем тест 
// 	play = true;
// 	startButton.style.display='none';
// 	console.log("Нажатие произошло");
// });
function start(){ // Ждём когда нажмут кнопку старт и запускаем тест 
		play = true;
		startButton.style.display='none';
		console.log("Нажатие произошло");
		count = count+1;
		generateTask(dataTasks);

}
	
startButton.onclick = start;
console.log(count);
if(count==1){
	// добавляются  кнопки
	generateTask(dataTasks);
	


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
function generateTask(dataTask){  
	for(let i=0;i < dataTask[0].answer.length;i++)
	{
		buttonsAnswer = document.createElement('button');
		// let brAnsw = document.createElement('br');
		// document.body.appendChild(brAnsw);
		document.body.appendChild(buttonsAnswer);
		div=document.querySelector('div');
		div.insertAdjacentElement("afterbegin", buttonsAnswer);
		pQuestion.innerHTML = dataTask[0].question;
		buttonsAnswer.innerHTML += dataTasks[0].answer[i] ;
		console.log(dataTasks[i].answer.length);
	}
	return generateTask;
}	
