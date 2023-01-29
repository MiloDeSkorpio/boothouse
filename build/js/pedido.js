//Activar modal
const renderCarrito = () =>{

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
            <p>$${product.precio}</p>
            <p>Cantidad:${product.cantidad}</p>
            <p>Total:${product.cantidad * product.precio}</p>
        `;
        modalContainer.append(carritoContent);

        //boton eliminar

        let eliminar  = document.createElement("span");
        eliminar.innerText = "x";
        eliminar.classList.add("delete-product")
        carritoContent.append(eliminar)
        eliminar.addEventListener("click", eliminarProducto)
    });

    const total = carrito.reduce((acc,el) => acc + el.precio * el.cantidad,0);

    const totalBuying = document.createElement("div");
    totalBuying.classList.add("total-content");
    totalBuying.innerHTML = `<p>Total a pagar: $${total}</p>`;
    modalContainer.append(totalBuying);
}
verCarrito.addEventListener("click",renderCarrito);
const eliminarProducto = () => {
    const foundId = carrito.find((element) => element.id);
        carrito = carrito.filter((carritoId) => {
            return carritoId !== foundId;
        });
    carritoCount();
    renderCarrito();
};
const carritoCount = () => {
    cantidadCarrito.style.display = "block";
    cantidadCarrito.innerText = carrito.length;
};