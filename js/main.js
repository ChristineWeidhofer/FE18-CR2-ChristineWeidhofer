let tasks = JSON.parse(task);
//console.log("I am an array of objects:" + tasks)

let selTasks = document.getElementById("taskCards");

// looping through all my tasks and creating cards for each task, including Titles, Text, Buttons...
// wrapping it in a function, so I can use it again after sorting


for (let val of tasks) {
  selTasks.innerHTML += `
  <div class="card-wrap">
    <div class="card w-100 my-2">
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

// selecting my new Cards-div with classes "card-wrap"

let cWClasses = document.getElementsByClassName("card-wrap");

// selecting all my Done-Buttons

let doneBtns = document.getElementsByClassName("done");

function doneButton() {
  for (let i = 0; i < doneBtns.length; i++) {
    doneBtns[i].addEventListener("click", function() {
      cWClasses[i].style.opacity = "0.3"; // changed after deadline
    })
  }
}
doneButton();

// selecting all my Delete-Buttons

let delBtns = document.getElementsByClassName("del");

function deleteButton() {
  for (let i = 0; i < delBtns.length; i++) {
    delBtns[i].addEventListener("click", function() {
      cWClasses[i].style.display = "none"; // changed after deadline
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
      if (tasks[i].importance < 5) {
        tasks[i].importance++;
        prios[i].innerHTML = `${tasks[i].importance}`;
        if (tasks[i].importance < 2) {
          prios[i].style.backgroundColor = "green";
        } else if (tasks[i].importance > 1 && tasks[i].importance < 4) {
          prios[i].style.backgroundColor = "orange";
        } else {
          prios[i].style.backgroundColor = "red";
        }
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
      if (tasks[i].importance > 0) {
        tasks[i].importance--;
        prios[i].innerHTML = `${tasks[i].importance}`;
        if (tasks[i].importance < 2) {
          prios[i].style.backgroundColor = "green";
        } else if (tasks[i].importance > 1 && tasks[i].importance < 4) {
          prios[i].style.backgroundColor = "orange";
        } else {
          prios[i].style.backgroundColor = "red";
        }
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

  // creating cards again // sorting doesn't work if I clicked on "Tasks" in navbar - and went to the anchor???

  selTasks.innerHTML = ""; // created after deadline ( also the new creation in the loop - old div = emptied: new cards put in old div)

  for (let val of tasks) {
    selTasks.innerHTML += `
    <div class="card-wrap">
      <div class="card w-100 my-2">
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

  // make the buttons work again:

  doneButton();

  deleteButton();

  importanceUp();

  importanceDown();
}
// function sortTasks end

// ---------------------------- scroll to top button ------------------------------------

let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}