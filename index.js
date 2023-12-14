// const divas = document.querySelector("div");
// const body = document.querySelector("body")
// //1 sukurti elementa ir i ji ideti savo sugalvota teksta
// const paragrafas = document.createElement("p");

// divas.append(paragrafas);

// paragrafas.innerText = "Cia yra tekstas 1"

// // 2
// const naujasDivas = document.createElement("div");
// body.append(naujasDivas);
// const spanas = document.createElement("span");
// naujasDivas.append(spanas);
// spanas.innerText = "Cia yra span tekstas";

// //3

// divas.setAttribute("class", "myClass")
// divas.setAttribute("id", "myId")

// const imagas = document.querySelector("img")
// const linkas = document.querySelector("a")

// imagas.setAttribute("src", "https://cdn.iconscout.com/icon/free/png-512/free-panda-1602246-1358167.png?f=webp&w=512")
// imagas.setAttribute("alt", "paveiksliukas")
// linkas.setAttribute("href", "https://www.kitm.lt")
// linkas.innerText = "cia linkas"

// //4

// const paragrafas2 = document.createElement("p");
// paragrafas2.innerText = "Cia yra tekstas 2"
// const paragrafas3 = document.createElement("p");
// paragrafas3.innerText = "Cia yra tekstas 3"
// const paragrafas4 = document.createElement("p");
// paragrafas4.innerText = "Cia yra tekstas 4"


// //cia reik naudoti push ne append???
// divas.append(paragrafas2,paragrafas3,paragrafas4);

// const arr = document.querySelectorAll("#myId>p");

// console.log(arr)

// arr.forEach((el,index)=>{
//     if(index % 2 ===0){
//         el.style.color = "red"
//         el.style.backgroundColor = "black"
//     } else {
//         el.style.color = "white"
//         el.style.backgroundColor = "green"
//     }
// })

// //5

// document.getElementById("myForm").addEventListener('submit',(event)=>{
//     event.preventDefault();

//     const input = document.getElementById("text")
//     const output = input.value;

//     const printOutput = document.createElement('h1');
//     printOutput.innerHTML = output;
//     document.body.appendChild(printOutput);
//     console.log(output);
// });    
// //6
// const divas3 = document.getElementById("duMygtukai");
// const button1 = document.createElement("button");
// const button2 = document.createElement("button");
// body.append(button1,button2);
// button1.innerText = "click"
// button2.innerText = "click"

// button1.addEventListener("click", (e) => {
//     const naujasP = document.createElement('p')
//     naujasP.innerText = "sukurtas naujas elementas"
//     divas3.append(naujasP);
// })
// button2.addEventListener("click", (e)=>{
//     while(divas3.firstChild){
//         divas3.removeChild(divas3.firstChild)
//     }
// })

// //7
// //on click nenaudoti geriau??
// let kiek = 0
// const btn = document.getElementById("btn");
// const disp = document.getElementById("display");

// // btn.onclick = function(){
// //     kiek++
// //     disp.innerHTML = kiek;
// // }

