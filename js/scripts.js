/* backend ------------*/
var roll1;
var roll2;
var player1;
var player2;
var currentPlayer;

//constructor function for player
function Player() {
  this.score = 0;
  this.active = false;
}
//this is just so i can visualize the player objects that are created
// player1 = {
//   this.score = 0;
//   this.active = false;
// }
//
// player2 = {
//   this.score = 0;
//   this.active = false;
// }

//roll function to be called each time die is rolled
var roll = function (){
  return Math.floor(Math.random() * 6) + 1;
}


//player prototype to be called on player to change status; need to incorporate conditional statement from frontend here
Player.prototype.activeStatus = function() {
  if((roll1 === 1) && (roll2 === 1)){
    changeStatus();
    this.score = 0;

  } else if(((roll1 === 1) && (roll2 !== 1))|| ((roll1 !== 1) && (roll2 === 1))){
    changeStatus();

  } else if((roll1 !== 1) || (roll2 !== 1)){
    this.score += (roll1 + roll2);
  }
}

var changeStatus = function(){
  if(player1.active === true){
    player1.active = false;
    player2.active = true;
    currentPlayer = player2;
  } else {
    player2.active = false;
    player1.active = true;
    currentPlayer = player1;
  }
}

/* frontend ------------*/
$(document).ready(function(){
//used .one() method so that on first click, new Player is created, but only on the first click; need to change screen so that player will be prompted to click again.
  $("button#clickOne").click(function(event){
    event.preventDefault();
    player1 = new Player();
    player2 = new Player();
    player1.active = true;
    currentPlayer = player1;
    $("form#page1").hide();
    $("div.row").show();
  });

//need to change screen so that player is prompted to click again; this includes prototype that needs to be moved to backend
  $("button#play").click(function(event){
    event.preventDefault();
    roll1 = roll();
    roll2 = roll();
    currentPlayer.activeStatus();
    $("div#player1Score").text(" " + player1.score);
    $("div#player2Score").text(" " + player2.score);

});







});
