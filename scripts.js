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
        toDealCards();
        return true;
    }
}

/*====FUNÇÃO DE ESPALHAR CARTAS===*/
function toDealCards(){
    let teste = document.querySelector('main');
    //deckOfCards.sort(shuffleCards);
    for (let i = 0; i < deckOfCards.length; i++) {
        teste.innerHTML =  teste.innerHTML +    `<div class="card" data-identifier="card">
                                                    <div class="face back-face" data-identifier="back-face">
                                                        <img src="./assets/${deckOfCards[i]}.gif" alt="">
                                                    </div>
                                                    <div class="face front-face" data-identifier="front-face">
                                                        <img src="./assets/front.png" alt="">
                                                    </div>
                                                </div>`
    }
}

''