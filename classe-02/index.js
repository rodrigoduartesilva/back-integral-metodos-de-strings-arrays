const cpf = "12345678900";
const cnpj = "12345678000199";

if (cpf.length !== 11) {
    console.log('CPF Inválido.');
} else {
    const cpfFormat = `${cpf.substr(0, 3)}.${cpf.substr(3, 3)}.${cpf.substr(6, 3)}-${cpf.substr(9, 2)}`;
    console.log(cpfFormat);
}

if (cnpj.length !== 14) {
    console.log('CNPJ Inválido.');
} else {
    const cnpjFormat = `${cnpj.substr(0, 2)}.${cnpj.substr(2, 3)}.${cnpj.substr(5, 3)}/${cnpj.substr(8, 4)}-${cnpj.substr(12, 2)}`;
    console.log(cnpjFormat);
}