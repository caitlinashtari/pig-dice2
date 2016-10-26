/* backend ------------*/
var roll1;
var roll2;
var player1;
var player2;
var score;

//constructor function for player
function Player () {
  this.score = 0;
  this.active = false;
}
//this is just so i can visualize the player objects that are created
// player1 = {
//   this.score = 0;
//   this.active = true;
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
  if((roll1 != 1) || (roll2 != 1)){
    this.active = true;
    score = player1.score + roll1 + roll2;
    this.score = score;
  } else if((roll1 === 1) && (roll2 != 1)){
    this.active = false;
    return this.score;
  } else if((roll1 === 1) && (roll2 === 1)){
    this.active = false;
    return this.score = 0;
  }
}

var player = function(){
  if("player1.active === true"){
    currentPlayer = player1;
    return player1.activeStatus();
  } else {
    currentPlayer = player2;
    return player2.activeStatus();
  }
}

/* frontend ------------*/
$(document).ready(function(){
//used .one() method so that on first click, new Player is created, but only on the first click; need to change screen so that player will be prompted to click again.
  $("button#clickOne").click(function(event){
    event.preventDefault();
    player1 = new Player();
    player2 = new Player();
    player1.activeStatus();
    $("form#page1").hide();
    $("div.row").show();
  });

//need to change screen so that player is prompted to click again; this includes prototype that needs to be moved to backend
  $("button#play").click(function(event){
    event.preventDefault();
    roll1 = roll();
    roll2 = roll();
    player();


});







});
