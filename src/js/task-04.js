// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

// 1
let counterValue = 0;
const valueEl = document.querySelector('span#value')

const onIncrementBtnClick = () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
};

const onDecrementBtnClick = () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
};

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

decrementBtn.addEventListener('click', onDecrementBtnClick);
incrementBtn.addEventListener('click', onIncrementBtnClick);


// 2
// const counterValue = document.querySelector('span#value')

// const onIncrementBtnClick = () => counterValue.textContent = parseInt(counterValue.textContent) + 1;

// const onDecrementBtnClick = () => counterValue.textContent = parseInt(counterValue.textContent) - 1;

// const decrementBtn = document.querySelector('button[data-action="decrement"]');
// const incrementBtn = document.querySelector('button[data-action="increment"]');

// decrementBtn.addEventListener('click', onDecrementBtnClick);
// incrementBtn.addEventListener('click', onIncrementBtnClick);



