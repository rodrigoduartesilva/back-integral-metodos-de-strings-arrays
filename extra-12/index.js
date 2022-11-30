const nome = 'Guido Cerqueira';

function criarNickname(nome) {
    let modificarNome = nome.toLowerCase();
    let resultadoMinusculas = '';
    let sinalArroba = '@';
    let resultadoFinal = '';

    while (modificarNome !== resultadoMinusculas) {
        resultadoMinusculas = modificarNome;
        modificarNome = modificarNome.replace(' ', '');
    }

    modificarNome = sinalArroba + modificarNome;

    if (modificarNome.length > 13) {
        resultadoFinal = modificarNome.slice(0, 13);
        console.log(resultadoFinal);
    } else {
        console.log(modificarNome);
    }


}




criarNickname(nome);