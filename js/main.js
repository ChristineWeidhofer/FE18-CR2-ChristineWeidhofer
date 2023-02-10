let tasks = JSON.parse(task);
console.log("I am an array of objects:" + tasks)

let selTasks = document.getElementById("taskCards");

// looping through all my tasks and creating cards for each task, including Titles, Text, Buttons...

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
  </div>
  `;
}

// selecting all my Done-Buttons

let doneBtns = document.getElementsByClassName("done");
console.log(doneBtns);

for (let i = 0; i < doneBtns.length; i++) {
  doneBtns[i].addEventListener("click", function() {
    doneBtns[i].parentElement.style.opacity = "0.3";
  })
}

// selecting all my Delete-Buttons

let delBtns = document.getElementsByClassName("del");
console.log(delBtns);

for (let i = 0; i < delBtns.length; i++) {
  delBtns[i].addEventListener("click", function() {
    delBtns[i].parentElement.style.display = "none";
  })
}

// selecting all my Priority-Numbers

let prios = document.getElementsByClassName("prio");

// selecting all my Importance-Up-Buttons

let impUpBtns = document.getElementsByClassName("impUp");

// loop thru them and increase the number by one and add respective color!

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

// selecting all my Importance-Down-Buttons

let impDownBtns = document.getElementsByClassName("impDown");

// loop thru them and decrease the number by one and add respective color!

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

