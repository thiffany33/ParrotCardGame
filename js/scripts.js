getNumber();

let numberCards;

function getNumber() {
    numero = prompt("digite um numero par de 4 ate 14")

    numero = parseInt(numero);

    if (!numero) {
        alert("Numero invalido");
        alert("Insira um numero valido !")
        getNumber();
    }

    if (numero > 14 || numero <= 3) {
        alert("Insira um numero maior que 4 menor que 14");
        getNumber();
    }

    if ((numero % 2) == 0) {
        generatedCards(numero);
    }
}

function generatedCards(numCards) {
    for (var i = 0; i < numCards; i++) {
        console.log(i)
    }
}