const SUITS = ['hearts', 'spades', 'clubs', 'diamonds'];
const VALS = ['A', '2', '3', '4', '5', '6', '7',
  '8', '9', '10', 'J', 'Q', 'K'];

let Card = require('./Card.js');

module.exports = class Deck {
  constructor(game) {
    this.game = game;
    this.cards = [];
    this.create();
  }

  create() {
    SUITS.forEach(suit => {
      VALS.forEach(val => {
        this.cards.push(new Card(val, suit));
      });
    });
  }

  shuffle() {
    for(let i = 0; i < (Math.floor(Math.random() * 5 - 3 + 1) + 3); i++) {
      let currentIndex = this.cards.length, temporaryValue, randomIndex;

      while(0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = this.cards[currentIndex];
        this.cards[currentIndex] = this.cards[randomIndex];
        this.cards[randomIndex] = temporaryValue;
      }
    }
  }

  deal() {
    this.game.players.forEach(player => {
      let card = this.cards.pop();
      player.hand.push(card);
    })
  }
}
