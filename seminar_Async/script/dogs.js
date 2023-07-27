const dogUrl = '';

const bodyEl = document.querySelector('.body');

const buttonEl = document.createElement('button');
buttonEl.classList.add('btn');
buttonEl.textContent = 'Остановить интервал';
bodyEl.appendChild(buttonEl);

const divEl = document.createElement('div');
divEl.classList.add('dog-list');
bodyEl.appendChild(divEl);

const fetchJSON = async (l) => {
  try {
    const response = await fetch('https://dog.ceo/api/breeds/image/random/10');
    const json =  await response.json()
    return json.message;
  } catch (error) {
    console.log('Ошибка из fetchJSON:', error.message);
  }
}

const renderJSON = (urlList) => {
  divEl.innerHTML='';
  urlList.forEach(item => {
    divEl.insertAdjacentHTML('beforeend', `
        <div class='dog-wrp'>
          <img class='dog-image' src='${item}' alt='any dog photo' height='300' />
        </div>
      `)
  })
}

const showDogs = async () => {
  const urlDogList = await fetchJSON();
  renderJSON(urlDogList);
}

const intervalId = setInterval(showDogs, 3000);

const btnEl = bodyEl.querySelector('.btn');
btnEl.addEventListener('click', () => {
  clearInterval(intervalId);
})


