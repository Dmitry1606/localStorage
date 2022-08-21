// 1) 
// Задать объект с полем name. 
// Задать переменную, которая будет хранить JSON упомянутого объекта. 
// Задать переменную, которая будет хранить результат парсинга предыдущей переменной.

let user = {
    name: 'Alex'
}

let letter = JSON.stringify(user);
console.log(letter)
let parse = JSON.parse(letter);
console.log(parse)

// 2)
// Создать переменную user, в которой хранится объект. 
// Записать переменную в localStorage. 
// Создать переменную newUser, в которой будет храниться JS объект из localStorage.

let student = {
    name: 'andrew'
}

localStorage.puple = JSON.stringify(student)
console.log(localStorage.puple)
let newUser = JSON.parse(localStorage.puple)
console.log(newUser)