document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault()
    addToDos(e.target.new_task_description.value)
    
  })
});

function addToDos(toDo){
  
  let p = document.createElement("p")
  let btn = document.createElement("button")
  btn.textContent = " x "
  p.textContent = `${toDo}  `
  p.appendChild(btn)
  console.log(p)
  document.querySelector('#tasks').appendChild(p)
}

