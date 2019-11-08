import './css/styles.css'
import './css/styles.scss'

const inputText = document.getElementById('inpTxt')
const clickBtn = document.getElementById("btn")
const ulList = document.getElementById("list")

const todos = [] 

function addTodo() {
  todos.push(inputText.value)
  inputText.value = '';
  renderTodos()
}


function renderTodos() {
  ulList.innerHTML = '';
  
  todos.forEach( todo => {
    let liElement = document.createElement('li')
    let liElementText = document.createTextNode(todo)

    let linkElement = document.createElement('a')
    let linkElementDelete = document.createTextNode('delete')

    liElement.classList.add('inner__list__element')

    linkElement.setAttribute('href','#')
    
    linkElement.classList.add('inner__list__element__delete')
    
    ulList.appendChild(liElement)
    liElement.appendChild(liElementText)
    liElement.appendChild(linkElement)
    linkElement.appendChild(linkElementDelete)
  })
}




clickBtn.addEventListener('click',(e) => {
  e.preventDefault()
  addTodo()
})


