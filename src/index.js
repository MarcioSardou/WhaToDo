import './css/styles.css'
import './css/styles.scss'

const inputText = document.getElementById('inpTxt')
const clickBtn = document.getElementById("btn")
const ulList = document.getElementById("list")

console.log(clickBtn);

const todos = [] 

function renderTodos() {
   ulList.innerHTML = '';

   todos.forEach( todo => {
      let liElement = document.createElement('li')
      liElement.classList.add('inner__list__element')
      let inputTextValue = document.createTextNode(todo)
      
      liElement.appendChild(inputTextValue)
      ulList.appendChild(liElement)
   })
}

function getInputText() {
  todos.push(inputText.value)
  inputText.value = '';
  renderTodos()
}

clickBtn.addEventListener('click',(e) => {
  e.preventDefault()
  getInputText()
})


