const galerija = document.querySelector("#galerija");
galerija.style.display = "grid";
galerija.style.gridTemplateColumns = "repeat(3, 1fr)";
//tikrinam ar yra local storage su favorites jei ne yra sukuriamas tuscias masyvas
const arYraFavorites = localStorage.getItem("favorites");
const favorites = arYraFavorites === null ? [] : JSON.parse(arYraFavorites);
console.log(favorites);

const picsMasyvas = [
  "https://media.wired.com/photos/593261cab8eb31692072f129/4:3/w_929,h_697,c_limit/85120553.jpg",
  "https://www.shutterstock.com/image-vector/okay-black-vector-icon-on-260nw-749714290.jpg",
  "https://www.shutterstock.com/image-vector/vector-icon-easy-260nw-1219734850.jpg",
  "https://cdn-icons-png.flaticon.com/512/1441/1441209.png",
  "https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/house-icon.png",
  "https://cdn-icons-png.flaticon.com/512/8188/8188141.png",
  "https://icons.veryicon.com/png/o/commerce-shopping/small-icons-with-highlights/delete-184.png",
  "https://www.freeiconspng.com/uploads/small-person-icons--free-download-14.jpg",
  "https://media.wired.com/photos/593261cab8eb31692072f129/4:3/w_929,h_697,c_limit/85120553.jpg",
  "https://randomwordgenerator.com/img/picture-generator/57e6d14a4252b10ff3d8992cc12c30771037dbf852547848752878d39e4a_640.jpg",
  "https://randomwordgenerator.com/img/picture-generator/57e4d24b4f56ab14f1dc8460962e33791c3ad6e04e50744172287edc9f44c3_640.jpg",
  "https://randomwordgenerator.com/img/picture-generator/57e1d14a4e55af14f1dc8460962e33791c3ad6e04e5074417c2e7dd19349c5_640.jpg",
];

const random = (array) => {
  const randomPic = Math.floor(Math.random() * array.length);
  return array[randomPic];
};

for (let i = 0; i < picsMasyvas.length; i++) {
  // containeris kiekvienam image'ui
  const galleryItem = document.createElement("div");
  galleryItem.style.position = "relative";
  galerija.appendChild(galleryItem);

  // images
  const imgEl = document.createElement("img");
  imgEl.setAttribute("src", picsMasyvas[i]);
  imgEl.style.height = "250px";
  imgEl.style.width = "250px";
  galleryItem.appendChild(imgEl);

  // mygtukas ir jo style
  const buttonEl = document.createElement("button");
  buttonEl.className = "btn";
  buttonEl.id = "btn" + i;
  buttonEl.innerHTML = '<i class="fa-solid fa-heart"></i>';
  buttonEl.style.position = "absolute";
  buttonEl.style.top = "0";
  buttonEl.style.left = "0";
  buttonEl.style.border = "none";
  buttonEl.style.height = "25px";

  galleryItem.appendChild(buttonEl);

}
const visiButtons = document.querySelectorAll(".btn");
// console.log(visiButtons);
visiButtons.forEach((e) => {
  const rasti = e.getAttribute("id");
  console.log(e);
  e.addEventListener("click", () => {
    // console.log(rasti);
    // console.log("click");

    if (e.style.color === "red") {
      e.style.color = "black";
      const arYra = favorites.includes(rasti);
      if (arYra) {
        const indexas = favorites.indexOf(rasti);
        if (indexas >= 0) {
          favorites.splice(indexas, 1);
         
        }
      }
    } else {
      e.style.color = "red";
      favorites.push(rasti);
      console.log(favorites);
     
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
  });
  if(favorites.includes(rasti)){
      e.style.color = "red"
      
    }
});









// const favsToLocalStorage = ()=>{
//   if(visiButtons ==="red"){
//     localStorage.setItem("favorites", JSON.stringify("favorites"))
//   } else {

//   }
// }

////

// const random = (array) => {
//   const randomPic = Math.floor(Math.random() * array.length);
//   // console.log(randomPic);
//   return array[randomPic];
// };

// for (let i = 0; i < picsMasyvas.length; i++) {
//   const imgEl = document.createElement("img");
//   galerija.appendChild(imgEl);
//   imgEl.setAttribute("src", picsMasyvas[i] )
//   //button
//   const buttonEl = document.createElement("button");
//   buttonEl.innerHTML = '<i class="fa-solid fa-heart"></i>';
//   galerija.appendChild(buttonEl);
//   //style
//   imgEl.style.height = "250px";
//   imgEl.style.width = "250px";
//   galerija.style.position = "relative";
//   buttonEl.style.position = "absolute";
//   buttonEl.style.top = "0";
//   buttonEl.style.left = "0";

//   //event listener'is mygtukui
//   buttonEl.addEventListener("click",(e) => {
//     e.preventDefault();
//     if(buttonEl.style.color == "red"){
//       buttonEl.style.color = "black"
//     }else{
//       buttonEl.style.color = "red"
//     }
//   });
// }
