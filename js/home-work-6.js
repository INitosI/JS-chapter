const Manager = function (name, sales) {
	this.name = name;
	this.sales = sales;
};

const ann = new Manager('Anna', 5);
const ivan = new Manager('Ivan', 15);

Manager.prototype.sale = function () {
	this.sales += 1;
}; //створює новий прототип за для економії пам'яті
//тепер екземпляри класу можуть не копіювати собі цей метод
// а просто посилатися на цей прототип

console.log(ann.sales);
ann.sale();
console.log(ann.sales);
