const dataTasks = [
	{
		question: 'Hello',
		answer: [ 'Привет', 'Пока', 'Море', 'Бегать' ],
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
    }
];

let play=false; // идёт ли тест
let count = 0;
let timeQuestions = 0;
let currentAnswer = 0;
let countAnswer = 0;
let options = document.querySelectorAll('[name=option]');
let startButton=document.getElementById('start'); 
let question =document.getElementById('question');


let buttonsAnswer1 = document.createElement('button');
document.body.append(button);



startButton.addEventListener("click",function(){ // Ждём когда нажмут кнопку старт и запускаем тест 
	play = true;
	document.getElementById('start').style.display='none';
	alert("Тест начался");

if(play) {
	alert("цикл начался");
    for(let i=0; i<options.length; i++){
        options[i].style.display='block';
	}
    for(let i=0; i<options.length; i++){
            options[i].innerHTML=dataTasks.aswer;
		}
		// document.getElementById('option1').style.display='block';
		// document.getElementById('option2').style.display='block';
		// document.getElementById('option3').style.display='block';
		// document.getElementById('option4').style.display='block';
		document.getElementById('question').style.display='block';

		// document.getElementById('option1').innerHTML=dataTasks.aswer[0];
		// document.getElementById('option2').innerHTML=dataTasks.aswer[1];
		// document.getElementById('option3').innerHTML=dataTasks.aswer[2];
		// document.getElementById('option4').innerHTML=dataTasks.aswer[3];
		document.getElementById('question').innerHTML=dataTasks.question[0];
		alert("ghdsjdjk");
		document.getElementById('start').style.display='none';
		document.getElementById('end').style.display='inline';
		
		let intervalID = setInterval(sec, 1000);

	document.getElementById('question').innerHTML=document.getElementById('question').innerHTML = dataTasks.aswer  + (currentAnswer+1) + '/' + countAnswer;
	currentAnswer = dataTasks[count]
	generateTask(currentAnswer); 
	alert("gfhfdj");
    // передаём первый вопрос 
	// далее после того как юзер ответил - опять определяю клик на кнопке другой только, 
	// снова вызываю generateTask после count++ 

    // как определить правильный ответ: 
	// после ответа юзера определяю клик и на том что он кликнул,узнаю чему равен
	// textContent - и сравниваю с currentAnswer.trueAnswer

}
});

// function check(num) {
// 	if (num == 0) {
// 		for (let i = 0; i < options.length; i++) {
// 			options[i].style.display = 'block';
// 		}
// 		for (let i = 0; i < options.length; i++) {
// 			options[i].innerHTML = dataArray[currentAnswer][i];
// 		}

// 		document.getElementById('question').innerHTML = document.getElementById('question').innerHTML =
// 			dataArray[currentAnswer][0] + (currentAnswer + 1) + '/' + countAnswer;

// 		document.getElementById('start').style.display = 'none';

// 		let intervalID = setInterval(sec, 1000);
// 	} else {
// 		if (num == dataArray[currentAnswer][5]) {
// 			count++;
// 			document.getElementById('result').innerHTML = 'Верно!';
// 		} else {
// 			document.getElementById('result').innerHTML =
// 				'Неверно! Правильный ответ: ' + dataArray[currentAnswer][dataArray[currentAnswer][5]];
// 		}

// 		currentAnswer++;
// 		if (currentAnswer < countAnswer) {
// 			for (let i = 0; i < options.length; i++) {
// 				options[i].innerHTML = dataArray[currentAnswer][i];
// 			}
// 			document.getElementById('question').innerHTML =
// 				dataArray[currentAnswer][0] + (currentAnswer + 1) + '/' + countAnswer;
// 		} else {
// 			document.getElementById('time').id = 'stop';
// 			for (let i = 0; i < options.length; i++) {
// 				options[i].style.display = 'none';
// 			}
// 			document.getElementById('question').style.display = 'none';

// 			let percent = Math.round(count / countAnswer * 100);
// 			let rezult = 'Плохо!';
// 			if (percent > 70) rezult = 'Хорошо!';
// 			if (percent == 100) rezult = 'Отлично!';
			
// 			let resultStr = `Правильных ответов: ${count}  из  ${countAnswer} ( ${percent}%) ${rezult}`; //вывод ответа
// 			document.getElementById('result').innerHTML = resultStr;
// 		}
// 	}
// }

///////////// Вспомогательные ф-и

// Ф-я принимает элемент массива task и отрисовывает на странице вопросы и ответы
function generateTask(dataTask){  
	question.innerText = dataTask.question;

}

// таймер
function timerTest() {
	time++;
	document.getElementById('time').innerHTML = 'Затрачено времени: ' + timeQuestions + ' сек';
}