# Cards

### Game
  - Array `this.players`

### Player (game)
  - Game `this.game = game`
  - Array `this.hand`

### Deck (game)
  - Game `this.game = game`
  - Array `this.cards`
  - Function `shuffle()`
    - for random number between 3-5
      - [Fisher-Yates](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle) shuffle `this.cards`
  - Function `create()`
    - For each `suit/val`
      - `card = New Card(suit, val)`
      - push card into `this.cards`

### Card (val, suit)
  - String `this.suit = suit`
  - String `this.val = val`
