document.addEventListener("DOMContentLoaded", () => {
  // your code here
});


const form = document.getElementById('create-task-form');
const tasks = document.getElementById('tasks');



form.addEventListener('submit', function(e) {
  e.preventDefault()

  const newTask = document.getElementById('new-task-description').value;
  const taskInput = document.createElement('li')
  taskInput.innerText = `${newTask}`

  tasks.appendChild(taskInput)
  form.reset()
})