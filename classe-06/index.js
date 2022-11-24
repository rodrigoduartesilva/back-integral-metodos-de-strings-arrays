const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];
const frutasInverso = '';

function frutasInversor(frutas) {
    const frutasInverso = frutas.reverse();
    return frutas;
}

function frutasDelAdd(frutas) {
    frutas.shift();
    frutas.pop();
    frutas.push('Melão');

    return frutas;
}



console.log(frutasDelAdd(frutas));