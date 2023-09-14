/* Задание 3
Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
1. Рассчитать сумму элементов этого массива
2. Найти минимальное число
3. Найти есть ли в этом массиве число 3 */

const array = [];
for (let i = 0; i < 5; i++) {
  const randomNumber = Math.floor(Math.random() * 10);
  array.push(randomNumber);
}

const sum = array.reduce((total, num) => total + num, 0);
const min = Math.min(...array);
const hasNumberThree = array.includes(3);

console.log(array);
console.log(`Сумма элементов массива: ${sum}`);
console.log(`Минимальное число: ${min}`);
console.log(`Число 3 в массиве: ${hasNumberThree}`);
