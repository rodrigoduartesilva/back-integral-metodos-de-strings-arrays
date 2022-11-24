const comentario = "Esse COVID é muito perigoso!";

const uppeCFrase = comentario.toUpperCase();

const verificacao = uppeCFrase.includes('COVID') || uppeCFrase.includes('PANDEMIA');


if (verificacao) {
    console.log('Comentário bloqueado por conter palavras proibidas');
}