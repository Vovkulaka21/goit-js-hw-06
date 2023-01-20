const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients')



const ingperEl = ingredients.map(ingredient => {
  
  const navItemEl = document.createElement('li');
  navItemEl.textContent = ingredient;
  navItemEl.classList.add('item');
  return navItemEl

})

ingredientsEl.append(...ingperEl);