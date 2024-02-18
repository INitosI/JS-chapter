const cart = {
	ShowItems() {
		console.log('У корзині ', this.type, ' розміру ', this.size);
	},
};

const woman = {
	type: ['Туфлі', 'Сукня'],
	size: 'XS',
};
const man = {
	type: ['Футболка', 'Кофта'],
	size: 'XL',
};
const kid = {
	type: ['Майка', 'Шорти'],
	size: 'M',
};

const WomRef = document.querySelector('#wom');
const ManRef = document.querySelector('#man');
const KidRef = document.querySelector('#kid');

WomRef.addEventListener('click', cart.ShowItems.bind(woman));
ManRef.addEventListener('click', cart.ShowItems.bind(man));
KidRef.addEventListener('click', cart.ShowItems.bind(kid));
