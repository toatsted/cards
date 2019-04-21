let deck = require("./modules/decks/52Card");
let Blackjack = require('./modules/games/blackjack');
let Player = require("./modules/Player");

let bj = new Blackjack(['p1'], deck)

bj.startHand();

console.log(bj.players)
