let ul = document.querySelector('ul');
let input = document.querySelector('input');
let button = document.querySelector('button');
let form = document.querySelector('form');

let massiv = [];
if (localStorage.massiv) {
    massiv = JSON.parse(localStorage.massiv);
}

for (let task of massiv) {
    let li = document.createElement('li');
    li.innerText = task;
    let ul = document.querySelector('ul');
    ul.appendChild(li);
}

form.addEventListener('submit', function (event) {
    event.preventDefault();

    massiv.push(input.value);
    localStorage.massiv = JSON.stringify(massiv);

    let li = document.createElement('li');
    li.innerText = input.value;
    let checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox');
    li.appendChild(checkbox);
    ul.appendChild(li);
    input.value = ''
    let listItems = document.querySelectorAll('li');
    for (let i = 0; i < listItems.length; i++) {
        console.log(listItems[i])
        listItems[i].addEventListener('click', function (event) {
            if (checkbox.checked) {
                li.style.textDecoration = 'line-through';
            } else {
                li.style.textDecoration = 'none';
            }
        })
    }
})