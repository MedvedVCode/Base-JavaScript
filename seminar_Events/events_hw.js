task = (num) => console.log(`\n*** Задание ${num} ***`);

/* 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером. */
task(1);
document.addEventListener('DOMContentLoaded', () =>
  console.log('Все теги прогрузились!!!')
);

/* 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены. */
task(2);
window.addEventListener('load', () =>
  console.log('Страница прогрузилась!!!!!!')
);

/* 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
- Класс "super_element" присутствует в элементе "div".
- сообщение должно определять присутствует или отсутствует класс "super_element" у элемента, а также выводить в нижнем регистре верный тег в данной строке, по которому был совершен клик.
- Необходимо использовать делегирование. */
task(3);
document.addEventListener('click', e => {
  if (e.target.className === 'super_element') {
    console.log('Класс "super_element" присутствует в элементе " %s"', e.target.tagName.toLowerCase());
  } else {
    console.log('Класс "super_element" не найден в теге " %s"', e.target.tagName.toLowerCase());
  }
});

/* 4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea." */
task(4);
const textAreaEl = document.querySelector('textarea');
textAreaEl.addEventListener('mouseover', () =>
  console.log('Вы навели на textarea'));

/* 5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование. */
task(5);
const ulEl = document.querySelector('ul');
ulEl.addEventListener('click', e => {
  if (e.target.tagName.toLowerCase() === 'button') {
    console.log(e.target.textContent);
  }
});

/* 6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами. */
task(6);
/* !!! document всегда ждет пока прогрузится страница, а значит выполнятся все скрипты и построится дерево объектов. Скрипты могут менять это дерево. И поэтому вывод информации от document всегда идет после остальных элементов. */

/* 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li. */
// ulEl.addEventListener('click', e => {
//   // console.log(e.target.children);
//   console.log(e.target);
// });
task(7);
const liListEl = [...ulEl.children];
console.log(liListEl);
liListEl
  .forEach((value, index) => index % 2 ? value.style.backgroundColor = 'tomato' : value);
