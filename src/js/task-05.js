// Напиши скрипт который, при наборе текста в инпуте  (событие input),
// подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

/* <input type="text" placeholder="Ваше имя?" id="name-input" />
<h1>Привет, <span id="name-output">незнакомец</span>!</h1> */

const mainLinkEl = document.querySelector('p');
mainLinkEl.insertAdjacentHTML('afterend', '<input type="text" placeholder="Ваше имя?" id="name-input" /> <h1>Привет, <span id="name-output">незнакомец</span>!</h1>');

const inputEl = document.querySelector('input#name-input');
const greetingEl = document.querySelector('span#name-output');

const onNameInput = event => {
    if (event.currentTarget.value.length > 0) {
        greetingEl.textContent = event.currentTarget.value;
    } else {
        greetingEl.textContent = 'незнакомец';
    }
};
inputEl.addEventListener('input', onNameInput);