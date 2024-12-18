// script.js
document.addEventListener("DOMContentLoaded", () => {
    const todoInput = document.getElementById("todo-input");
    const addBtn = document.getElementById("add-btn");
    const todoList = document.getElementById("todo-list");
  
    // Function to add a task
    addBtn.addEventListener("click", () => {
      const task = todoInput.value.trim();
      if (task) {
        const li = document.createElement("li");
        li.classList.add("todo-item");
  
        li.innerHTML = `
          <span>${task}</span>
          <button class="delete-btn">Delete</button>
        `;
  
        // Mark task as complete
        li.querySelector("span").addEventListener("click", () => {
          li.querySelector("span").classList.toggle("complete");
        });
  
        // Delete task
        li.querySelector(".delete-btn").addEventListener("click", () => {
          todoList.removeChild(li);
        });
  
        todoList.appendChild(li);
        todoInput.value = "";
      } else {
        alert("Please enter a task!");
      }
    });
  });
  