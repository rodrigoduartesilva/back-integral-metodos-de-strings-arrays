let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";
let tags = ['financeiro', 'administrativo', 'geral'];

function idCorrigido(identificador) {
    let identificadorCorrigido = identificador.padStart(6, 0);
    console.log(identificadorCorrigido);
}

function corrigirNomeMaiuscula(nome) {
    let nomeCorrigir = nome.split(' ');
    let primeiraLetraUp = '';

    for (let i = 0; i < nomeCorrigir.length; i++) {
        let nomeDiv = '';

        nomeDiv = nomeCorrigir[i].split('');
        primeiraLetraUp += `${nomeDiv[0].toUpperCase() + nomeDiv.slice(1).join('')} `;
    }

    console.log(primeiraLetraUp.trim());
}

function emailSemEspaco(email) {
    console.log(email.trim());
}

function unirTags(tags) {
    console.log(tags.join(', '));
}

idCorrigido(identificador);
corrigirNomeMaiuscula(nome);
emailSemEspaco(email);
unirTags(tags);