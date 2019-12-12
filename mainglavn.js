// программу писала с массивом изначально, но с обьектами проще вроде как
// let dataArray = [
// 	[ 'HELLO', 'Привет', 'Пока', 'Море', 'Бегать', 1 ],
// 	[ 'MILK', 'Как дела?', 'Молоко', 'Твой', 'Деньги', 2 ],
// 	[ 'DOG', 'Собака', 'Кошка', 'Лошадь', 'Сарделька', 1 ],
// 	[ 'СAT', 'Цветок', 'Лес', 'Огонь', 'Кот', 4 ],
// 	[ 'TREE', 'Три', 'Думать', 'Дуб', 'Дерево', 4 ],
// 	[ 'RED', 'Стена', 'Красный', 'Башня', 'Война', 2 ],
// 	[ 'COMPUTER', 'Стол', 'Компьютер', 'Солнце', 'Мир', 2 ]
// ];


const dataTasks = [
	{
		question: 'Hello',
		aswer: [ 'Привет', 'Пока', 'Море', 'Бегать' ],
		trueAnswer: 'Привет'
	},
	{
        question: 'Manufacturing',
		aswer: [ 'Море', 'Поле', 'Производство', 'Смысл' ],
		trueAnswer: 'Производство'
    },
    {
		question: 'Set up',
		aswer: [ 'Установить', 'Примерить', 'Набраться сил', 'Разбогатеть' ],
		trueAnswer: 'Установить'
    },
    {
		question: 'Programming',
		aswer: [ 'Практическая', 'Программа', 'Программирование', 'Мозг' ],
		trueAnswer: 'Программирование'
    },
    {
		question: 'Milk',
		aswer: [ 'Привет', 'Подпись', 'Молоко', 'Забор' ],
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


startButton.addEventListener("click",function(){ // Ждём когда нажмут кнопку старт и запускаем тест 
	play = true;
	alert("gfhfdj");
	document.getElementById('start').style.display='none';
	
});
if(play) {
    for(let i=0; i<options.length; i++){
        options[i].style.display='block';
	}
	
    for(let i=0; i<options.length; i++){
            options[i].innerHTML=dataTask[aswer][i];;
		}
	
	document.getElementById('question').innerHTML=document.getElementById('question').innerHTML = dataTask.aswer  + (currentAnswer+1) + '/' + countAnswer;
	currentAnswer = dataTasks[count]
    generateTask(currentAnswer); 
    // передаём первый вопрос 
	// далее после того как юзер ответил - опять определяю клик на кнопке другой только, 
	// снова вызываю generateTask после count++ 

    // как определить правильный ответ: 
	// после ответа юзера определяю клик и на том что он кликнул,узнаю чему равен
	// textContent - и сравниваю с currentAnswer.trueAnswer

}


function check(num) {
	if (num == 0) {
		for (let i = 0; i < options.length; i++) {
			options[i].style.display = 'block';
		}
		for (let i = 0; i < options.length; i++) {
			options[i].innerHTML = dataArray[currentAnswer][i];
		}

		document.getElementById('question').innerHTML = document.getElementById('question').innerHTML =
			dataArray[currentAnswer][0] + (currentAnswer + 1) + '/' + countAnswer;

		document.getElementById('start').style.display = 'none';

		let intervalID = setInterval(sec, 1000);
	} else {
		if (num == dataArray[currentAnswer][5]) {
			count++;
			document.getElementById('result').innerHTML = 'Верно!';
		} else {
			document.getElementById('result').innerHTML =
				'Неверно! Правильный ответ: ' + dataArray[currentAnswer][dataArray[currentAnswer][5]];
		}

		currentAnswer++;
		if (currentAnswer < countAnswer) {
			for (let i = 0; i < options.length; i++) {
				options[i].innerHTML = dataArray[currentAnswer][i];
			}
			document.getElementById('question').innerHTML =
				dataArray[currentAnswer][0] + (currentAnswer + 1) + '/' + countAnswer;
		} else {
			document.getElementById('time').id = 'stop';
			for (let i = 0; i < options.length; i++) {
				options[i].style.display = 'none';
			}
			document.getElementById('question').style.display = 'none';

			let percent = Math.round(count / countAnswer * 100);
			let rezult = 'Плохо!';
			if (percent > 70) rezult = 'Хорошо!';
			if (percent == 100) rezult = 'Отлично!';
			
			let resultStr = `Правильных ответов: ${count}  из  ${countAnswer} ( ${percent}%) ${rezult}`; //вывод ответа
			document.getElementById('result').innerHTML = resultStr;
		}
	}
}

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