/* Задание 1
Создать переменные num1, num2 которые пользователь вводит с клавиатуры
Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3. */

let num1 = prompt('Введите первое число');
let num2 = prompt('Введите второе число');

console.log(`Введены числа ${num1}, ${num2}`);
console.log(num1 <= 1);
console.log(num2 >= 3);