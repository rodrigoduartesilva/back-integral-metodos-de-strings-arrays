const email = "jose.messias@cubos.com.br";

function validarEmail(email) {
    const encontraSinalArroba = email.indexOf('@');
    const emailDividirString = email.split('@');
    const emailParteInicial = emailDividirString[0];
    const emailParteFinal = emailDividirString[1];


    if (encontraSinalArroba > 0) {
        if (emailParteInicial[0] !== '.') {
            if (emailParteFinal.lastIndexOf('.') !== emailParteFinal.length - 1) {
                if (emailParteFinal.indexOf('.') !== -1) {
                    return 'E-mail válido.'
                } else {
                    return 'E-mail inválido. Informe o domínio do e-mail.';
                }
            } else {
                return 'E-mail inválido. O e-mail não pode terminar com um .';
            }
        } else {
            return 'E-mail inválido. O e-mail não pode iniciar com um .';
        }
    } else {
        return 'E-mail inválido. Sinal de @ não digitado.';
    }

}

console.log(validarEmail(email));