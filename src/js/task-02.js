// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
//после чего вставит все li за одну операцию в список ul.ingredients.
//Для создания DOM - узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// 1
const ingredientsListEl = document.createElement('ul');
ingredientsListEl.classList.add('ingredients');

const makeIngredientsList = (ingredients) => {
    return ingredients.map(ingredient => {
    const ingredientEl = document.createElement('li');
    ingredientEl.textContent =ingredient;
    return ingredientEl;
  });
  
};
ingredientsListEl.append(...makeIngredientsList(ingredients))
  
const mainLinkEl = document.querySelector('p');
mainLinkEl.after(ingredientsListEl);

// 2
// const makeIngredientsList = (ingredients) => {
//     const ingredientsListEl = document.createElement('ul');
//     ingredientsListEl.classList.add('ingredients');
    
//     ingredientsListEl.append(...ingredients.map(ingredient => {
//         const ingredientEl = document.createElement('li');
//         ingredientEl.textContent =ingredient;
//         return ingredientEl;
//     }));
//     const mainLinkEl = document.querySelector('p');
//     mainLinkEl.after(ingredientsListEl);
//     return ingredientsListEl;
// };
// makeIngredientsList(ingredients);
