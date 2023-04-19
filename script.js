var openModalBtn=document.querySelector(".add-task-btn");
var getModal=document.querySelector('.modal');
var closeBtn=document.querySelector('.close');
var addTaskBtn=document.querySelector('#add-task-btn');
// const addTaskForm = document.getElementById("add-task-form");




openModalBtn.addEventListener("click",()=>{
    getModal.style.display="block";
});

closeBtn.addEventListener('click',()=>{
    getModal.style.display='none';
});

addTaskBtn.addEventListener('click',()=>{
    event.preventDefault();
    var taskName=document.getElementById('task-name').value;
    var priority=document.getElementById('priority').value;
    var dueDate=document.getElementById('due-date').value;
    var status=document.getElementById('status').value;

    addTask(taskName, priority, dueDate, status);
});

function addTask(taskName, priority, dueDate, status){
    console.log(status);
    if(status=="not-started"){
        var list=document.getElementById('not-started');
        list.innerHTML+=`<li>   //+=is used instead of = so that it prints more then one task in single column rather than merely overwriting the next one.
        <p>${taskName}</p>
        <p>${priority}</p>
        <p>${dueDate}</p>
        <p>${status}</p>
      </li>`;
        // `<li>${taskName} ${priority} ${dueDate} ${status}</li>`;
    }
    else if(status=='in-progress'){
        var list=document.getElementById('in-progress');
        list.innerHTML+=`<li>
        <p>${taskName}</p>
        <p>${priority}</p>
        <p>${dueDate}</p>
        <p>${status}</p>
      </li>`;
    }
    else{
        var list=document.getElementById('completed');
        list.innerHTML+=`<li>
        <p>${taskName}</p>
        <p>${priority}</p>
        <p>${dueDate}</p>
        <p>${status}</p>
      </li>`;
    }
}



// const openModalBtn = document.querySelector(".add-task-btn");
// const modal = document.querySelector(".modal");
// openModalBtn.addEventListener("click", () => {
//     modal.style.display = "block";
//   });
// const closeModal = document.querySelector(".close");
// closeModal.addEventListener("click", () => {
//     modal.style.display = "none";
//   });