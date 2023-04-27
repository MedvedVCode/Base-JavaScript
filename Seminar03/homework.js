/* Задание 1 */
let num1 = Number(prompt(`Введите число num1:`));
let num2 = Number(prompt(`Введите число num2:`));

if (num1 <= 1) {
  console.log(`num1 = ${num1} меньше или равна 1`);
} else {
  console.log(`num1 = ${num1} больше 1`);
}

if (num2 >= 3) {
  console.log(`num2 = ${num2} больше или равна 3`);
} else {
  console.log(`num2 = ${num2} меньше 3`);
}

/* Задание 2 */
let test = true;
test === true ? console.log(`+++`) : console.log(`---`);

/* Задание 3 */
let day = Number(prompt(`Введите количество дней day в месяце`));
if (day >= 1 && day <= 10) {
  console.log(`day = ${day} - первая декада`);
} else if (day > 10 && day <= 20) {
  console.log(`day = ${day} - вторая декада`);
} else {
  console.log(`day = ${day} - третья декада`);
}

/* Задание 4 */
let number = Number(prompt(`Введите число number для определения разрядности`));
console.log(
  `В числе '${number}' ${number % 10} единиц, ${
    ~~(number / 10) % 10
  } десятков,  ${~~(number / 100) % 100} сотен`
);
