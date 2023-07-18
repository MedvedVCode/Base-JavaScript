const task = (num) => {
  console.log(`\n\n------Task ${num}------`);
}

task(1);
class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
  displayInfo() {
    console.log(`Информация о книге: ${this.title}, ${this.author}, ${this.pages}`);
  }
}

const book = new Book('Старик и море', 'Э. Хемингуэй', 100);
book.displayInfo();

task(2);
class Student {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
  displayInfo() {
    console.log(`Name: ${this.name},\nAge: ${this.age} лет,\nGrade: ${this.grade}`);
  }
}

const student = new Student('Иван Петров', 18, '11 класс');
student.displayInfo();

task(3);
class Client {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.accounts = [];
  }
  addAccount = (account) => this.accounts.push(account);
}

class Bank {
  constructor(bankName) {
    this.bankName = bankName;
    this.accounts = [];
    this.clients = [];
  }

  addClient = client => this.clients.includes(client) ? this.clients : this.clients.push(client);
  showAllClients = () => console.log(this.clients);
  showAllAccounts = () => console.log(this.accounts);
  openAccount = (client, amount) => {
    this.addClient(client);
    const account = `${Math.floor(Math.random() * 10000)}`;
    client.addAccount(account);
    this.accounts.push({ account: account, balance: amount });
    return account;
  }
  getAccount = account => this.accounts.find(value => account == value.account);
  checkBalance = account => console.log(this.getAccount(account).balance);
  deposit = (account, amount) => {
    console.log(`Deposited ${amount} into account ${account}. New balance ${this.getAccount(account).balance += amount}`);
  }
  withdraw = (account, amount) => {
    const fullAccount = this.getAccount(account);
    if (fullAccount.balance - amount >= 0) {
      console.log(`Withdrawn ${amount} from account ${account}. New balance: ${fullAccount.balance -= amount}`);
    }
    else {
      console.log(`Insufficient funds in account ${account}`);
    }
  }
}

const bank = new Bank('Злой банк');

const client1 = new Client('Максим', 49);
const client2 = new Client('Маша', 46);

bank.addClient(client1);
bank.addClient(client2);
const account1 = bank.openAccount(client1, 1000);
const account2 = bank.openAccount(client2, 2000);
const account2_1 = bank.openAccount(client2, 1000);
bank.showAllClients();
bank.showAllAccounts();
bank.checkBalance(account1);
bank.checkBalance(account2);
bank.deposit(account1, 500);
bank.deposit(account2, 200);
bank.showAllAccounts();
bank.withdraw(account2, 3000);
bank.withdraw(account2_1, 1000);
bank.checkBalance(account2);
bank.checkBalance(account2_1);