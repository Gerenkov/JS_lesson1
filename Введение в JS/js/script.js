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
/* function reverseString(str) {
	return str.split("").reverse().join("");
}
reverseString("Vitalii"); */

// Задание 4
// аписать в переменную случайное целое число в диапазоне [0; 100]. Используйте объект Math.
// console.log(Math.floor(Math.random() * 100) + 1);

// Задание 5
/* Дан произвольный массив.
Необходимо вывести количество элементов массива, затем перебрать его и вывести в консоль каждый элемент массива. */
/* const random = [10, 'JavaScript', true];
console.log(random.length);

for (let el = 0; el < random.length; el++) {
	console.log(random[el]);
} */

// Задание 6
// Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль.
/* function checkArrayType(arr) {
	let arr1 = arr.map(e => typeof e);
	return [...new Set(arr1)].length === 1;
}

function checkArrayType1(arr) {
	return arr.every((e, i, a) => typeof e === typeof a[0]);
}

console.log(checkArrayType([3, 6, 7, null]));
console.log(checkArrayType1([3, 6, 7, 3])); */

// Задание 7
// Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.
/* let arr = [1, 6, null, 8, undefined, 0];
let zerocount = 0;
let numbercount = 0;
let evencount = 0;
let oddcount = 0;
for (let i = 0; i < arr.length; i++) {
	if (typeof arr[i] === "number" || !isNaN(arr[i])) {
		numbercount += 1;
		if (arr[i] === 0) {
			zerocount += 1;
		} else if (arr[i] % 2 === 0) {
			evencount += 1;
		} else {
			oddcount += 1;
		}
	}
}
console.log(`В массиве: ${numbercount} цифр, ${zerocount} нулей, ${evencount} чётных, ${oddcount} нечётных!`); */

// Задание 8
// Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
/* let cars = new Map([
	["Mazda", "blak"],
	["Volvo", "red"],
	["Ford", "silver"]
]);
cars.forEach((value, key) => {
	console.log(`ключ ${key}, значение ${value}`);
}); */