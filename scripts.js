let qtCards = 0;
let totalCards = 0;
let counterCorrectCards=0;
let counterClickCards = 0;
let stopwatch = 0;
let interval;

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

function askNumberCards() {
    while (validate === false) {
        qtCards = prompt("Com quantas cartas quer jogar? (numeros pares de 4 a 14)");
        validate = validateQtCards(qtCards);
    }
}

function validateQtCards(qtCards){
    document.querySelector('.counter h2').innerHTML = "0"
    if ((qtCards < 4) || (qtCards > 14) || (qtCards % 2 !== 0)) {
        return false;
    }else{
        toDealCards(qtCards);
        totalCards = parseInt(qtCards);
        interval = setInterval(activeStopwatch, 1000);
        return true;
    }
}

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

function activeStopwatch(){
    let counter = document.querySelector('.counter h2');
    stopwatch = stopwatch + 1;
    counter.innerText = `${stopwatch}`;
}

function newDeckOfCards(qtCards) {
    let arrayAux = [];
    deckOfCards.sort(shuffleCards);
    for (let i = 0; i < qtCards/2; i++) {
        arrayAux.push(deckOfCards[i]);
        arrayAux.push(deckOfCards[i]);
    }
    return arrayAux;    
}

function shuffleCards() {
    return Math.random() - 0.5;    
}

let arrayCompare = [];
function showCard(card){
    card.classList.add('active');
    counterClickCards++;
    arrayCompare.push(card);

    if (arrayCompare.length === 2) {
        if (getSource(arrayCompare, 0) !==  getSource(arrayCompare, 1)) {
            for (let i = 0; i < arrayCompare.length; i++) {
               setTimeout(removeClassActive, 1000, arrayCompare);
            }
        }else {
            arrayCompare.length = 0;
            counterCorrectCards+=2;
        }
    }

    if (counterCorrectCards === totalCards) {
        setTimeout(resultGame, 300);
        setTimeout(playAgain, 300);
    }
}

function resultGame() {
    window.alert(`Você ganhou em ${counterClickCards} jogadas e em ${stopwatch} segundos`);
    clearInterval(interval);
    stopwatch = 0;
}

function getSource(array, position) {
    return array[position].querySelector('img').getAttribute('src');
}

function removeClassActive(array){
    for (let i = 0; i < array.length; i++) {
        arrayCompare[i].classList.remove('active');
    }
    arrayCompare.length = 0;
}

function playAgain() {
    let response = prompt("Vamos jogar novamente? (sim/não)");

    if (response.toUpperCase() === "SIM") {
        document.querySelector('main').innerHTML = ""
        validate = false;
        counterCorrectCards=0;
        counterClickCards = 0;

        askNumberCards();
    }
}