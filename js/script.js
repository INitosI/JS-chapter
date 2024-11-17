function generateKeyWithCRC(input) {
	// Получаем текущую дату и время
	const now = new Date();
	const dateString =
		now.getFullYear().toString() +
		(now.getMonth() + 1).toString().padStart(2, '0') +
		now.getDate().toString().padStart(2, '0') +
		now.getHours().toString().padStart(2, '0') +
		now.getMinutes().toString().padStart(2, '0') +
		now.getSeconds().toString().padStart(2, '0');

	// Комбинируем входные данные с текущей датой/временем
	const combinedString = input + dateString;

	// Генерируем CRC32-хэш
	const hash = CRC32.str(combinedString).toString(16).toUpperCase();

	// Разбиваем хэш на блоки по 5 символов
	const blocks = [];
	for (let i = 0; i < 25; i += 5) {
		blocks.push(hash.substring(i, i + 5).toUpperCase());
	}

	// Формируем итоговый ключ
	return blocks.join('-');
}

// Пример использования
const input = 'game_specific_data'; // Введи данные из игры
const key = generateKeyWithCRC(input);
console.log(key); // Вывод ключа
