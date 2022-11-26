const celular = 7199918888;


function formatarNumeroCelular(celular) {
    const celularNumeroString = celular.toString();
    const dddCelular = celularNumeroString.slice(0, 2);
    const numeroCelSemDDD = celularNumeroString.slice(2);
    let stringNumCel01 = numeroCelSemDDD.substr(0, 4);
    let stringNumCel02 = numeroCelSemDDD.substr(4);
    let numeroRetorno = '';

    if (numeroCelSemDDD.length == !9) {
        return numeroRetorno = `${9} ${([stringNumCel01, stringNumCel02]).join('-')}`;
    } else {
        return numeroRetorno = `(${dddCelular}) ${9} ${([stringNumCel01, stringNumCel02]).join('-')}`;
    }
}


console.log(formatarNumeroCelular(celular));