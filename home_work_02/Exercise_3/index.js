/* Задание 3
В переменной day лежит какое-то число из интервала от 1 до 31. 
Определите в какую декаду месяца попадает это число (в первую, вторую или третью). */

let day = prompt('Введите число месяца');

if (day > 0 && day < 11) {
    alert('Первая декада месяца');
} else if (day > 10 && day < 21) {
    alert('Вторая декада месяца');
} else if (day > 20 && day < 32) {
    alert('Третья декада месяца');
} else {
    alert('Введите число от 1 до 31');
}
