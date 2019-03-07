function addTodo(event) {
  event.preventDefault()
  let list = document.querySelector('ul')
  
  let item = document.createElement('li')
  let text = document.getElementById('item').value
  item.innerText = text
  item.addEventListener('click', toggleTodo)

  let deleteButton = document.createElement('button')
  deleteButton.innerText = 'x'
  deleteButton.addEventListener('click', removeTodo)
  item.appendChild(deleteButton)
  
  list.appendChild(item)
  document.getElementById('item').value = 'hello'
}

function removeTodo(event) {
  event.target.parentNode.remove()
}

function toggleTodo(event) {
  if (event.target.nodeName === 'BUTTON') return;
  let value = event.target.getAttribute('aria-checked')
  if (value !== 'true') {
    event.target.setAttribute('aria-checked', 'true')
    document.getElementById('completed-message').style = 'visibility: visible;'
    setTimeout(() => {
      document.getElementById('completed-message').style = 'visibility: hidden;'
    }, 2000)
  } else {
    event.target.setAttribute('aria-checked', 'false')
  }
}

document
  .querySelector('button')
  .addEventListener('click', addTodo)