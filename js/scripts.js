var teste = [];
var acertos = 0;
var jogadas = 0;
let items = [{
        id: 1,
        imageUrl: "/assets/gifs/bobrossparrot.gif",
    },
    {
        id: 2,
        imageUrl: "/assets/gifs/explodyparrot.gif",
    },
    {
        id: 3,
        imageUrl: "/assets/gifs/fiestaparrot.gif",
    },
    {
        id: 4,
        imageUrl: "/assets/gifs/metalparrot.gif",
    },
    {
        id: 5,
        imageUrl: "/assets/gifs/revertitparrot.gif",
    },
    {
        id: 6,
        imageUrl: "/assets/gifs/tripletsparrot.gif",
    },
    {
        id: 7,
        imageUrl: "/assets/gifs/unicornparrot.gif",
    },
];
var cardsLimit;
var cardsConcat = [];

var cardselected1;
var cardselected2;

getNumber();

function getNumber() {
    numero = prompt("digite um numero par de 4 ate 14");

    numero = parseInt(numero);

    if (!numero) {
        alert("Numero invalido");
        alert("Insira um numero valido !");
        getNumber();
    } else if (numero > 14 || numero <= 3) {
        alert("Insira um numero maior que 4 menor que 14");
        getNumber();
    } else if (numero % 2 == 0) {
        generatedCards(numero);
    } else {
        alert("Insira um numero par");
        getNumber();
    }
}

function generatedCards(numCards) {
    const row1 = document.getElementById("row1");
    const row2 = document.getElementById("row2");
    cardsLimit = numCards;

    let collectionCards = [];

    for (let i = 0; i < numCards / 2; i++) {
        collectionCards[i] = items[i];
    }

    cardsConcat = collectionCards.concat(collectionCards);

    cardsConcat.sort(comparador);

    teste = cardsConcat;

    for (let i = 0; i < cardsConcat.length / 2; i++) {
        row1.innerHTML += `
        <div id="${i}" class="flip-card">
            <div class="flip-card-inner">
                <div onclick="selectedCard(${i})" class="flip-card-front">
                    <img src="assets/images/front.png" alt="">
                </div>
                <div class="flip-card-back">
                    <img src="${cardsConcat[i].imageUrl}" alt="">
                </div>
            </div>
        </div>
        `;
    }

    for (let i = cardsConcat.length / 2; i < cardsConcat.length; i++) {
        row2.innerHTML += `
        <div id="${i}" class="flip-card">
             <div  class="flip-card-inner">
                <div onclick="selectedCard(${i})" class="flip-card-front">
                    <img src="assets/images/front.png" alt="">
                </div>
                <div class="flip-card-back">
                    <img src="${cardsConcat[i].imageUrl}" alt="">
                </div>
            </div>
         </div>
        `;
    }
}

function comparador() {
    return Math.random() - 0.5;
}

function selectedCard(index) {
    jogadas++;
    if (cardselected1 == null) {
        cardselected1 = document.getElementById(index);
        cardselected1.classList.add("selected");
        index1 = index
    } else {
        cardselected2 = document.getElementById(index);
        cardselected2.classList.add("selected");
        index2 = index
        checkCard(index1, index2);
    }
}

function checkCard(index1, index2) {
    if (cardsConcat[index1].id == cardsConcat[index2].id) {
        cardselected1 = undefined;
        cardselected2 = undefined;
        setTimeout(winGame, 500);
    } else {
        setTimeout(resetCardsSelectedsErro, 1000);
    }
}

function resetCardsSelectedsErro() {
    cardselected1.classList.remove("selected");
    cardselected2.classList.remove("selected");
    cardselected1 = undefined;
    cardselected2 = undefined;
}

function winGame() {
    acertos++;
    if (acertos == cardsLimit / 2) {
        alert("Você ganhou em " + jogadas + " jogadas!");
    }
}