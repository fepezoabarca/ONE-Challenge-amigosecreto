// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Declaración de un array
let listadoAmigoSecreto = [];

function agregarAmigo(){
    //Obtener el valor del input
    let nombreAmigoSecreto =  document.getElementById('amigo').value;
    //Verificar que el input no esté vacio
    if (nombreAmigoSecreto != ''){
        //Agregar nombre de amigo al listado de amigo secreto
        listadoAmigoSecreto.push(nombreAmigoSecreto);
        //Limpiar input amigo
        document.querySelector('#amigo').value = '';
        //Crea nuevo elemento <li> 
        let nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = nombreAmigoSecreto;
        //Agregar el <li> a la listaAmigos <ul> utilizando el id
        document.getElementById("listaAmigos").appendChild(nuevoElemento);
        
    } else {
        alert('El campo no puede estar vacio. Por favor, ingrese un nombre válido.');
    }
}

function sortearAmigo(){
    //Generar un número al azar que sea menor al largo del array
    let numeroGenerado = Math.floor(Math.random()*listadoAmigoSecreto.length+1);  
    let resultado = document.getElementById('resultado')

    // A través de la variable titulo le damos un valor a la etiqueta h1
    resultado.innerHTML = `El amigo secreto sorteado es:  ${listadoAmigoSecreto[numeroGenerado]}`;
}