let Card = require('../Card');
let Deck = require('../Deck');

let deck = [];
['heart', 'diamond', 'spade', 'club'].forEach(suit => {
  ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10',
    'J', 'Q', 'K'].forEach(num => {
      deck.push(new Card(suit, num));
    })
});

module.exports = new Deck(deck)
