getNumber();

function getNumber() {
    numero = prompt("digite um numero par de 4 ate 14")

    numero = parseInt(numero);

    console.log(numero)

    if (!numero) {
        alert("Numero invalido");
        alert("Insira um numero valido !")
        getNumber();
    }
}