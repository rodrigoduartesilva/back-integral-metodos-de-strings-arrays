const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;

function acharCarros(nomes, posicao) {
    const carrosLocalizados = nomes.slice(posicao, posicao + 3).toString();
    let modificar = carrosLocalizados;
    let resultado = '';

    while (modificar !== resultado) {
        resultado = modificar;
        modificar = modificar.replace(',', ' - ');
    }

    console.log(resultado);
}


acharCarros(nomes, posicao);