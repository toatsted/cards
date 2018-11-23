let Game = require("./Game.js");
let Deck = require("./Deck.js");
let Player = require("./Player.js");

class Blackjack extends Game {
  constructor() {
    super();
    new Player(this, "Dealer")
    new Player(this, "Player")
  }
}

let game = new Blackjack;

let deck = new Deck(game);
deck.shuffle();
deck.deal();
deck.deal();
console.log(deck.cards);

game.players.forEach(player => {
  console.log(player.name, player.hand);
})
