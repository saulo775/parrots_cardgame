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
    let main = document.querySelector('main');

    let newDeck = newDeckOfCards(qtCards);
    newDeck.sort(shuffleCards);

    for (let i = 0; i < newDeck.length; i++) {
        main.innerHTML = main.innerHTML +    `<div class="card" onclick="showCard(this)" data-identifier="card">
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
    for (let i = 0; i < qtCards/2; i++) {
        arrayAux.push(deckOfCards[i]);
        arrayAux.push(deckOfCards[i]);
    }
    return arrayAux;    
}


/*====FUNÇÃO DE EMBARALHAR CARTAS===*/

function shuffleCards() {
    return Math.random() - 0.5;    
}

/*====FUNÇÃO DE VIRAR CARTA===*/

let arrayCompare = [];
function showCard(card){
    card.classList.add('active');

    arrayCompare.push(card);

    if (arrayCompare.length === 2) {
        if (getSource(arrayCompare, 0) !==  getSource(arrayCompare, 1)) {
            for (let i = 0; i < arrayCompare.length; i++) {
               setTimeout(removeClassActive, 1000, arrayCompare);
            }
        }else {
            arrayCompare.length = 0
        }
    }
}

function getSource(array, position) {
    return array[position].querySelector('img').getAttribute('src')
}


function removeClassActive(array){
    for (let i = 0; i < array.length; i++) {
        arrayCompare[i].classList.remove('active');
    }
    arrayCompare.length = 0;
}
