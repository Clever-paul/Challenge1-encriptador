
function mostrarInfo(){
    let x = document.getElementById('cont-mensaje');
    let y = document.getElementById('info');
    if (x.style.display === 'none'){
        x.style.display = 'block';
        y.style.display = 'none';
    }else{
        x.style.display = 'none';
        y.style.display = 'block';
    }
}

function encriptar(){
    let mensaje = document.getElementById("texto").value;
    let mensajeEncriptado = document.getElementById("textoencriptado");
    var nuevoMensaje = mensaje.replace(/a/g, "ai")
                       .replace(/e/g, "enter")
                       .replace(/i/g, "imes")
                       .replace(/o/g, "ober")
                       .replace(/u/g, "ufat");

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

let btnEncriptar = document.getElementById("encriptar");
btnEncriptar.addEventListener("click", encriptar);
let btnDesencriptar = document.getElementById("desencriptar");
btnDesencriptar.addEventListener("click", desencriptar);