/* Задание 1
Создайте функцию которая возводит переданное число в куб, необходимо 
вывести в консоль результат 2^3 степени + 3 ^ 3 степени */

// function calcCube(num) {
//     return num ** 3;
// }


const calcCube = num => num ** 3;


console.log(calcCube(2) + calcCube(3));
