// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

//<div id="controls">
//  <input type="number" min="0" max="100" step="1" />
//  <button type="button" data-action="render">Создать</button>
//  <button type="button" data-action="destroy">Очистить</button>
//</div>
//
//<div id="boxes"></div>
//

const mainLinkEl = document.querySelector('p');
mainLinkEl.insertAdjacentHTML('afterend', '<div id="controls"> <input type="number" min="0" max="100" step="1" /> <button type="button" data-action="render">Создать</button>  <button type="button" data-action="destroy">Очистить</button> </div> <div id="boxes"></div> ');
const divBoxes = document.querySelector('div#boxes');
const inputNuberEl = document.querySelector('input');
const renderBtn = document.querySelector('button[data-action="render"]');
const destroyBtn = document.querySelector('button[data-action="destroy"]');

let amount;

const onNuberInput = (event) => {
    amount = parseInt(event.currentTarget.value);
    return amount;
};

const createBoxes = (amount) => {
    const boxArray = [];
    let primarySize = 30;
    const randomRgb = () => {
        const rgbNum = () => Math.floor(Math.random() * 256);
        const r = rgbNum();
        const g = rgbNum();
        const b = rgbNum();
        return `rgb(${r},${g},${b})`;
    };

    for (let i = 0; i < amount; i+=1) {
        const boxEl = document.createElement('div');

        boxEl.style.width = `${primarySize}px`;
        boxEl.style.height = `${primarySize}px`;
        primarySize += 10;
        boxEl.style.backgroundColor = randomRgb();

        boxArray.push(boxEl)
    }

    return divBoxes.append(...boxArray);
};

const onRenderBtnClick = (event) => {
    createBoxes(amount);
};

const onDestroyBtnClick = () => {
    divBoxes.innerHTML = ' ';
    inputNuberEl.value = '';
};

inputNuberEl.addEventListener('input', onNuberInput);
renderBtn.addEventListener('click', onRenderBtnClick);
destroyBtn.addEventListener('click', onDestroyBtnClick);


