const nomeArquivo = 'Foto da Familia.pdf';


function determinarExtensao(nomeArquivo) {
    const localizarPonto = nomeArquivo.indexOf('.');
    const localizarExtensao = nomeArquivo.slice(localizarPonto + 1);

    if (localizarExtensao === 'jpg' || localizarExtensao === 'jpeg' || localizarExtensao === 'gif' || localizarExtensao === 'png') {
        console.log('Arquivo válido');
    } else {
        console.log('Arquivo inválido');
    }
}


determinarExtensao(nomeArquivo);