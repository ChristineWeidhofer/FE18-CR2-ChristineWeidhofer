let tasks = JSON.parse(task);
//console.log("I am an array of objects:" + tasks)

let selTasks = document.getElementById("taskCards");

// looping through all my tasks and creating cards for each task, including Titles, Text, Buttons...
// wrapping it in a function, so I can use it again after sorting


for (let val of tasks) {
  selTasks.innerHTML += `
  <div>
    <div class="card my-2">
      <img src="${val.image}" class="card-img-top" alt="Picture of ${val.taskName}">
      
      <div class="card-body">
        <h5 class="card-title">${val.taskName}</h5>
        <p class="card-text">${val.description}</p>
      </div>

      <ul class="list-group list-group-flush">
        <li class="list-group-item"><i class="bi-exclamation-triangle-fill icons-start"></i>Priority-level: <span class="text-light prio">${val.importance}</span></li>
        <li class="list-group-item"><i class="bi-calendar-check icons-start"></i>Deadline: <span>${val.deadline}</span></li>
      </ul>
      
      <button type="button" class="btn btn-outline-primary btn-sm m-2 impUp">Importance Up<i class="bi-arrow-up-square-fill icons-end"></i></button>
      <button type="button" class="btn btn-outline-primary btn-sm m-2 impDown">Importance Down<i class="bi-arrow-down-square-fill icons-end"></i></button>
      
      <a href="#" class="btn btn-outline-danger btn-sm m-2 del">Delete<i class="bi-trash3-fill icons-end"></i></a>
      <a href="#" class="btn btn-outline-success btn-sm m-2 done">Done<i class="bi-check-circle-fill icons-end"></i></a>
      
    </div>
  </div>`;
}

// selecting all my Done-Buttons

let doneBtns = document.getElementsByClassName("done");
console.log(doneBtns);

function doneButton() {
for (let i = 0; i < doneBtns.length; i++) {
  doneBtns[i].addEventListener("click", function() {
    doneBtns[i].parentElement.style.opacity = "0.3";
  })
}
}
doneButton();

// selecting all my Delete-Buttons

let delBtns = document.getElementsByClassName("del");
console.log(delBtns);

function deleteButton() {
for (let i = 0; i < delBtns.length; i++) {
  delBtns[i].addEventListener("click", function() {
    delBtns[i].parentElement.style.display = "none";
  })
}
}
deleteButton();

// selecting all my Priority-Numbers

let prios = document.getElementsByClassName("prio");

// selecting all my Importance-Up-Buttons

let impUpBtns = document.getElementsByClassName("impUp");

// loop thru them and increase the number by one and add respective color!

function importanceUp() {
for (let i = 0; i < impUpBtns.length; i++) {
  impUpBtns[i].addEventListener("click", function() {
    tasks[i].importance++;
    prios[i].innerHTML = `${tasks[i].importance}`;
    if (tasks[i].importance < 2) {
      prios[i].style.backgroundColor = "green";
    } else if (tasks[i].importance > 1 && tasks[i].importance < 4) {
      prios[i].style.backgroundColor = "orange";
    } else {
      prios[i].style.backgroundColor = "red";
    }  
  })
}
}
importanceUp();

// selecting all my Importance-Down-Buttons

let impDownBtns = document.getElementsByClassName("impDown");

// loop thru them and decrease the number by one and add respective color!

function importanceDown() {
for (let i = 0; i < impDownBtns.length; i++) {
  impDownBtns[i].addEventListener("click", function() {
    tasks[i].importance--;
    prios[i].innerHTML = `${tasks[i].importance}`;
    if (tasks[i].importance < 2) {
      prios[i].style.backgroundColor = "green";
    } else if (tasks[i].importance > 1 && tasks[i].importance < 4) {
      prios[i].style.backgroundColor = "orange";
    } else {
      prios[i].style.backgroundColor = "red";
    }  
  })
}
}
importanceDown();

/* adding an Event Listener to the sort-Button and sort our array of objects in an ascending order
according to their importance (low to high) */


document.getElementById("sortBtn").addEventListener("click", sortTasks);

function sortTasks() {
  tasks.sort((t1, t2) => (t1.importance > t2.importance) ? 1 : (t1.importance < t2.importance) ? -1 : 0);

  // creating cards again
  var newCards = "";

  newCards += `<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4">`;

  for (let val of tasks) {
    newCards += `
    <div>
      <div class="card my-2">
        <img src="${val.image}" class="card-img-top" alt="Picture of ${val.taskName}">
        
        <div class="card-body">
          <h5 class="card-title">${val.taskName}</h5>
          <p class="card-text">${val.description}</p>
        </div>
  
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><i class="bi-exclamation-triangle-fill icons-start"></i>Priority-level: <span id="prio2" class="text-light prio">${val.importance}</span></li>
          <li class="list-group-item"><i class="bi-calendar-check icons-start"></i>Deadline: <span>${val.deadline}</span></li>
        </ul>
        
        <button type="button" class="btn btn-outline-primary btn-sm m-2 impUp">Importance Up<i class="bi-arrow-up-square-fill icons-end"></i></button>
        <button type="button" class="btn btn-outline-primary btn-sm m-2 impDown">Importance Down<i class="bi-arrow-down-square-fill icons-end"></i></button>
        
        <a href="#" class="btn btn-outline-danger btn-sm m-2 del">Delete<i class="bi-trash3-fill icons-end"></i></a>
        <a href="#" class="btn btn-outline-success btn-sm m-2 done">Done<i class="bi-check-circle-fill icons-end"></i></a>
      
      </div>
    </div>`;
  }
  newCards += `</div>`;

  document.getElementById("taskCardWrapper").innerHTML = newCards;

  // make the buttons work again:

  doneButton();

  deleteButton();

  importanceUp();

  importanceDown();
}
// function sortTasks end