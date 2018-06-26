var Yoda = {
  name: "Yoda",
  health: 110,
  attack: 7,
  counterAttack: 5
};

var Obiwan = {
  name: "Obiwan",
  health: 100,
  attack: 10,
  counterAttack: 7
};

var Bane = {
  name: "Darth Bane",
  health: 110,
  attack: 10,
  counterAttack: 7
};
var Dooku = {
  name: "Darth Bane",
  health: 90,
  attack: 10,
  counterAttack: 7
};
var player;
var cpu;

// start game
function game() {
  var turn = true;
}
while (true) {
  if (turn) {
    game.player_1.playerMove();
  } else {
    game.player_2.playerMove();
  }
  turn = !turn;
  // if player wins, select another enemy until no more enemy
  // if player lose, start over

  if (gameOver) {
    break; // Break out of the loop if the game is over.
  }
  turn = !turn;

  // select character - increase size
  // mouse click on the character for player
  // mouse click on the opponet

  //
  // if player health = 0, they lose
  // if all cpu health = 0, computer win

  // combat - player gets first attack - using attack stat.

  //Attack button - subtrack player attack# from enemy health
  // subtrack enemy counter attack from player health
  // update player and enemy health

  // battle continues until either player or enemy health === 0;
}
//combat
var battle1 = function() {
  return player.attackPower - enemy.health;
};
// button to start game.
var battle2 = function() {};
