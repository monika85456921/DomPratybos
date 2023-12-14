const galerija = document.querySelector("#galerija");
//1 sukurta galerija
const picsMasyvas = [
  "https://randomwordgenerator.com/img/picture-generator/57e6d7404952af14f1dc8460962e33791c3ad6e04e50744172277ed0974ac3_640.jpg",
  "https://www.shutterstock.com/image-vector/okay-black-vector-icon-on-260nw-749714290.jpg",
  "https://www.shutterstock.com/image-vector/vector-icon-easy-260nw-1219734850.jpg",
  "https://cdn-icons-png.flaticon.com/512/1441/1441209.png",
  "https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/house-icon.png",
  "https://cdn-icons-png.flaticon.com/512/8188/8188141.png",
  "https://icons.veryicon.com/png/o/commerce-shopping/small-icons-with-highlights/delete-184.png",
  "https://www.freeiconspng.com/uploads/small-person-icons--free-download-14.jpg",
];

const random = (array) => {
  const randomPic = Math.floor(Math.random() * array.length);
  console.log(randomPic);
  return array[randomPic];
};

for (let i = 1; i <= picsMasyvas.length; i++) {
  const imgEl = document.createElement("img");
  galerija.appendChild(imgEl);
  imgEl.setAttribute("src", picsMasyvas[i] )
}
