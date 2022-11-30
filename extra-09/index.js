const nomes = ['Juninho', 'Léo', 'Guido', 'Dina', 'Vitinho', 'Nanda'];
const tamanhoDoGrupo = 4;

function separarGrupos(nomes, tamanhoDoGrupo) {
    const grupo1 = nomes.slice(0, tamanhoDoGrupo);
    const grupo2 = nomes.slice(tamanhoDoGrupo);

    console.log(`Grupo 1: ${grupo1}`);
    console.log(`Grupo 2: ${grupo2}`);
}


separarGrupos(nomes, tamanhoDoGrupo);