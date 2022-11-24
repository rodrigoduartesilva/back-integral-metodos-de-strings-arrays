const texto = "Aprenda programar do zero na Cubos Academy";


function urlAmigavel(texto) {
    texto = (texto.split(' ').join('-')).toLowerCase();
    console.log(texto);
}

urlAmigavel(texto);