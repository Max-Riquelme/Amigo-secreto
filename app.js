// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Crea la lista de amigos vacia
let listaAmigos = [];
// Crea lista de amigos que estan siendo elegidos
let amigosElegidos = [];
// Limpia la casilla para ingresar un nuevo nombre de amigo
function nuevoAmigo() {
    document.getElementById("amigo").value = "";
}

// Esta funcion crea una lista con el nombre ingresado
function agregarAmigo() {

    let nombreAmigo = document.getElementById("amigo").value
    // Da aviso que no se ha agregado ningun nombre
    if (nombreAmigo === "") {
        alert("No haz ingresado ningun nombre de amigo");
    
    // Revisa que no se haya ingresado un amigo duplicado
    } else if (listaAmigos.includes(nombreAmigo)){
        alert(`${nombreAmigo} ya esta ingresado, trata con un nuevo amigo`)
    // Si no es duplicado lo agrega al listado inicial
    } else {
    listaAmigos.push(nombreAmigo);
    // parametro de funcion para limpiar la casilla e ingresar el nombre de un amigo nuevo
    nuevoAmigo();
    // Muestra y ordena la lista de amigos ya ingresados
    const mostrarListaAmigos = document.getElementById("listaAmigos");
    
    const li = document.createElement("li");
    
    li.textContent = nombreAmigo;
    
    mostrarListaAmigos.append(li);

   }
}
// Esta funcion va a elegir el amigo secreto
function sortearAmigo() {
    let largoLista = listaAmigos.length;
    let amigoAlAzar = Math.floor(Math.random()* largoLista);
    const amigoSecreto = listaAmigos[amigoAlAzar];
// Si la lista esta vacia
    if (largoLista < 1) {
        alert("Para obtener un amigo secreto debes ingresar mas amigos");
    } else if (amigosElegidos.includes(amigoSecreto)) {
        if (largoLista > listaAmigos.length)
            return sortearAmigo();
        } else {
            let resultado = document.getElementById("resultado");
            resultado.textContent = `El amigo secreto es: ${amigoSecreto}`;
            
        }
}
