document.addEventListener('DOMContentLoaded', () => {
    //opçoes de cartão
    const cardArray = [
      {
        name: 'img1',
        img:'img/img1.jpg'
    },
    {
        name: 'img2',
        img:'img/img2.jpg'
    },
    {
        name: 'img3',
        img: 'img/img3.jpg'
    },
    {
        name: 'img4',
        img: 'img/img4.jpg'
    },
    {
        name: 'img5',
        img: 'img/img5.jpg'
    },
    {
        name: 'img6',
        img: 'img/img6.jpg'
    },
    {
        name: 'img1',
        img: 'img/img1.jpg'
    },
    {
        name: 'img2',
        img:'img/img2.jpg'
    },
    {
        name: 'img3',
        img:'img/img3.jpg'
    },
    {
        name: 'img4',
        img: 'img/img4.jpg'
    },
    {
        name: 'img5',
        img: 'img/img5.jpg'
    },
    {
        name: 'img6',
        img: 'img/img6.jpg'
    },
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#acertos')
    const errorDisplay = document.querySelector('#erros')
    const errorTitle = document.querySelector('#erro')
    const acertoTitle = document.querySelector('#acerto')
    const fim = document.querySelector('#fim')

    let erro = 0;
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []

//crie seu quadro
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'img/quadrado.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

    //vire seu cartão
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
}
//verificar se há correspondencia
function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'img/quadrado.png')
      cards[optionTwoId].setAttribute('src', 'img/quadrado.png')
      alert('Você clicou na mesma imagem!')
      erro++
      errorDisplay.textContent = " " + erro
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('Você encontrou!')
      cards[optionOneId].setAttribute('src', 'img/white.png')
      cards[optionTwoId].setAttribute('src', 'img/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'img/quadrado.png')
      cards[optionTwoId].setAttribute('src', 'img/quadrado.png')
      alert('Desculpe, tente novamente!')
      erro++
      errorDisplay.textContent = " " + erro
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent =" " + cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      errorTitle.style.display = "none"
      acertoTitle.style.display = "none"
      fim.textContent = ' Parabéns! Você encontrou todos eles!'
    }
  }
  createBoard()
})
function recarregar(){
  window.location.reload();
}