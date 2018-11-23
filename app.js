let Game = require("./Game.js");
let Deck = require("./Deck.js");
let Player = require("./Player.js");

let game = new Game();

let sam = new Player(game, "sam");
let mas = new Player(game, "mas");
let fap = new Player(game, "fap");

let deck = new Deck(game);
deck.shuffle();
deck.deal();
deck.deal();
console.log(deck.cards);

game.players.forEach(player => {
  console.log(player.name, player.hand);
})
