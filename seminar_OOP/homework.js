const task = (num) => {
  console.log(`\n\n------Task ${num}------`);
}

task(1);
class Employee {
  constructor(name) {
    this.name = name;
  }
  displayInfo() {
    console.log('Name:', this.name, '\n');
  }
}

const empJohn = new Employee('John Rien');
empJohn.displayInfo();

class Manager extends Employee {
  constructor(name, department) {
    super(name);
    this.department = department;
  }
  displayInfo() {
    console.log('Name:', this.name, '\n', 'Department:', this.department, '\n');
  }
}

const manPeter = new Manager('Peter Ortega', 'Sales');
manPeter.displayInfo();


task(2);
class Order {
  constructor(orderNumber) {
    this.orderNumber = orderNumber;
    this.products = [];
  }
  addProduct(product) {
    this.products.push(product);
  }
  getTotalPrice() {
    return this.products.reduce((total, item) => total += item.getPrice(), 0);
  }
}

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  getPrice() {
    return this.price;
  }
}

const product1 = new Product('Mobile', 500);
const product2 = new Product('Phones', 100);
const product3 = new Product('Powerbank', 200);
const order = new Order(1234);

order.addProduct(product1);
order.addProduct(product2);
order.addProduct(product3);
console.log(order.getTotalPrice());

task(3);
class Student {
  #name = '';
  #age = 0;
  #averageGrade = 0;
  get name() {
    return this.#name;
  }
  set name(name) {
    this.#name = name;
  }
  get age() {
    return this.#age;
  }
  set age(age) {
    this.#age = age;
  }
  get averageGrade() {
    return this.#averageGrade;
  }
  set averageGrade(averageGrade) {
    this.#averageGrade = averageGrade;
  }
  displayInfo() {
    console.log(this.#name, this.#age, this.#averageGrade);
  }
}

const student = new Student();
student.name = 'Vasya Ivanov';
student.age = 20;
student.averageGrade = 121;
console.log(student.name);
student.displayInfo();
