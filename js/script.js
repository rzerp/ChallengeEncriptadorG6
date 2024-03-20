function validarCampoTexto(event) {
    var texto = event.target.value.toLowerCase();
    var valido = /^[a-z\sñ]*$/.test(texto);
    if (!valido) {
        event.target.value = texto.slice(0, -1);
    }
}

function encriptar() {
    let texto = document.getElementById("campo-texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let imginicio = document.getElementById("imginicio");
    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imesr")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
    if (texto.length != 0) {
        document.getElementById("campo-texto").value = textoCifrado;
        tituloMensaje.textContent = "El texto ha sido encriptado";
        parrafo.textContent = "";
        imginicio.src = "./img/encriptado.png";
    } else {
        imginicio.src = "./img/encriptando.gif";
        tituloMensaje.textContent = "No se ha encontrado mensaje";
        parrafo.textContent = "Ingresa el texto a encriptar";
        alert("Ingresa el texto");
    }
}

function desencriptar() {
    let texto = document.getElementById("campo-texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let imginicio = document.getElementById("imginicio");
    let textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imesr/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
    if (texto.length != 0) {
        document.getElementById("campo-texto").value = textoCifrado;
        tituloMensaje.textContent = "El texto ha sido desencriptado";
        parrafo.textContent = "";
        imginicio.src = "./img/desencriptado.png";
    } else {
        imginicio.src = "./img/encriptando.gif";
        tituloMensaje.textContent = "No se ha encontrado mensaje";
        parrafo.textContent = "Ingresa el texto a encriptar";
        alert("Ingresa el texto a encriptar");
    }
}