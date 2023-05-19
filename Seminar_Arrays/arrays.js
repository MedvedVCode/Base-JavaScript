/* Задание 1 */
let num = 11;
for (let i = 0; i < num; i++) {
  if (i === 0) {
    str = ' - это ноль';
  } else if (i % 2 === 0) {
    str = ' - это четное число';
  } else {
    str = ' - это нечетное число';
  }
  console.log(i + str);
}

/* Задание 2 */
const delPos = 3;
const delAmount = 2;
let arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(delPos, delAmount);
console.log(arr);

/* Задание 3 */
const arrLength = 5;
const fillValue = 10;
arr = new Array(arrLength).fill(fillValue).map(() => Math.floor(Math.random() * 10));
console.log(arr);
console.log(`Сумма = ${arr.reduce((sum, value) => sum + value)}`);
console.log(
  `Минимальное число = ${arr.reduce(
    (min, value) => min > value ? min = value : min, arr[0]
  )}`);
console.log(`Позиция числа 3 в массиве: ${arr.findIndex(value => value === 3)}`);

/* Задание 4 */
num = 20;
for (let i = 1; i <= num; i++) {
  console.log('x'.repeat(i));  
}
