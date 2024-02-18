const message = function (name) {
	console.log(`Hello, dear ${name}`);
	console.log(`Welcome to ${this.hotel}. ${this.stars} stars hotel.`);
};

const Bukovel = {
	hotel: 'Bukovel',
	stars: 5,
};
const Dnypro = {
	hotel: 'Dnypro',
	stars: 3,
};
const Vivien = {
	hotel: 'Vivien',
	stars: 2,
};

message.call(Bukovel, 'Ivan');
message.call(Dnypro, 'Anna');
message.call(Vivien, 'Danylo');
