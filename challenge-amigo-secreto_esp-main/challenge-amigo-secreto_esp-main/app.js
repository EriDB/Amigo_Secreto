// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = [];
let nombre = "";

function asignarTexto(elemento, texto) {
    let textoCambiadoHTML = document.querySelector(elemento);
    textoCambiadoHTML.innerHTML = texto; 
}

function agregarAmigo() {
    nombre = document.getElementById("amigo").value;
    //console.log(nombre);
    if (nombre =="" || nombre == " "){
        alert("Escriba un nombre, por favor")
    } else{
        if(nombres.includes(nombre)){
            limpiarCaja();
            alert(`Ya esta el nombre de ${nombre} en la lista, ingrese otro nombre por favor`);
        } else{
            condicionesIniciales();
            nombres.push(nombre);
            //console.log(nombres);
            //console.log(nombres.pop());
            let ul = document.getElementById("listaAmigos");
            for (i=0;i<nombres.length;i++){
                let li = document.createElement("li");
                li.textContent = nombres[i];
                ul.appendChild(li);
            }
            
            document.getElementById("listaAmigos");
        }
    }
}

function condicionesIniciales (){
    asignarTexto("h2","Digite el nombre de sus amigos");
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    limpiarCaja();
}

function limpiarCaja(){
    let caja = document.querySelector("#amigo");
    caja.value = "";
}

function sortearAmigo(){
    if(nombres.length>1){
        let nombreAleatorio = Math.floor(Math.random()*nombres.length);
        let amigoSecreto = nombres[nombreAleatorio];
        condicionesIniciales();
        document.getElementById("resultado").innerHTML = amigoSecreto;
        nombres = [];
    } else {
        alert("Para jugar agrega minimo 2 nombres, por favor");
    }
}