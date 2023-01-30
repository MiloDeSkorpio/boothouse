//Activar modal
const renderCarrito = () =>{

    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.classList.add("modal-header");
    modalHeader.innerHTML = `
        <h1 class="modal-header-title">Bot House Shop</h1>
    `;
    modalContainer.append(modalHeader);

    const modalButton = document.createElement("span");
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
            <p class="name">${product.nombre}</p>
            <p class= "costoU">$${product.precio}</p>
            <span class="restar"> - </span>
            <p>Cantidad: ${product.cantidad}</p>
            <span class="sumar"> + </span>
            <p>Total: $${product.cantidad * product.precio}</p>
            <span class="delete-product"> x </span>
        `;
        modalContainer.append(carritoContent);

        let restar = carritoContent.querySelector(".restar");
        restar.addEventListener("click", () => {
            if(product.cantidad !== 1){
                product.cantidad--;
                renderCarrito();
                saveLocal();
            }
        });
        let sumar = carritoContent.querySelector(".sumar");
        sumar.addEventListener("click", () => {
            product.cantidad++;
            renderCarrito();
            saveLocal();
        });
        //boton eliminar
        let eliminar  = carritoContent.querySelector(".delete-product");
        eliminar.addEventListener("click", () => {
            eliminarProducto(product.id);
        });
    });

    const total = carrito.reduce((acc,el) => acc + el.precio * el.cantidad,0);

    const totalBuying = document.createElement("div");
    totalBuying.classList.add("total-content");
    totalBuying.innerHTML = `<p>Total a pagar: $${total}</p>`;
    modalContainer.append(totalBuying);
}
verCarrito.addEventListener("click",renderCarrito);
//eliminar producto
const eliminarProducto = (id) => {
    const foundId = carrito.find((element) => element.id === id);
        carrito = carrito.filter((carritoId) => {
            return carritoId !== foundId;
        });
    carritoCount();
    saveLocal();
    renderCarrito();
};
const carritoCount = () => {
    cantidadCarrito.style.display = "block";
    const carritoLength = carrito.length;
    localStorage.setItem("carritoLength", JSON.stringify(carritoLength));
    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"))
};

carritoCount();