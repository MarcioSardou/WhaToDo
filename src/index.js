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
     let inputTextValue = document.createTextNode(todo)
     liElement.classList.add('inner__list__element')
     
     let liElementDelete = document.createElement('a')
     let liElementDeleteText = document.createTextNode('x')
     liElementDelete.setAttribute('href','#')
     liElementDelete.classList.add('inner__list__element__delete')
     
     liElement.appendChild(inputTextValue)
     liElement.appendChild(liElementDelete)
     liElementDelete.appendChild(liElementDeleteText)
     ulList.appendChild(liElement)
    })
  }
  
  async function apagaTodo(){
    const Xdelete = await document.getElementsByClassName("inner__list__element__delete");
      Xdelete[0].addEventListener('click', (e) => {
      e.preventDefault();
      console.log("apaguei");    
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
  apagaTodo()
})


