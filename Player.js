module.exports = class Player {
  constructor(game, name) {
    this.game = game;
    this.name = name;
    this.hand = [];
    game.players.push(this);
  }
} 
