const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
    this.classList.add('flip');

    if (!hasFlippedCard) {
        // first click
        hasFlippedCard = true;
        firstCard = this;
    } else {
        // second click
        hasFlippedCard = false;
        secondCard = this;
        // do cards match?
        checkForMatch();
    }
}

function checkForMatch() {
    if (firstCard.dataset.name === secondCard.dataset.name) {
        // It's a match!
        disableCards();
    } else {
        // not a match :(
        unflipCards();
    }
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}

function unflipCards() {
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');                
    }, 1000)
}

cards.forEach(card => card.addEventListener('click', flipCard));
