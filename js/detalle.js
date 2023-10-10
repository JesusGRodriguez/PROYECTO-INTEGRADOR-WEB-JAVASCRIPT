let codigo = location.search;
console.log(codigo);
let codigoProducto = new URLSearchParams(codigo);
console.log(codigoProducto);

let codigoSeleccionado = codigoProducto.get('codigo');
console.log(codigoSeleccionado);

fetch('../datos/productos.json')
    .then((respuesta) => {
        return respuesta.json()
    })
    .then((productos) => {
        console.log(productos) 
        // console.log(productos.codigo);

        for (let i = 0; i < productos.length; i++) {
            if (productos[i].codigo == codigoSeleccionado) {
                const sectionDetalle = document.querySelector(".Detalle")
                sectionDetalle.innerHTML += `
                <h1 class="titulo">${productos[i].codigo}</h1>
                <article class="producto row" >
                <div class="col">
                    <img class="w-100" src="${productos[i].imagen}" alt="${productos[i].descripcion}">
                </div>
                <div class="col">
                    <h2>${productos[i].descripcion}</h2>
                    <h3>${productos[i].precio}</h3>
                    <p> ${productos[i].detalle}</p>
                    <p class="puntuacion">${productos[i].puntuacion}</p>
                    <a class="btn btn-outline-danger" href="./index.html">Volver al Inicio</a>
                </div>
                </article>
                `
            }
        }
    })
    .catch((error) => {
        console.log('Ufff ha ocurrido un error ' + error)
    })