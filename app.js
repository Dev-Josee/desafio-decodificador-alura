function criptografa() {

    var frase = document.getElementById("textoCripto").value.toLowerCase();


    var textoCripto = frase.replace(/e/img, "enter");
    var textoCripto = textoCripto.replace(/o/img, "ober");
    var textoCripto = textoCripto.replace(/i/img, "imes");
    var textoCripto = textoCripto.replace(/a/img, "ai");
    var textoCripto = textoCripto.replace(/u/img, "ufat");

    document.getElementById("textoDescripto").innerHTML = textoCripto;


}

function descriptografa() {

    var frase = document.getElementById("textoDescripto").value.toLowerCase();


    var textoCripto = frase.replace(/enter/img, "e");
    var textoCripto = textoCripto.replace(/ober/img, "o");
    var textoCripto = textoCripto.replace(/imes/img, "i");
    var textoCripto = textoCripto.replace(/ai/img, "a");
    var textoCripto = textoCripto.replace(/ufat/img, "u");

    document.getElementById("textoDescripto").innerHTML = textoCripto;

}

function copiar(){
    var results = document.querySelector("#textoDescripto");
    results.select();
    document.execCommand("copy");
}

var btn = document.querySelector("#btn-criptado");
btn.onclick = criptografa;

var btn2 = document.querySelector("#btn-descriptado");
btn2.onclick = descriptografa;

var btn3 = document.querySelector("#copiar");
btn3.onclick = copiar;

