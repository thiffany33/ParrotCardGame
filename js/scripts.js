var teste = [];

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
    if (cardselected1 == null) {
        console.log("primeiro");
        cardselected1 = document.getElementById(index);
        cardselected1.classList.add("selected");
    } else {
        console.log("segundo");
        cardselected2 = document.getElementById(index);
        cardselected2.classList.add("selected");
    }
    console.log(cardselected1, cardselected2);
}