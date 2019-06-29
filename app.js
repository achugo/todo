
const search = document.querySelector('.search input');

const formAdd = document.querySelector('.add');
const list = document.querySelector('.todos');

let todoArray = localStorage.getItem('todos').split(',')

const todoTemplate = todo => {
    
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="fa fa-trash-alt delete"></i>
    </li>
    `
    list.innerHTML += html;
}


formAdd.addEventListener('submit', (e) => {
    e.preventDefault();

    const insert = formAdd.add.value.trim()
    if (insert.length) {
        todoArray.push(insert)
        localStorage.setItem('todos', todoArray)
        todoTemplate(insert);
        formAdd.reset()
    }
   
    
})

//delete todos
list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        let item = e.target.parentElement.textContent.trim()
        todoArray = todoArray.filter((todo) => {
            return todo !== item
        })
        // console.log(filterStorage)
        localStorage.setItem('todos', todoArray)
        e.target.parentElement.remove()
        
    }
})

const filterTodos = (term) => {
    Array.from(list.children)
        .filter((todo) =>  !todo.textContent.toLocaleLowerCase.includes(term))
        .forEach((todo) => todo.classList.add('filtered'));

        Array.from(list.children)
        .filter((todo) =>  todo.textContent.toLowerCase.includes(term))
        .forEach((todo) => todo.classList.remove('filtered'))
}
//search todo keypupevent
search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase()
    filterTodos(term)
})

//update todo with local storage

//check if todo list exist in local storage
//loop through array of todos
//update ui for each one 



if(localStorage.getItem('todos')){
    let storedTodos = localStorage.getItem('todos').split(',')
    Array.from(storedTodos).forEach(element => {
            console.log(element)
            const html = `
            <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${element}</span>
            <i class="fa fa-trash-alt delete"></i>
            </li>
            `
            list.innerHTML += html;
        
    });
}