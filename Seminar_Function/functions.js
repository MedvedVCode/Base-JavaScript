/* Задание 1 */
calcPowerThree = (x) => x ** 3;
console.log(`2^3 + 3^3 = ${calcPowerThree(2) + calcPowerThree(3)}`);

/* Задание 2 */
function calcSalary(x) {
  console.log(`Размер заработной платы за вычетом налогов равен ${x * 0.87}`);
}

let salary = Number(prompt("Введите размер зарплаты"));
while (isNaN(salary)) {
  alert("Введено не число (((");
  salary = Number(prompt("Введите размер зарплаты"));
}

calcSalary(salary);

/* Задание 3 */
findMaxOfThree = (a, b, c) => {
  let max = a;
  if (max < b) {
    max = b;
  }
  if (max < c) {
    max = c;
  }
  return max;
};

let numA = Number(prompt("Введите первое число"));
let numB = Number(prompt("Введите второе число"));
let numC = Number(prompt("Введите третье число"));

console.log(`Максимальное число = ${findMaxOfThree(numA, numB, numC)}`);

/* Задание 4 */
sum = (x,y) => x+y;
diff = (x,y) => x>y?x-y:y-x;
mult = (x,y) => x*y;
div = (x,y) => x/y;

console.log(sum(3,7));
console.log(diff(2,8));
console.log(mult(1,10));
console.log(div(2,9));