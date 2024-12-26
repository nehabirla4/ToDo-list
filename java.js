const taskInput = document.getElementById("task-input");
const taskForm = document.getElementById("task-form");
const taskList = document.getElementById("task-list");

taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskTitle = taskInput.value;
    console.log(taskTitle);
    if (taskTitle == "") {
        alert("Please Enter Task");
    } else {
        const listItem = document.createElement("li");
        listItem.innerHTML = taskTitle;
        taskList.append(listItem);
        let span = document.createElement("span");
        span.innerHTML = `&times;`;
        listItem.appendChild(span);
        taskInput.value = "";
        addEditButton(listItem); // Adding an edit button to the list item
        taskInput.value = "";
    } 
    
});

taskList.addEventListener("click",(e) =>{

    if (e.target.tagName == "SPAN") {
        const li = e.target.parentElement;
        li.remove();
    }
});

function addEditButton(listItem) {
    let editButton = document.createElement("button");
    editButton.innerHTML = "Edit";
    editButton.classList.add("edit-button");
    listItem.appendChild(editButton);

    editButton.addEventListener("click", (e) => {
        const taskTitle = listItem.firstChild.textContent;
        taskInput.value = taskTitle; 
        listItem.remove(); 

      //done and submit
        taskForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const updatedTaskTitle = taskInput.value;
            if (updatedTaskTitle == "") {
                alert("Please Enter Task");
            } else {
                const updatedListItem = document.createElement("li");
                updatedListItem.textContent = updatedTaskTitle;
                taskList.appendChild(updatedListItem);
                let span = document.createElement("span");
                span.innerHTML = `&times;`;
                updatedListItem.appendChild(span);
                addEditButton(updatedListItem); // Add an edit button to the updated list item
                taskInput.value = "";
            }
        });
    });
}