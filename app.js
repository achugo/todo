
const search = document.querySelector('.search input');

const formAdd = document.querySelector('.add');
const list = document.querySelector('.todos')

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
        todoTemplate(insert);
        formAdd.reset()
    }
   
    
})

//delete todos
list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
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