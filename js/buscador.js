
// constantes
const buscador = document.querySelector("#buscador")
const productos = document.querySelectorAll(".producto")
const error = document.createElement("h1")
// funciones
function normalize(text){
    text = text.toLowerCase()
    text = text.normalize('NFD').replace(/[\u0300-\u036f]/g,"");
    return text
}


function filtrar(find, objects){
    filtrado = []
    for (i of objects){
        titulo = i.querySelector(".card-title").innerText
        descripcion = i.querySelector(".card-text").innerText
        titulo = normalize(titulo)
        descripcion = normalize(descripcion)

        if (titulo.includes(find)){
            filtrado.push(i)
        } 
        else if (descripcion.includes(find)){
            filtrado.push(i)
        }
    }
    return filtrado
}



// eventos
buscador.addEventListener("input", ()=>{
    if (buscador.value){
        // estoy filtrando
        for (i of productos){
            i.classList.add("d-none")
        }

        elementos_filtrados = filtrar(buscador.value, productos)

        for (i of elementos_filtrados){
            i.classList.remove("d-none")
        }

        if (!elementos_filtrados.length){
            error.classList.remove("d-none")
            error.innerText = "No se encontraron coincidencias para "+ buscador.value
            document.querySelector(".productos").appendChild(error)
        }
        else{
            error.classList.add("d-none")
        }

    }else{
        // no hay nada para filtrar
        for (i of productos){
            i.classList.remove("d-none")
        }
        error.classList.add("d-none")
    }
    
})