getNumber();

let numberCards;



function getNumber() {
    numero = prompt("digite um numero par de 4 ate 14");

    numero = parseInt(numero);

    if (!numero) {
        alert("Numero invalido");
        alert("Insira um numero valido !");
        getNumber();
    }

    if (numero > 14 || numero <= 3) {
        alert("Insira um numero maior que 4 menor que 14");
        getNumber();
    }

    if (numero % 2 == 0) {
        generatedCards(numero);
    }
}

function generatedCards(numCards) {
    const cards = document.getElementById("cards");

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
            imageUrl: "/assets/gifs/revertparrot.gif",
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

    for (var i = 1; i < numCards + 1; i++) {

        cardPic = items.find((item) => item.id === i);
        console.log(cardPic);
        cards.innerHTML += `
        <div class="contentCards">
            <img src="${cardPic.imageUrl}" alt="">
            <!-- <img src="assets/gifs/bobrossparrot.gif" alt=""> -->
        </div>
    `;
    }
}