function tocaSom (seletorAudio) {

    const elemento = document.querySelector(seletorAudio);

    if ( elemento != null && elemento.localName === 'audio') {
        elemento.play();
    } else {
        alert("Elemeto não encontrado ou seletor inválido!");
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for(let indice = 0; indice < listaDeTeclas.length; indice++) {

    const tecla = listaDeTeclas[indice];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    //evento click
    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    //evento teclado
    tecla.onkeydown = function (evento) {
       // console.log(evento)

        if(evento.code === "Enter" || evento.code === "Space") {
            tecla.classList.add('ativa');
        }
        
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}
     
   



