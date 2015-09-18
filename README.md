# promise-poll

Provides a function which resolves a promise which resolves within a given timeout if its predicate returns something truthy.

## Installation

```bash
npm install promise-poll
```

## Usage

```js
var poll = require('promise-poll');

poll(rollOddDice, 1000).then(function(roll) {
  console.log('odd dice roll:', roll);
}, function(err) {
    console.error(err);
});

function rollOddDice() {
  var diceRoll = Math.floor(Math.random() * 6) + 1;
  return diceRoll % 2 ? diceRoll : false;
}
```

## API

### poll(predicate, timeout[, interval:ms]) : Promise

#### predicate
a function which returns a truthy values, whose first truthy value will be used to resolve the Promise

#### timeout
the number of milliseconds to wait before declaring the Promise rejected

#### interval
the number of milliseconds between attempts to test the predicate
