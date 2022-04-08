getNumber();

let numberCards;

function getNumber() {
    numero = prompt("digite um numero par de 4 ate 14")

    numero = parseInt(numero);

    console.log(numero)

    if (!numero) {
        alert("Numero invalido");
        alert("Insira um numero valido !")
        getNumber();
    }

    if (numero > 14) {
        alert("Insira um numero menor que 14");
        getNumber();
    }

    if ((numero % 2) == 0) {
        numberCards = number
        generatedCards(numberCards);
    }
}

function generatedCards(numCards) {

}