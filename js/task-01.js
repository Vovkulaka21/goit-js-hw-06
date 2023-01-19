const list = document.querySelectorAll('.item');
console.dir(list)
console.log('Number of categories:', list.length);

const listData = list.forEach(el => {
    console.log('Category:', el.firstElementChild.textContent);
    console.log('Elements:', el.lastElementChild.children.length);
});