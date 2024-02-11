//***1***
// Робота зі змінними
// Оголосіть дві змінні: name та city.
// Присвойте значення "Іван" змінній name.
// Скопіюйте значення зі змінної name в city.
// Виведіть значення змінної city, використовуючи функцію console.log (яка повинна показати “Іван”).

// let name = 'Іван';
// let city = name;
// console.log(city);

//***2***
//Який буде результат виконання скрипта?
// let name = 'Olga';
// console.log(`привіт ${1}`); // привіт 1
// console.log(`привіт ${'name'}`); // привіт name
// console.log(`привіт ${name}`); // привіт Olga

//***3***
//Видобути число зі змінних
// let a = "5";
// let b = "13cvb";
// let c = "12.9sxdcfgv";
// вивести в консоль тип

// let a = Number.parseFloat('5');
// console.log(a);
// let b = Number.parseFloat('13cvb');
// console.log(b);
// let c = Number.parseFloat('12.9sxdcfgv');
// console.log(c);

// console.log(typeof a, typeof b, typeof c);

//***4***
//Зробіть, щоб 0.1 + 0.2 = 0.3

// let a = (0.1 * 10 + 0.2 * 10) / 10;
// console.log(a); //3

//***5**
//Поверніть найбільше число с набору 20, 10, 50, 40

// console.log(Math.max(20, 10, 50, 40));

//***6**
//Поверніть випадкове число в діапазоні від 2 до 4

// console.log(Math.random() + Math.random() + 2);

//***7**
//дізнатись довжину message
// const message = "Welcome to Bahamas!";

// const message = 'Welcome to Bahamas!';
// console.log(message.length); //19

//***8**
//вивести в консоль message  великими літерами
// const message = 'Welcome to Bahamas!';
// console.log(message.toUpperCase());

// //***9**
// // створити пустий об*єкт
// let obj = new Object();
// // додати туди ім*я, вік і місто
// obj.name = 'Ihor';
// obj.age = 20;
// obj.city = 'Dnypro';
// // вивести результат в консоль
// console.log(obj);
// // видалити місто
// delete obj.city;
// console.log(obj);
// // додати буль з ключем: like flowers
// obj['like flovers'] = true;
// // вивести результат в консоль
// console.log(obj);

// //***10**
// // За допомогою циклу  “for…in” вивести в консоль ключі і значення об*єкта
// for (let key in obj) {
// 	console.log(key);
// 	console.log(obj[key]);
// }
