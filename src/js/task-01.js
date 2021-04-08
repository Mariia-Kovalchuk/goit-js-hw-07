const categoriesEl = document.querySelector('ul#categories');
console.log(`В списке ${categoriesEl.children.length} категории.`);


const categoryRef = document.querySelectorAll('.item');
const categoriesCharacteristics = [...categoryRef].map(category => `Категория: ${category.firstElementChild.textContent}, Количество элементов: ${category.lastElementChild.children.length}`
);
console.log(categoriesCharacteristics[0]);
console.log(categoriesCharacteristics[1]);
console.log(categoriesCharacteristics[2]);
