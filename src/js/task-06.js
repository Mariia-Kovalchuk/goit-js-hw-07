// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

/* <input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Введи 6 символов"
/> */
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.


const mainLinkEl = document.querySelector('p');
mainLinkEl.insertAdjacentHTML('afterend', '<input type="text" id="validation-input" data-length="6" placeholder="Введи 6 символов" />');

const inputEl = document.querySelector('input');



const onInputBlur = event => {
    if (event.currentTarget.value.length == event.currentTarget.dataset.length) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    };
};

inputEl.addEventListener('blur', onInputBlur);