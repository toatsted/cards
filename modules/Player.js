class Player {
  constructor(name) {
    this.name = name;
    this.hand = [];
  }

  deal(deck) {
    this.hand.push(deck.pop());
  }
}

module.exports = Player;
