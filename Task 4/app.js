const inputBox=document.getElementById('input-box')
const listContainer=document.getElementById('Task-list')
function addTask(){
    if(inputBox.value===''){
        alert('You must write a task')
    }
    else{
        // let li =document.createElement('li');
        // li.innerHTML=inputBox.value
        // listContainer.appendChild(li);
        // let span=document.createElement('span')
        // span.innerHTML="\u00d7";
        // li.appendChild(span)
        // span.addEventListener('click', function () {
        //     li.remove();
        // });
        let li = document.createElement('li');
        let taskText = document.createElement('span');
        taskText.textContent = inputBox.value;
        

        let editBtn = document.createElement('button');
        editBtn.innerHTML = "✏️"; 
        editBtn.classList.add('edit-btn');

        let completeBtn = document.createElement('button');
        completeBtn.innerHTML = "✅"; 
        completeBtn.classList.add('complete-btn');

        let deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = "\u00d7"; 
        deleteBtn.classList.add('delete-btn');
    
        li.appendChild(taskText)
        li.appendChild(completeBtn)
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        listContainer.appendChild(li);

        editBtn.addEventListener('click', function () {
            editTask(taskText);
        });

        deleteBtn.addEventListener('click', function () {
            li.remove();
        });

        completeBtn.addEventListener('click',function(){
            taskText.classList.toggle('completed');
        })
    }
inputBox.value='';
}



function editTask(taskText) {
    let newText = prompt("Edit your task:", taskText.textContent);
    if (newText !== null && newText.trim() !== "") {
        taskText.textContent = newText;
    }
}