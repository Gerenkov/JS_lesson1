// Задание 1
/* let result = prompt('Введите значение', '')
if (result === null) {
	alert('Вы отказались от ввода')
} else if (isNaN(result % 2)) {
	alert('Упс, кажется вы ошиблись')
} else if (result % 2 === 0) {
	alert('Число четное')
} else {
	alert('число нечетное')
} */

// Задание 2
/* let x;
if (typeof x === 'number') {
	console.log('число')
} else if (typeof x === 'string') {
	console.log('строка')
} else if (typeof x === 'boolean') {
	console.log('логический тип')
} else if (typeof x === 'undefined') {
	console.log('Тип x не определён')
} */


// 10.4. Строки, числа
// let string = "My name Vitalii";
// let result;
// let substr;

// if (string.includes("Vitalii")) {
// 	result = string.toLocaleUpperCase() /* в верхний регистр */
// 	substr = string.slice(0, 4) /* возвращает часть строки от 0 до 4(не включая) */
// } else {
// 	result = string.toLocaleLowerCase() /* в нижний регистр */
// }
// console.log(result);
// console.log(substr);

// Задание 3
// Необходимо вывести в консоль перевёрнутый вариант.
function reverseString(str) {
	return console.log(str.split("").reverse().join(""));
}
reverseString("Vitalii");

// Задание 4
// аписать в переменную случайное целое число в диапазоне [0; 100]. Используйте объект Math.
console.log(Math.floor(Math.random() * 100) + 1);