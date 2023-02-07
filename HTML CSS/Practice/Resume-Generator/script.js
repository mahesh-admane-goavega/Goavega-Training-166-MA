console.log("hi");

function addNewWeField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("weField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 1);
  newNode.setAttribute("placeholder", "enter here");
  // console.log(newNode.lastElementChild);
  //.setAttribute("disabled", "disabled");

  let weOb = document.getElementById("we");
  let weAddButtonOb = document.getElementById("weAddBtn");

  weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField() {
  console.log("adding new filed");

  let nNode = document.createElement("textarea");
  nNode.classList.add("form-control");
  nNode.classList.add("aqFiled");
  nNode.classList.add("mt-2");
  nNode.setAttribute("rows", 3);
  nNode.setAttribute("placeholder", "enter here");

  let qfOb = document.getElementById("qf");
  let aqAddBtnOb = document.getElementById("aqAddBtn");
  qfOb.insertBefore(nNode, aqAddBtnOb);
}

// Generating CV

function generateCV() {
  //
  console.log("generate CV");

  // name
  let nameField = document.getElementById("nameField").value;
  let nameT1 = document.getElementById("nameT1");
  nameT1.innerHTML = nameField;
  document.getElementById("nameT2").innerHTML = nameField;

  // contact
  document.getElementById("contactT").innerHTML =
    document.getElementById("contactField").value;

  // Email
  document.getElementById("mailT").innerHTML =
    document.getElementById("emailField").value;

  //Address
  document.getElementById("addressT").innerHTML =
    document.getElementById("addressField").value;

  //Facebook Link
  document.getElementById("fbT").innerHTML =
    document.getElementById("fbField").value;

  //LinkedIn Link
  document.getElementById("ldT").innerHTML =
    document.getElementById("ldField").value;

  //Objective
  document.getElementById("objectiveT").innerHTML =
    document.getElementById("objectiveField").value;

  // Work Experience
  let wExp = document.getElementsByClassName("weField");
  let str = "";
  for (let e of wExp) {
    str = str + `<li> ${e.value} </li>`;
  }
  document.getElementById("weT").innerHTML = str;

  //AQ

  let AQ = document.getElementsByClassName("aqFiled");
  let str2 = "";
  for (let e of AQ) {
    str2 = str2 + `<li>${e.value}</li>`;
  }
  document.getElementById("aqT").innerHTML = str2;

  //selecting img
  let file = document.getElementById("profileField").files[0];

  let reader = new FileReader();
  reader.readAsDataURL(file);
  console.log(reader.result);

  reader.onloadend = function () {
    document.getElementById("imgT").src = reader.result;
  };

  document.getElementById("cv-template").style.display = "block";
  document.getElementById("cv-form").style.display = "none";
}

//Academic Qualifiation

// Printing cv
function printCV() {
  console.log("Generating CV");

  window.print();
}
