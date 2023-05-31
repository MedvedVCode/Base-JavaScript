task = (num) => console.log(`\n*** Задание ${num} ***`);

task(1);
/* 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов. */
const dropdownItemEl = document.querySelectorAll('.dropdown-item');
dropdownItemEl.forEach(item =>
  item.classList.add('super-dropdown'));

task(2);
/* 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было. */
const btnClassEl = document.querySelector('.btn');
btnClassEl.classList.toggle('btn-secondary');

task(3);
/* 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu". */
const menuEl = document.querySelector('.menu');
menuEl.classList.remove('dropdown-menu');

task(4);
/* 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
`<a href="#">link</a>` */
const divDropdownEl = document.querySelector('div[class="dropdown"]');
console.log(divDropdownEl);
divDropdownEl.insertAdjacentHTML('afterbegin', '<a href="#">link</a>');

task(5);
/* 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown". */
const ddMenuBtnEl = document.querySelector('#dropdownMenuButton');
ddMenuBtnEl.id = 'superDropdown';

task(6);
/* 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset. */
const ariaLabelledbyEl = document.querySelector('[aria-labelledby="dropdownMenuButton"]');
console.log(ariaLabelledbyEl);
ariaLabelledbyEl.setAttribute('data-dd', '2');
let ddData = ariaLabelledbyEl.dataset.dd;
console.log(ddData);
ddData = 3;
ariaLabelledbyEl.dataset.dd = 3;

task(7);
/* 7. Удалите атрибут type у элемента с классом "dropdown-toggle". */
const ddTogleEl = document.querySelector('.dropdown-toggle');
ddTogleEl.removeAttribute('type');
console.log(ddTogleEl);
