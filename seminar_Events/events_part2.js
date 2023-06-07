/* 1 */
/* При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться. */
const inputFromEl = document.querySelector('#from');
const spanFromEl = document.querySelector('input + span');

inputFromEl.addEventListener('input', (e) => {
  spanFromEl.textContent = e.target.value;
});


/* 2 */
/* При клике на кнопку с классом messageBtn необходимо элементу с классом message:
- добавить два класса: animate_animated и animate_fadeInLeftBig
- поставить данному элементу стиль visibility в значение 'visible'. */
const messageBtnEl = document.querySelector('.messageBtn');
const messageEl = document.querySelector('.message');

messageBtnEl.addEventListener('click', e => {
  messageEl.classList.add('animate_animated', 'animate_fadeInLeftBig');
  messageEl.style.visibility = 'visible';
});

/* 3 */
/* Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
- Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
- Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать. */
const formEl = document.querySelector('.form');
const inputEl = formEl.querySelectorAll('.form-control');
const headerEl = document.querySelector('head');

headerEl.insertAdjacentHTML('beforeend', '<style>.error{background-color: red;}</style>');

formEl.addEventListener('submit', e => {
  inputEl.forEach(item => {
    if (item.value === '') {
      e.preventDefault();
      item.classList.add('error');
      // item.style.backgroundColor = 'red';
    }
  })
});

formEl.addEventListener('input', e => {
  if (e.target.value !== '') {
    e.target.classList.remove('error');
    // e.target.style.removeProperty('background-color');
  } else {
    e.target.classList.add('error');
    // e.target.style.backgroundColor = 'red';
  }
})
