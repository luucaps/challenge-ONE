const textArea = document.querySelector(".pagina__inserir__titulo");
const mensagem = document.querySelector(".pagina__resultado__text");

function botaoEncriptar(){
    const textoEncriptado = encripto(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}


function encripto(stringEncriptar) {

    let matrizCodigo = [["e", "enter"] , ["i", "imes"] , ["a", "ai"] , 
["o", "ober"] , ["u", "ufat"]];
    stringEncriptar = stringEncriptar.toLowerCase();

    for(let i = 0; i <matrizCodigo.length; i++) {
        if(stringEncriptar.includes(matrizCodigo[i][0])){
            stringEncriptar = stringEncriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptar
}

function botaoDesencriptar(){
    const textoDesencriptado = desencripto(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
}


function desencripto(stringDesencriptar) {

    let matrizCodigo = [["e", "enter"] , ["i", "imes"] , ["a", "ai"] , 
["o", "ober"] , ["u", "ufat"]];
    stringDesencriptar = stringDesencriptar.toLowerCase();

    for(let i = 0; i <matrizCodigo.length; i++) {
        if(stringDesencriptar.includes(matrizCodigo[i][1])){
            stringDesencriptar = stringDesencriptar.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencriptar
}
