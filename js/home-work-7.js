/** @format */

class CircleBox {
	constructor(selector) {
		this.$element = document.querySelector(selector);
	}
	hide() {}
	show() {}
}

class CircleItem extends CircleBox {
	constructor(options) {
		super(options.selector);
		this.$element.style.width = options.size + 'px';
		this.$element.style.height = options.size + 'px';
		this.$element.borderRadius = '50%';
		this.$element.style.background = options.color;
	}
}

const CircleRed = new CircleItem({
	selector: '#CircleRed',
});
