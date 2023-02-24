//Activar modal
const renderCarrito = () =>{
    window.scrollTo(0,0);
    //modal  Contenedor carrito
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.classList.add("modal-header");
    modalHeader.innerHTML = `
        <h1 class="modal-header-title">Bot House Shop</h1>
    `;
    modalContainer.append(modalHeader);
    //boton cerrar modal
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
            <div class="imgCarrito">
                <img src="${product.img}">
            </div>
            <div class="infCarrito">
            <p class="name">${product.nombre}</p>
            <p class= "costoU">$${product.precio}</p>
            </div>
            <div class="cantCarrito">
            <span class="restar"> - </span>
            <p>Cantidad: ${product.cantidad}</p>
            <span class="sumar"> + </span>
            </div>
            <div class="totCarrito">
            <p>Total: $${product.cantidad * product.precio}</p>
            <span class="delete-product"> Eliminar </span>
            </div>
        `;
        modalContainer.append(carritoContent);
        //restar cantidas
        let restar = carritoContent.querySelector(".restar");
        restar.addEventListener("click", () => {
            if(product.cantidad !== 1){
                product.cantidad--;
                renderCarrito();
                saveLocal();
            }
        });
        //sumar cantidad
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
    //sumar total
    const total = carrito.reduce((acc,el) => acc + el.precio * el.cantidad,0);
    const totalBuying = document.createElement("div");
    totalBuying.classList.add("total-content");
    totalBuying.innerHTML = `
    <div>
    <button onclick="vaciarCarrito()" class="delete-product">Vaciar</button>
    </div>
    <div>
    <button onclick="pagarCarrito()" class="pagar">Pagar</button>
    </div>
    <div>
    <p>Total a pagar: $${total}</p>
    </div>
    
    `;
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
//contador carrito
const carritoCount = () => {
    cantidadCarrito.style.display = "block";
    const carritoLength = carrito.length;
    localStorage.setItem("carritoLength", JSON.stringify(carritoLength));
    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"))
    
};
carritoCount();

function vaciarCarrito() {
    if(carrito.length === 0){
        alert('El Carrito esta Vacio!')
    }else {
        localStorage.clear();
        alert('Vaciaste el Carrito');
        location.href = "servicios.html"
    }
}


function pagarCarrito ( )  {
    if(carrito.length === 0){
        alert('Agrega un Producto');
    }else {
        window.scrollTo(0,0);
        modalContainer.style.display = "none";
        modal.style.opacity ="1";
        modal.style.visibility ="visible";
        modalForm.classList.toggle("hiden")
        const proMes = carrito.map(carrito => carrito.nombre);
        document.getElementById("message").value=proMes.toString();
        //crear boton cerrar del modal
        const closeCarrito = document.querySelector("#btnClose")
        closeCarrito.addEventListener("click",() => {
            modalForm.classList.toggle("hiden")
            setTimeout(function(){
                modal.style.opacity ="0";
                modal.style.visibility ="hidden";
            },800);
        });
        window.addEventListener("click", (e)=>{
            if(e.target == modal){
                modalForm.classList.toggle("hiden")
                setTimeout(function(){
                    modal.style.opacity ="0";
                    modal.style.visibility ="hidden";
                },800);
            }
        });
        modalForm.append(closeCarrito);
        //modalForm
        const btn = document.getElementById('button');
        document.getElementById('form')
        .addEventListener('submit', function(event) {
            event.preventDefault();
            btn.value = 'Procesando...';

                alert('Compra Exitosa!');
                localStorage.clear();
                location.href = "servicios.html"
        });
    }
}

