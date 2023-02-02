const shopContent = document.getElementById("lista-productos");
const shopContentmr = document.getElementById("lista-productos-mr");
const shopContentr = document.getElementById("lista-productos-r");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const modal = document.getElementById("modal");
const modalForm = document.getElementById("modalForm");


let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
//Agregar productos al div lista-productos 
productos.forEach((product) => {
    let content = document.createElement("div");
    content.classList.add("item");
    content.innerHTML = `
        <p class="proTitle">${product.nombre}</p>
        <img src="${product.img}"/>
        <p>Se incluye material e instalación</p>
        <p class="price">$${product.precio}</p>
    `
    shopContent.append(content);
    let comprar = document.createElement("button");
    comprar.innerText = "Comprar";
    comprar.className = "btn-add-cart";
    content.append(comprar);
//Pasar producto a carrito
    comprar.addEventListener("click", () => {
        const repeat = carrito.some((repeatProduct)=> repeatProduct.id === product.id );
        if(repeat){
            carrito.map( (prod) =>{
                if(prod.id === product.id){
                    prod.cantidad++;
                }
            });
        }else {
            carrito.push({
                id: product.id,
                img: product.img,
                nombre: product.nombre,
                precio: product.precio,
                cantidad: product.cantidad,
            });
        }
        console.log(carrito);
        carritoCount();
        saveLocal();
    });
});
//Agregar productos al div lista-productos-mr 
productosmr.forEach((product) => {
    let content = document.createElement("div");
    content.classList.add("item");
    content.innerHTML = `
        <p class="proTitle">${product.nombre}</p>
        <img src="${product.img}"/>
        <p>Se incluye material e instalación</p>
        <p class="price">$${product.precio}</p>
    `
    shopContentmr.append(content);
    let comprar = document.createElement("button");
    comprar.innerText = "Comprar";
    comprar.className = "btn-add-cart";
    content.append(comprar);
//Pasar producto a carrito
    comprar.addEventListener("click", () => {
        const repeat = carrito.some((repeatProduct)=> repeatProduct.id === product.id );
        if(repeat){
            carrito.map( (prod) =>{
                if(prod.id === product.id){
                    prod.cantidad++;
                }
            });
        }else {
            carrito.push({
                id: product.id,
                img: product.img,
                nombre: product.nombre,
                precio: product.precio,
                cantidad: product.cantidad,
            });
        }
        console.log(carrito);
        carritoCount();
        saveLocal();
    });
});
//Agregar productos al div lista-productos-r 
productosR.forEach((product) => {
    let content = document.createElement("div");
    content.classList.add("item");
    content.innerHTML = `
        <p class="proTitle">${product.nombre}</p>
        <img src="${product.img}"/>
        <p>Se incluye material e instalación</p>
        <p class="price">$${product.precio}</p>
    `
    shopContentr.append(content);
    let comprar = document.createElement("button");
    comprar.innerText = "Comprar";
    comprar.className = "btn-add-cart";
    content.append(comprar);
//Pasar producto a carrito
    comprar.addEventListener("click", () => {
        const repeat = carrito.some((repeatProduct)=> repeatProduct.id === product.id );
        if(repeat){
            carrito.map( (prod) =>{
                if(prod.id === product.id){
                    prod.cantidad++;
                }
            });
        }else {
            carrito.push({
                id: product.id,
                img: product.img,
                nombre: product.nombre,
                precio: product.precio,
                cantidad: product.cantidad,
            });
        }
        console.log(carrito);
        carritoCount();
        saveLocal();
    });
});

const saveLocal =() => {
    localStorage.setItem("carrito",JSON.stringify(carrito));
}