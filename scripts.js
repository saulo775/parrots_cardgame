let qtCards = 0;

let deckOfCards = [
    'bobrossparrot', 
    'explodyparrot', 
    'fiestaparrot', 
    'metalparrot',
    'revertitparrot',
    'tripletsparrot',
    'unicornparrot'
];


let validate = false;
while (validate === false) {
    qtCards = prompt("Com quantas cartas quer jogar? (numeros pares de 4 a 14");
    validate = validateQtCards(qtCards);
}

/*====FUNÇÃO DE VALIDAR NUMERO DE CARTAS===*/
function validateQtCards(qtCards){
    if ((qtCards < 4) || (qtCards > 14) || (qtCards % 2 !== 0)) {
        return false;
    }else{
        toDealCards(qtCards);
        return true;
    }
}

/*====FUNÇÃO DE ESPALHAR CARTAS===*/
function toDealCards(qtCards){
    let teste = document.querySelector('main');

    let newDeck = newDeckOfCards(qtCards);
    newDeck.sort(shuffleCards);

    //console.log(newDeck);
    for (let i = 0; i < newDeck.length; i++) {
        teste.innerHTML =  teste.innerHTML +    `<div class="card" data-identifier="card">
                                                    <div class="face back-face" data-identifier="back-face">
                                                        <img src="./assets/${newDeck[i]}.gif" alt="">
                                                    </div>
                                                    <div class="face front-face" data-identifier="front-face">
                                                        <img src="./assets/front.png" alt="">
                                                    </div>
                                                </div>`
    }
}

/*====FUNÇÃO DE RECRIAR O DECK DE CARTAS===*/
function newDeckOfCards(qtCards) {
    let arrayAux = [];
    deckOfCards.sort(shuffleCards);
    //console.log(deckOfCards);
    for (let i = 0; i < qtCards/2; i++) {
        arrayAux.push(deckOfCards[i]);
    }
    for (let i = 0; i < qtCards/2; i++) {
        arrayAux.push(deckOfCards[i]);
    }

    return arrayAux;    
}


/*====FUNÇÃO DE EMBARALHAR CARTAS===*/

function shuffleCards() {
    return Math.random() - 0.5;    
}