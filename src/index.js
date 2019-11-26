import './css/styles.css'
import './css/styles.scss'

const inputText = document.getElementById('inpTxt')
const clickBtn = document.getElementById("btn")
const ulList = document.getElementById("list")

const todos = []

//ADICIONA UMA TODO PARA O ARRAY
function addTodo() {
  todos.push(inputText.value)
  inputText.value = '';
  renderTodos()
}

//RENDERIZA OS ELEMENTOS DO ARRAY, RECEBE A FUNÇÃO DE DELETAR OS ELEMENTOS
function renderTodos() {
  ulList.innerHTML = '';
  
  todos.forEach( todo => {
    let liElement = document.createElement('li')
    let liElementText = document.createTextNode(todo)
    liElement.classList.add('inner__list__element')
    
    let linkElement = document.createElement('a')
    let linkElementDelete = document.createTextNode('delete')
    
    linkElement.setAttribute('href','#')
    linkElement.classList.add('inner__list__element__delete')
    
    deleteTodo(liElement,linkElement)
    
    ulList.appendChild(liElement)
    liElement.appendChild(liElementText)
    liElement.appendChild(linkElement)
    linkElement.appendChild(linkElementDelete)
  })
}

//DELETA OS ELEMENTOS DO ARRAY
const deleteTodo = (lielement,linkelement) => {

  linkelement.addEventListener('click',(e) =>{
    e.preventDefault();
    lielement.remove();
  })
}

//OUVE O CLICK DO BOTAO E ASSOCIA O CLIQUE A FUNCAO DE ADICIONAR ELEMENTOS
clickBtn.addEventListener('click',(e) => {
  e.preventDefault()
  addTodo()
})


