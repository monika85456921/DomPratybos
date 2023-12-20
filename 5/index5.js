const form = document.querySelector('#form');
const table = document.querySelector('#table');
const insertButton = document.querySelector('#insert');
const editButton = document.querySelector('#edit');
const deleteButton = document.querySelector('#del')


    const tikrintiLS = localStorage.getItem("cartList");
    const cartList = tikrintiLS === null ? [] : JSON.parse(tikrintiLS)



insertButton.addEventListener('click', (event) =>{
    event.preventDefault();

    const id = document.querySelector("#id").value
    const name = document.querySelector("#name").value
    const quantity = document.querySelector("#quantity").value


///tikrinti 
if (!id || !name || !quantity) {
                console.log("Blogai ivesti duomenys");
                return;
            }
// const tikrintiLS = localStorage.getItem("cartList");
// const cartList = tikrintiLS === null ? [] : JSON.parse(tikrintiLS)

//prideti i LS
const naujasProduktas = {
    id,
    name,
    quantity
}
cartList.push(naujasProduktas);
localStorage.setItem("cartList", JSON.stringify(cartList))

});

//edit'as
editButton.addEventListener('click', (event)=>{
    event.preventDefault();

    const id = document.querySelector("#id").value
    const name = document.querySelector("#name").value
    const quantity = document.querySelector("#quantity").value

    const updated = cartList.map(el =>{
        if (el.id ===id){
            return {id,name,quantity}
        }
        return product
    });
    localStorage.setItem('cartList', JSON.stringify(updated))
})


deleteButton.addEventListener('click', (event)=>{
event.preventDefault();


const id = document.querySelector('#id').value;

localStorage.setItem("cartList", JSON.stringify(cartList))






})




   

