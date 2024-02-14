
console.log(document);

const inputRef = document.querySelector('input[name="number"]');
const buttonRef = document.querySelector('button');
buttonRef.addEventListener('click', () => {
	console.log(inputRef.value);
});
