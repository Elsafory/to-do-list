let userInput = document.getElementById("userInput");
let homeContent = document.getElementById("homeContent");
let hideAlart = document.getElementById("hide-alart");
let items = [];
if (localStorage.getItem("allItems") != null) {
  items = JSON.parse(localStorage.getItem("allItems"));
  display();
}
function addItem() {
  if (userInput.value = null) {
    hideAlart.classList.add("hide-alart");  
  } else {
    items.push(userInput.value);
    userInput.value = "";
    display();
    localStorage.setItem("allItems", JSON.stringify(items));
  }
}
function display() {
  let cartona = ``;
  items.forEach((item, index) => {
    cartona += `<div
                class="home-item mb-2 rounded-pill text-dark mx-auto w-25 bg-danger d-flex justify-content-between align-items-center">
                <p id="item" class="m-0 p-0">${item}</p>
                <i class="fa-sharp fa-solid fa-trash" onclick="deleteRow(${index})"></i> 
            </div>`;
  });
  homeContent.innerHTML = cartona;
}
function deleteRow(i) {
  items.splice(i, 1);
  display();
  localStorage.setItem("allItems", JSON.stringify(items));
}
function searchTask(task) {
  cartonaSearch = ``;
  for (let i = 0; i < items.length; i++) {
    if (items[i].toLowerCase().includes(task.toLowerCase())) {
      cartonaSearch += `<div
                class="home-item mb-2 rounded-pill text-dark mx-auto w-25 bg-danger d-flex justify-content-between align-items-center">
                <p id="item" class="m-0 p-0">${items[i].replace(task,`<span class="text-info fw-blod">${items[i]}</span>`)}</p>
                <i class="fa-sharp fa-solid fa-trash" onclick="deleteRow(${i})"></i> 
            </div>`;
    }
  }
  homeContent.innerHTML = cartonaSearch;
}
