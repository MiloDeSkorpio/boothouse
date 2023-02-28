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
    content.setAttribute('id',`${product.id}`)
    const value = Intl.NumberFormat('en-EN').format(product.precio)
    content.innerHTML = `
        <div class="item__header">
        <p class="proTitle">${product.nombre}</p>
        </div>
        <div class="item__body">
        <div class=img>
            <img src="${product.img}"/>
        </div>
        <p class="detalles item-d">${product.detalles}</p>
        <p class="info__i">Se incluye material e instalación</p>
        <p class="price">$${value}</p>
        </div>
    `
    shopContent.append(content);
    const itemFooter = document.createElement('DIV')
    itemFooter.className = "item_footer";
    content.append(itemFooter)
    const comprar = document.createElement("button");
    const detalles = document.createElement("button");
    comprar.innerText = "Comprar";
    comprar.className = "btn-add-cart";
    detalles.innerText = "Detalles";
    detalles.className = "btn-details";
    detalles.setAttribute('id',`${product.id}`)
    itemFooter.append(comprar);
    itemFooter.append(detalles);
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
        const ventanaDetalles = document.querySelector('body');
        const idProduct = e.target.id;
        const producto = document.getElementById(`${idProduct}`)
        const overlay = document.createElement('DIV');
        const slideShow = document.createElement('DIV');
        overlay.classList.add('overlay');
        ventanaDetalles.append(overlay);
        slideShow.classList.add('slideShow');
        overlay.append(slideShow)
        slideShow.append(producto)
        overlay.style.opacity = 1;
        overlay.style.visibility = 'visible';
        const btn_close = document.createElement('button');
        btn_close.classList.add('btn_cerrar');
        btn_close.innerText= 'X';
        slideShow.append(btn_close)
        document.querySelector('.btn_cerrar').addEventListener('click',()=>{
            overlay.style.opacity = 0;
            overlay.style.visibility = 'hidden';
            location.reload();
            });

        
    });//boton Detalles
});
//Agregar productos al div lista-productos-mr 
productosmr.forEach((product) => {
    let content = document.createElement("div");
    content.classList.add("item");
    content.setAttribute('id',`${product.id}`)
    const value = Intl.NumberFormat('en-EN').format(product.precio)
    content.innerHTML = `
        <div class="item__header">
        <p class="proTitle">${product.nombre}</p>
        </div>
        <div class="item__body">
        <div class=img>
            <img src="${product.img}"/>
        </div>
        <p class="detalles item-d">${product.detalles}</p>
        <p class="info__i">Se incluye material e instalación</p>
        <p class="price">$${value}</p>
        </div>
    `
    shopContentmr.append(content);
    const itemFooter = document.createElement('DIV')
    itemFooter.className = "item_footer";
    content.append(itemFooter)
    const comprar = document.createElement("button");
    const detalles = document.createElement("button");
    comprar.innerText = "Comprar";
    comprar.className = "btn-add-cart";
    detalles.innerText = "Detalles";
    detalles.className = "btn-details";
    detalles.setAttribute('id',`${product.id}`)
    itemFooter.append(comprar);
    itemFooter.append(detalles);
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
        const ventanaDetalles = document.querySelector('body');
        const idProduct = e.target.id;
        const producto = document.getElementById(`${idProduct}`)
        const overlay = document.createElement('DIV');
        const slideShow = document.createElement('DIV');
        overlay.classList.add('overlay');
        ventanaDetalles.append(overlay);
        slideShow.classList.add('slideShow');
        overlay.append(slideShow)
        slideShow.append(producto)
        overlay.style.opacity = 1;
        overlay.style.visibility = 'visible';
        const btn_close = document.createElement('button');
        btn_close.classList.add('btn_cerrar');
        btn_close.innerText= 'X';
        slideShow.append(btn_close)
        document.querySelector('.btn_cerrar').addEventListener('click',()=>{
            overlay.style.opacity = 0;
            overlay.style.visibility = 'hidden';
            location.reload();
            });

        
    });//boton Detalles
});
//Agregar productos al div lista-productos-r 
productosR.forEach((product) => {
    let content = document.createElement("div");
    content.classList.add("item");
    content.setAttribute('id',`${product.id}`)
    const value = Intl.NumberFormat('en-EN').format(product.precio)
    content.innerHTML = `
        <div class="item__header">
        <p class="proTitle">${product.nombre}</p>
        </div>
        <div class="item__body">
        <div class=img>
            <img src="${product.img}"/>
        </div>
        <p class="detalles item-d">${product.detalles}</p>
        <p class="info__i">Se incluye material e instalación</p>
        <p class="price">$${value}</p>
        </div>
    `
    shopContentr.append(content);
    const itemFooter = document.createElement('DIV')
    itemFooter.className = "item_footer";
    content.append(itemFooter)
    const comprar = document.createElement("button");
    const detalles = document.createElement("button");
    comprar.innerText = "Comprar";
    comprar.className = "btn-add-cart";
    detalles.innerText = "Detalles";
    detalles.className = "btn-details";
    detalles.setAttribute('id',`${product.id}`)
    itemFooter.append(comprar);
    itemFooter.append(detalles);
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
        const ventanaDetalles = document.querySelector('body');
        const idProduct = e.target.id;
        const producto = document.getElementById(`${idProduct}`)
        const overlay = document.createElement('DIV');
        const slideShow = document.createElement('DIV');
        overlay.classList.add('overlay');
        ventanaDetalles.append(overlay);
        slideShow.classList.add('slideShow');
        overlay.append(slideShow)
        slideShow.append(producto)
        overlay.style.opacity = 1;
        overlay.style.visibility = 'visible';
        const btn_close = document.createElement('button');
        btn_close.classList.add('btn_cerrar');
        btn_close.innerText= 'X';
        slideShow.append(btn_close)
        document.querySelector('.btn_cerrar').addEventListener('click',()=>{
            overlay.style.opacity = 0;
            overlay.style.visibility = 'hidden';
            location.reload();
            });

        
    });//boton Detalles
});
const saveLocal =() => {
    localStorage.setItem("carrito",JSON.stringify(carrito));
}

