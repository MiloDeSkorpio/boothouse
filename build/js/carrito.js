const shopContent = document.getElementById("lista-productos");
const shopContentmr = document.getElementById("lista-productos-mr");
const shopContentr = document.getElementById("lista-productos-r");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");

let carrito = [];
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
        carrito.push({
            id: product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,
        });
        console.log(carrito);
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
        carrito.push({
            id: product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,
        });
        console.log(carrito);
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
        carrito.push({
            id: product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,
        });
        console.log(carrito);
    });
});
//Activar modal
verCarrito.addEventListener("click",() => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.classList.add("modal-header");
    modalHeader.innerHTML = `
        <h1 class="modal-header-title">Carrito</h1>
    `;
    modalContainer.append(modalHeader);

    const modalButton = document.createElement("h1");
    modalButton.innerHTML = "x";
    modalButton.classList.add("modal-header-button");
    modalButton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    });
    modalHeader.append(modalButton);
// Agregar contenido del carrito al modal
    carrito.forEach((product) => {
        let carritoContent = document.createElement("div");
        carritoContent.classList.add("modal-content");
        carritoContent.innerHTML = `
            <img src="${product.img}">
            <p>${product.nombre}</p>
            <p>${product.precio}</p>
        `;
        modalContainer.append(carritoContent);
    });

    const total = carrito.reduce((acc,el) => acc + el.precio,0);

    const totalBuying = document.createElement("div");
    totalBuying.classList.add("total-content");
    totalBuying.innerHTML = `<p>Total a pagar: $${total}</p>`;
    modalContainer.append(totalBuying);
});
