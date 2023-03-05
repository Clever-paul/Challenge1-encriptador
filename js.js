
function mostrarInfo(){
    let x = document.getElementById('cont-mensaje');
    let y = document.getElementById('info');
    if(y.style.display !== 'none' ){
        x.style.display = 'block';
        y.style.display = 'none'
    }
}

function encriptar(){
    let mensaje = document.getElementById("texto").value;
    let mensajeEncriptado = document.getElementById("textoencriptado");
    let nuevoMensaje = mensaje
                       .replace(/e/g, "enter")
                       .replace(/i/g, "imes")
                       .replace(/o/g, "ober")
                       .replace(/u/g, "ufat")
                       .replace(/a/g, "ai");

    mensajeEncriptado.value = nuevoMensaje;                 
}
function desencriptar(){
    let mensaje = document.getElementById("texto").value;
    let mensaDesencriptado = document.getElementById("textoencriptado");
    let nuevoMensaje = mensaje.replace(/ai/g, "a")
                            .replace(/enter/g, "e")
                            .replace(/imes/g, "i")
                            .replace(/ober/g, "o")
                            .replace(/ufat/g, "u");
    mensaDesencriptado.value = nuevoMensaje;
}

function copiar(){
    let mensajeCopiar =  document.getElementById("textoencriptado");
    navigator.clipboard.writeText(mensajeCopiar.value);   
}

let btnEncriptar = document.getElementById("encriptar");
btnEncriptar.addEventListener("click", encriptar);
btnEncriptar.addEventListener("click", mostrarInfo)
let btnDesencriptar = document.getElementById("desencriptar");
btnDesencriptar.addEventListener("click", desencriptar);
btnDesencriptar.addEventListener("click", mostrarInfo);
let btnCopiar = document.getElementById("copiar");
btnCopiar.addEventListener("click", copiar);