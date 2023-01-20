const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients')



const ingperEl = ingredients.map(el => {
  
  const navItemEl = document.createElement('li');
  navItemEl.textContent = el;
  navItemEl.classList.add('item');
  return navItemEl

})

ingredientsEl.append(...ingperEl);