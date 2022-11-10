const cardArray = [
    {
        name: 'alpukat', 
        img: "images/alpukat.png",
    },
    {
        name: 'kiwi', 
        img: "images/kiwi.png",
    },
    {
        name: 'nanas', 
        img: "images/nanas.png",
    },
    {
        name: 'rambutan', 
        img: "images/rambutan.png",
    },
    {
        name: 'semangka', 
        img: "images/semangka.png",
    },
    {
        name: 'delima', 
        img: "images/delima.png",
    },
    {
        name: 'alpukat', 
        img: "images/alpukat.png",
    },
    {
        name: 'kiwi', 
        img: "images/kiwi.png",
    },
    {
        name: 'nanas', 
        img: "images/nanas.png",
    },
    {
        name: 'rambutan', 
        img: "images/rambutan.png",
    },
    {
        name: 'semangka', 
        img: "images/semangka.png",
    },
    {
        name: 'delima', 
        img: "images/delima.png",
    }
]

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result')

let cardChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/buahbuahan.png')
        card.setAttribute("data-id", i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
        
    }
}
createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    console.log(cards);
    console.log('check for match!');

    if(optionOneId == optionTwoId) {
        cards[optionOneId]. setAttribute('src', 'images/buahbuahan.png')
        cards[optionTwoId]. setAttribute('src', 'images/buahbuahan.png')
        alert('you have clicked same image')
    }

    if(cardChosen[0] === cardChosen[1]){
        alert('you found a match!')
        cards[optionOneId]. setAttribute('src', 'images/white.png')
        cards[optionTwoId]. setAttribute('src', 'images/white.png')
        cards[optionOneId]. removeEventListener('click', flipCard)
        cards[optionTwoId]. removeEventListener('click', flipCard)
        cardsWon.push(cardChosen)
    }
    else {
        cards[optionOneId]. setAttribute('src', 'images/buahbuahan.png')
        cards[optionTwoId]. setAttribute('src', 'images/buahbuahan.png')
        alert('sorry try again')
    }

    resultDisplay.innerHTML = cardsWon.length
    cardChosen = []
    cardsChosenIds = []

    if(cardsWon.length == cardArray.length/2) {
        resultDisplay.innerHTML = 'congratulations you found them all'
    }
}

function flipCard() {
    const cardId = this.getAttribute("data-id")
    console.log(cardArray);
    // console.log(cardArray[cardId].name);
    cardChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId)
    console.log(cardChosen);
    console.log(cardsChosenIds);

    this.setAttribute('src', cardArray[cardId].img);
    if (cardChosen.length === 2) {
        setTimeout(checkMatch, 500)  
    }
}