const mainDiv = document.querySelector("#container");

///1 skaidre
//1 //2
const button1 = document.createElement("button");
const button2 = document.createElement("button");

mainDiv.append(button1);
mainDiv.append(button2);
button1.innerText = "Didinti";
button2.innerText = "Mazinti";

const paragrafas = document.createElement("p");
mainDiv.append(paragrafas);
paragrafas.innerText = "skaitliukas";

//3 //4
let skaitliukas = 0;
button1.addEventListener("click", (event) => {
  event.preventDefault();
  skaitliukas++;
  paragrafas.textContent = skaitliukas;
  if (skaitliukas % 2 === 0) {
    button1.style.color = "black";
    button1.style.backgroundColor = "red";
  } else {
    button1.style.color = "black";
    button1.style.backgroundColor = "lightgrey";
  }
});

button2.addEventListener("click", (event) => {
  event.preventDefault();
  skaitliukas--;
  paragrafas.textContent = skaitliukas;
  if (skaitliukas % 2 === 0) {
    button2.style.color = "black";
    button2.style.backgroundColor = "red";
  } else {
    button2.style.color = "black";
    button2.style.backgroundColor = "lightgrey";
  }
});

////2skaidre
//1
const inputDivas = document.createElement("div");
mainDiv.append(inputDivas);
inputDivas.setAttribute("class", "inputs");

//1
const form = document.createElement("form");
inputDivas.append(form);

const input1 = document.createElement("input");
input1.placeholder = "ul list";
const input2 = document.createElement("input");
input2.placeholder = "ol list";
const inputButton = document.createElement("button");
inputDivas.append(input1, input2, inputButton);
inputButton.innerText = "Create List";
