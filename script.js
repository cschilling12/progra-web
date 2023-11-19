
let productosEnCarrito = [];

function agregarAlCarrito(idProducto)
    {
    let producto = productosEnCarrito.find(function(item) {return item.id === idProducto;});
    if (!producto) {
        productosEnCarrito.push({ id: idProducto, cantidad: 1 });} 
    else {producto.cantidad++;}

    actualizarCarrito();
}

function sacardelCarrito(idProducto) 
    {
    let indiceProducto = productosEnCarrito.findIndex(function(item) {return item.id === idProducto;});
    if (indiceProducto !== -1) {productosEnCarrito[indiceProducto].cantidad--;
    if (productosEnCarrito[indiceProducto].cantidad === 0) {productosEnCarrito.splice(indiceProducto, 1);}}

    actualizarCarrito();
}

function actualizarCarrito() {
    let elementoProductosEnCarrito = document.getElementById('productos-en-carrito');
    let precioTotal = 0;

    elementoProductosEnCarrito.innerHTML = '';

    productosEnCarrito.forEach(function(item) {
        let producto = obtenerProductos
    (item.id);
        let precioProducto = sacarPrecio(producto, item.cantidad);
        precioTotal += precioProducto;
        let li = document.createElement('li');
        li.textContent = producto.nombre + ' x ' + item.cantidad + ' - $' + precioProducto.toFixed(2);
        li.classList.add("elemento-Carrito")

        let botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.setAttribute('data-id-producto', item.id);
        botonEliminar.classList.add("elemento-Eliminar")
        botonEliminar.addEventListener('click', function() {
        let idProducto = parseInt(this.getAttribute('data-id-producto'));
        sacardelCarrito(idProducto);
        });
        li.appendChild(botonEliminar);
        elementoProductosEnCarrito.appendChild(li);});

    let elementoTotal = document.createElement('ul');
    elementoTotal.textContent = 'Total: $' + precioTotal.toFixed(2);
    elementoProductosEnCarrito.appendChild(elementoTotal);}

function obtenerProductos(idProducto) {
    let productos = [
        {id: 1,nombre: "Dune, Aventuras en el Imperio",precio: 10200,},
        {id: 2,nombre: "Frankenstein",precio: 2700,},
        {id: 3,nombre: "Luz de los Jedi",precio: 4800,},

        {id: 4,nombre: "Harry Potter y el Cáliz de Fuego",precio: 14200,},
        {id: 5,nombre: "Narnia, El Príncipe Caspian",precio: 5400,},
        {id: 6,nombre: "Percy Jackson y el Mar de los Monstruos",precio: 12700,},

        {id: 7,nombre: "Ahenlo",precio: 11400,},
        {id: 8,nombre: "Crepúsculo",precio: 13000,},
        {id: 9,nombre: "Las Ventajas de Ser Invisible",precio: 13200,},

        {id: 10,nombre: "Sherlock Holmes, El Sabueso de los Baskerville",precio: 9600,},
        {id: 11,nombre: "El Fantasma de la Ópera",precio: 11200,},
        {id: 12,nombre: "Los Inocentes",precio: 5900,},

        {id: 13,nombre: "A Través de mi Ventana",precio: 7500,},
        {id: 14,nombre: "Culpa Nuestra",precio: 7100,},
        {id: 15,nombre: "La Última Vez que Hablamos de Amor",precio: 4600,},

        {id: 16,nombre: "IT",precio: 17400,},
        {id: 17, nombre: "El Visitante",precio: 11500,},
        {id: 18, nombre: "Antalogia de Terror",precio: 15500,},

];
    return productos.find(function(producto) {
        return producto.id === idProducto;});
}

function sacarPrecio(producto, cantidad) {return producto.precio * cantidad;}

function vaciarCarrito() {productosEnCarrito = [];actualizarCarrito();}

function finalizarCompra() {
    if (productosEnCarrito.length === 0) {alert("El carrito está vacío");
    return;}alert("Su compra se ha realizado con éxito");vaciarCarrito();}



