const divas = document.querySelector("div")
const parent = document.getElementById("#main")
console.log(parent)
//1
const p1 = document.createElement("p");
p1.innerText = "tekstas1"
const p2 = document.createElement("p");
p2.innerText = "tekstas2"
const p3 = document.createElement("p");
p3.innerText = "tekstas3"
const p4 = document.createElement("p");
p4.innerText = "tekstas4"
const p5 = document.createElement("p");
p5.innerText = "tekstas5"
divas.append(p1,p2,p3,p4,p5);

//3
p1.setAttribute("class","pirmas")

p2.setAttribute("id","antras")
// visiVaikai[2].className = "trecias"