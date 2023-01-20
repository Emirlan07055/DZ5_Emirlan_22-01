const input = document.querySelector('#input')
const createButton = document.querySelector('#create_todo')
const todoList = document.querySelector('#todo_list')


const createTodo = () => {
    if (input.value.trim() === '') {
        input.value = ''
        return false
    } else {
        const div = document.createElement('div')
        const text = document.createElement('p')
        const actions = document.createElement('div')
        const edit = document.createElement('button')
        const del = document.createElement('button')

        del.textContent = 'delete'
        edit.textContent ='edit'


        edit.addEventListener('click',()=>{
            let s = prompt(changeToDo ${text.innerText})
            if (s.trim()=== ''){
                return false
            } else {
                text.innerText = s
            }
        })
        del.onclick = ()=> div.remove()
        del.setAttribute('class','delete')
        edit.setAttribute('class','ed')
        div.setAttribute('class', 'block_text')
        text.setAttribute('class', 'text')


        text.innerText = input.value
        actions.setAttribute('class','buttons')
        actions.append(edit,del,favorite)

        div.append(text,actions)
        todoList.prepend(div)


    }
    input.value = ''
}
createButton.addEventListener('click', createTodo)
input.addEventListener('keydown', event => event.code === 'Enter' ? createTodo() : false)