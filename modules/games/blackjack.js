let Player = require("../Player.js");

class Blackjack {
  constructor(players, deck) {
    this.players = players.map(name => new Player(name));
    this.deck = deck;
    this.dealer = new Player('Dealer');
  }

  startHand() {
  }
}

module.exports = Blackjack;
