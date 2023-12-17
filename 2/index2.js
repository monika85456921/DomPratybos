// const divas = document.querySelector("div");
// const parent = document.getElementById("main");
// console.log(parent);
// //1
// const p1 = document.createElement("p");
// p1.innerText = "tekstas1";
// const p2 = document.createElement("p");
// p2.innerText = "tekstas2";
// const p3 = document.createElement("p");
// p3.innerText = "tekstas3";
// const p4 = document.createElement("p");
// p4.innerText = "tekstas4";
// const p5 = document.createElement("p");
// p5.innerText = "tekstas5";
// divas.append(p1, p2, p3, p4, p5);

// //3
// p1.setAttribute("class", "pirmas");
// p2.setAttribute("id", "antras");
// p3.setAttribute("data-mano", "trecias");
// p4.setAttribute("class", "ketvirtas");
// p5.setAttribute("class", "penktas");

// //4
// //sukuriam div elemetnus idedam ji i divas
// const d1 = document.createElement("div");
// const d2 = document.createElement("div");
// const d3 = document.createElement("div");
// const d4 = document.createElement("div");
// const d5 = document.createElement("div");
// const d6 = document.createElement("div");
// divas.append(d1, d2, d3, d4, d5, d6);

// //nustati auksti ir ploti

// const stilius = document.querySelectorAll("#main>div");
// // console.log(stilius)

// stilius.forEach((el) => {
//   el.style.height = "50px";
//   el.style.width = "600px";
// });

// //5
// const buttonas = document.createElement("button");
// buttonas.innerText = "keisk";
// divas.append(buttonas);

// buttonas.addEventListener("click", (e) => {
//   e.preventDefault();

//   stilius.forEach((el) => {
//     const randomC = Math.floor(Math.random() * 16777215).toString(16);
//     el.style.backgroundColor = "#" + randomC;
//   });
// });

// //6
// const masyvas = [
//   "obuolys",
//   "mangas",
//   "kriause",
//   "mandarinas",
//   "ananasas",
//   "slyva",
// ];

// const random = (array) => {
//   const randIndex = Math.floor(Math.random() * array.length);
//   console.log(randIndex)
//   return array[randIndex];
// };

// const zodziai = document.querySelector("#words");
// for (let i = 1; i <= masyvas.length; i++) {
//   const pElement = document.createElement("p");

//   const randomWord = random(masyvas);
//   pElement.innerText = randomWord;
//   zodziai.appendChild(pElement);
// }




