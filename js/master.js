let productosHTML = document.querySelector('.productos');
console.log(productosHTML);

fetch('../datos/productos.json')
.then((respuesta)=>{
    return respuesta.json()
})
.then((productos)=>{
    //console.log(productos)
    productos.forEach(producto => {
        productosHTML.innerHTML += `
        <div class="productos col-12 col-md-6 col-lg-4"><br><br>
            <img src="${producto.imagen}" class="card-img-top" alt="${producto.descripcion}">
            <div class="card-body">
                <h5 class="card-title">${producto.descripcion}</h5>
                <h6 class="card-text">Precio: ${producto.precio}</h6>
            </div>
            <a class="btn btn-outline-danger d-block botonDetalle" href="./detalle.html?codigo=${producto.codigo}">Ver Detalle</a>
        </div>
        `
    })
    
})
.catch((error)=>{
    console.log('Uff ha ocurrido un error'+error)
})

