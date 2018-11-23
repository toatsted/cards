# Cards

### Game
  - Function `init()`
    - Array `this.players`

### Card
  - Function `init(val, suit)`
    - String `this.suit = suit`
    - String `this.val = val`

### Player
  - Function `init(game, name)`
    - Game `this.game = game`
    - String `this.name = name`
    - Array `this.hand`
    - add `this` to `game.players`

### Deck
  - Function `init(game, name)`
    - Game `this.game = game`
    - Array `this.cards`
    - `this.create()`
    - `this.shuffle()`
  - Function `shuffle()`
    - for random number between 3-5
      - [Fisher-Yates](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle) shuffle `this.cards`
  - Function `create()`
    - For each `suit/val`
      - `card = New Card(suit, val)`
      - push card into `this.cards`
  - Function `deal()`
    - for each `player` in `this.game.players`
      - `card` = remove last element in `this.cards`
      - add `card` to `player.hand`
