//const MemoryGame = require("./memory");

const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  let firstCard;

  function f(el) {
    const name =  el.getAttribute('data-card-name') // "batman"
    return cards.find(el => el.name === name) // {name: 'batman', img: ''}
  }

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((currentCard) => {
    currentCard.addEventListener('click', () => {

      // First click
      if (!firstCard) {
        firstCard = currentCard;
        firstCard.classList.toggle('turned');

      // Second click
      } else {
        currentCard.classList.toggle('turned');

        const cardA = f(firstCard) // {name: 'batman'}
        const cardB = f(currentCard);
        let matched = memoryGame.checkIfPair(cardA, cardB);

        setTimeout(() => {      
          firstCard.classList.toggle('turned', matched);
          currentCard.classList.toggle('turned', matched);
          
          firstCard = undefined;    // Shouldn't be executed before the previous ones have been executed too

          // Updating score
        const clicked = document.getElementById("pairs-clicked").innerHTML = memoryGame.pairsClicked;
        const guessed = document.getElementById("pairs-guessed").innerHTML = memoryGame.pairsGuessed;

        // Checking if the game is finished
        if (memoryGame.checkIfFinished()) {
          alert('You guessed all the pairs, congrats !')

          let reset = prompt('Do you want to play again ? (Yes/No)')
          if (reset === 'Yes') { memoryGame.reset(); }
        }
        }, 1500);
      }
    });
  });
});
