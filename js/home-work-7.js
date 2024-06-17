// Що таке:

// конструктори
// внутрішні методи
// прототипи
// ES6, ES9
// Якість коду

class Calculator {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	read() {
		this.x = prompt('Введите значение для x:');
		this.y = prompt('Введите значение для y:');
		console.log(this.x);
		console.log(this.y);
	}

	sum() {
		let sum = parseInt(this.x) + parseInt(this.y);
		console.log(sum);
	}

	mul() {
		let multiplication = this.x * this.y;
		console.log(multiplication);
	}
}

const calc = new Calculator(0, 0);

// class CircleBox {
// 	constructor(selector) {
// 		this.$element = document.querySelector(selector);
// 	}
// 	hide() {
// 		this.$element.style.display = 'none';
// 	}
// 	show() {
// 		this.$element.style.display = 'block';
// 	}
// }

// class CircleItem extends CircleBox {
// 	constructor(options) {
// 		super(options.selector);
// 		this.$element.style.width = options.size + 'px';
// 		this.$element.style.height = options.size + 'px';
// 		this.$element.style.borderRadius = '50%';
// 		this.$element.style.background = options.color;
// 	}
// }

// const CircleRed = new CircleItem({
// 	selector: '#CircleRed',
// 	color: 'red',
// 	size: 50,
// });

// const CircleGreen = new CircleItem({
// 	selector: '#CircleGreen',
// 	color: 'green',
// 	size: 50,
// });

// const CircleBlue = new CircleItem({
// 	selector: '#CircleBlue',
// 	color: 'blue',
// 	size: 50,
// });

// ==========================

// function Car(brand, color) {
// 	this.color = color;
// 	this.brand = brand;
// }

// Car.prototype.message = function () {
// 	console.log(`${this.brand} is ${this.color} color`);
// };

// const BMW = new Car('BMW', 'red');

// const BYD = new Car('BYD', 'emerald');

//=========================

// let message = {
// 	messageHello() {
// 		console.log(`Hello, ${this.name}`);
// 	},

// 	messageBye() {
// 		console.log(`Bye, ${this.name}`);
// 	},
// };

// class User {
// 	constructor(name) {
// 		this.name = name;
// 	}
// }

// Object.assign(User.prototype, message);

// new User('Іван').messageHello();

//=========================
