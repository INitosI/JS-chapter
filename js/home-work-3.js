//  -- 1 --
// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.

// const fruts = [
//   { id: 0, name: "Apple" },
//   { id: 1, name: "Tomat" },
//   { id: 2, name: "Cherry" },
//   { id: 3, name: "Orange" },
// ];

// let FrutsName = [];
// for (i = 0; i < fruts.length; i++) {
// 	FrutsName[i] = fruts[i].name;
// }
// console.log(FrutsName);

//  -- 2 --
//Виведіть парні числа від 2 до 10, використовуючи цикл for.\

// for (let i = 2; i <= 10; i++) {
// 	if (i % 2 !== 0) continue;
// 	console.log(i);
// }

//  -- 3 --
//Замініть цикл "for" на "while"
// for (let i = 0; i < 5; i++) {
// 	console.log(`цифра ${i}!`);
// }
// let i = 0;
// while (i < 5) {
// 	console.log(`цифра ${i}!`);
// 	i++;
// }

//  -- 4 --
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.

// let a = 0;

// while (true) {
// 	a = prompt('Введіть число більше 100!');
// 	if (a === null || a === '') break;
// 	if (a > 100) break;
// }

//  -- 5 --
// Вирахуйте середній вік

// const girls = [
// 	{ age: 23, name: 'Оля' },
// 	{ age: 29, name: 'Аня' },
// 	{ age: 10, name: 'Юля' },
// 	{ age: 20, name: 'Катя' },
// ];

// let age = [];
// for (i = 0; i < girls.length; i++) {
// 	age[i] = girls[i].age;
// }

// let MiddleAge = age.reduce((age, res) => age + res) / age.length;

// console.log(MiddleAge);
