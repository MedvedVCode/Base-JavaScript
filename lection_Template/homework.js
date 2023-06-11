const contentEl = document.querySelector('.content');

const data = JSON.parse(dataInfo);
console.log(data);
let count = 0;
data.forEach(item => {
  const articleEl = document.createElement('article');
  articleEl.classList.add('card');
  contentEl.append(articleEl);

  const imgEl = document.createElement('img');
  imgEl.alt = item.alt;
  imgEl.src = item.url;
  imgEl.height = '300'

  articleEl.append(imgEl);

  const titleEl = document.createElement('h2');
  titleEl.textContent = item.title + ' ' + ++count;

  articleEl.append(titleEl);

  const factEl = document.createElement('p');
  factEl.textContent = item.fact;

  articleEl.append(factEl);
});