const cpf = "011.022.033-44";

function removerPontuacao(cpf) {
    let modificar = cpf
    let resultado = '';

    while (modificar !== resultado) {
        resultado = modificar;
        modificar = modificar.replace('.', '').replace('-', '').replace('/', '');
    }

    console.log(resultado);
}

removerPontuacao(cpf);