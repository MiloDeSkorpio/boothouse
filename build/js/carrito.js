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
    const value = Intl.NumberFormat('en-EN').format(product.precio)
    content.innerHTML = `
        <p class="proTitle">${product.nombre}</p>
        <img src="${product.img}"/>
        <p>Se incluye material e instalación</p>
        <p class="price">$${value}</p>
    `
    shopContent.append(content);
    let comprar = document.createElement("button");
    let detalles = document.createElement("button");
    comprar.innerText = "Comprar";
    comprar.className = "btn-add-cart";
    detalles.innerText = "Detalles";
    detalles.className = "btn-details";
    detalles.setAttribute('id',`${product.id}`)
    content.append(comprar);
    // content.append(detalles);
//Pasar producto a carrito
    comprar.addEventListener("click", () => {
        const alerta = document.createElement('DIV');
        alerta.innerText = "Se Agrego Producto al Carrito"
        alerta.classList.add('alerta');
        content.append(alerta);
        setTimeout(function(){
            alerta.style.display ="none";
        },1500);
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
        carritoCount();
        saveLocal();
    });//boton comprar
    detalles.addEventListener('click',(e)=>{
        const ventanaDetalles = document.createElement('DIV');
        ventanaDetalles.classList.add('container__detalles');
        const producto = e.target.id
        console.log(producto)
    });//boton Detalles
});
//Agregar productos al div lista-productos-mr 
productosmr.forEach((product) => {
    let content = document.createElement("div");
    content.classList.add("item");
    const value = Intl.NumberFormat('en-EN').format(product.precio)
    content.innerHTML = `
        <p class="proTitle">${product.nombre}</p>
        <img src="${product.img}"/>
        <p>Se incluye material e instalación</p>
        <p class="price">$${value}</p>
    `
    shopContentmr.append(content);
    let comprar = document.createElement("button");
    comprar.innerText = "Comprar";
    comprar.className = "btn-add-cart";
    content.append(comprar);
//Pasar producto a carrito
    comprar.addEventListener("click", () => {
        const alerta = document.createElement('DIV');
        alerta.innerText = "Se Agrego Producto al Carrito"
        alerta.classList.add('alerta');
        content.append(alerta);
        setTimeout(function(){
            alerta.style.display ="none";
        },1500);
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
        carritoCount();
        saveLocal();
    });
});
//Agregar productos al div lista-productos-r 
productosR.forEach((product) => {
    let content = document.createElement("div");
    content.classList.add("item");
    const value = Intl.NumberFormat('en-EN').format(product.precio)
    content.innerHTML = `
        <p class="proTitle">${product.nombre}</p>
        <img src="${product.img}"/>
        <p>Se incluye material e instalación</p>
        <p class="price">$${value}</p>
    `
    shopContentr.append(content);
    let comprar = document.createElement("button");
    comprar.innerText = "Comprar";
    comprar.className = "btn-add-cart";
    content.append(comprar);
//Pasar producto a carrito
    comprar.addEventListener("click", () => {
        const alerta = document.createElement('DIV');
        alerta.innerText = "Se Agrego Producto al Carrito"
        alerta.classList.add('alerta');
        content.append(alerta);
        setTimeout(function(){
            alerta.style.display ="none";
        },1500);
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
        carritoCount();
        saveLocal();
    });
});
const saveLocal =() => {
    localStorage.setItem("carrito",JSON.stringify(carrito));
}

