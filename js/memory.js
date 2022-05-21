class MemoryGame {
  constructor(cards) {
    this.cards          = cards;    // Initial ordered array of cards
    this.pickedCards    = [];       // Currently picked couple of cards
    this.pairsClicked   = 0;        // Counting user attempts
    this.pairsGuessed   = 0;        // Counting matched pairs

    this.shuffleCards();
  }

  reset() {
    this.pickedCards    = [];
    this.pairsClicked   = 0;
    this.pairsGuessed   = 0;

    this.shuffleCards();
  }

  shuffleCards() {
    // ... write your code here

    // 1. Écrire la fonction "randomCompare" de comparaison qui retourne une valeur aléatoire dans l'interval [| -1, 2 |[
    function randomCompare1(a, b) {
      const initialFloat  = Math.random() * 3;          // -> Nombre réel entre 0 et 3 (exclu)  -> [0, 3[
      const initialInt    = Math.floor(initialFloat);   // -> Nombre entier entre 0 et 2 (inclu) -> [| 0, 2|]
      const final         = initialInt - 1;             // -> Nombre entier entre -1 et 1 (inclu) -> [| -1, 1|]

      return final; // Entier dans [| -1, 1 |]
    }

    function randomCompare2(a, b) {

      return Math.random() - 0.5;   // Nombre entre -0.5 et 0.5
    }

    // 2. "Trier" le tableau avec .sort(randomCompare)
    if (this.cards) {
          this.cards.sort(randomCompare2);
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;

    if (Object.is(card1, card2)) {    // MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
      this.pairsGuessed++;
      return true;
    } else {
      return false;
    }
  }

  checkIfFinished() {
    const totalPairs = this.cards.length / 2;

    return this.pairsGuessed === totalPairs;
  }
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
