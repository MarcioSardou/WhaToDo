import './css/styles.css'
import './css/styles.scss'

const inputText = document.getElementById('inpTxt')
const clickBtn = document.getElementById("btn")
const ulList = document.getElementById("list")

const catchTodo = JSON.parse(localStorage.getItem('tarefas'))
console.log('tarefas',catchTodo);


const todos = catchTodo || [];

clickBtn.onclick = 
  function addTodo() {
    todos.push(inputText.value);
    inputText.value = '';
    renderTodos()
    setLocalStorage()
  }

function renderTodos() {
  ulList.innerHTML = '';

  for (const todo of todos) {
    
    let liElement = document.createElement('li')
    let liElementText = document.createTextNode(todo)
    liElement.classList.add('inner__list__element')

    let linkElement = document.createElement('a')
    let linkElementDelete = document.createTextNode('delete')

    linkElement.setAttribute('href','#')
    linkElement.classList.add('inner__list__element__delete')

    let pos = todos.indexOf(todo)
    
    linkElement.setAttribute('onclick','(deleteTodo(pos))')
    linkElement.onclick = function() {deleteTodo(pos)}

    ulList.appendChild(liElement)
    liElement.appendChild(liElementText)
    liElement.appendChild(linkElement)
    linkElement.appendChild(linkElementDelete)
  }
}
// renderTodos()

function setLocalStorage() {
  localStorage.setItem('tarefas',JSON.stringify(todos)) 
}

function deleteTodo(pos) {
  todos.splice(pos, 1)
  renderTodos();
  setLocalStorage()
}