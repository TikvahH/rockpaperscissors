$(document).ready(function(){

$('#rock').on('click', function(){
   console.log('rock');
   playedRock();

});

function playedRock(){
//get the computers play	
var computerPlay = getComputerPlay();

//compare my play with the computers
if(computerPlay == 'paper'){
    //computer won
    $('#status').html('The computer won. You played rock. The computer played paper.');

    //add to the computers score
    var score = $('#computerScore').html();
    score = parseFloat(score);
    score +=1;
    $('#computerScore').html(score);
  }else if (computerPlay == 'scissors'){

  	//you won
  	$('#status').html('You won. You played rock. The computer played scissors.');
  	//add the human score
  	var score = $('#humanScore').html();
  	score = parseFloat(score);
  	score += 1;
  	$('#humanScore').html(score).html;

  }else{
  	//you tied
  	$('#status').html('You tied. You both played rock.');
  		

    }

}// end function played Rock

$('#paper').on('click', function(){
   console.log('paper');
   playedPaper();

});

function playedPaper(){
//get the computers play  
var computerPlay = getComputerPlay();

//compare my play with the computers
if(computerPlay == 'paper'){
    //you tied
    $('#status').html('You tied. You played paper. And the computer played paper.');

    //add to the computers score
  
  }else if (computerPlay == 'scissors'){

    //computer wins
    $('#status').html('You played paper. The computer played scissors. The computer wins.');
   
    //add the human score
    var score = $('#computerScore').html();
    score = parseFloat(score);
    score += 1;
    $('#computerScore').html(score).html;

  }else{
    //you win
    $('#status').html('You win. The computer played rock. You played paper.');

    var score = $('#humanScore').html();
    score = parseFloat(score);
    score += 1;
    $('#humanScore').html(score).html;

  }
}// end played paper

$('#scissors').on('click', function(){
   console.log('scissors');
   playedScissors();

});

function playedScissors(){
//get the computers play  
var computerPlay = getComputerPlay();

//compare my play with the computers
if(computerPlay == 'playedScissors'){
    //You tied
    $('#status').html(' You tied. You played scissors. And the computer played scissors.');

    //add to the computers score
  
  }else if (computerPlay == 'scissors'){

    //computer wins
    $('#status').html('Computer wins. You played scissors. The computer played rock.');
   
    //add the human score
    var score = $('#computerScore').html();
    score = parseFloat(score);
    score += 1;
    $('#computerScore').html(score).html;

  }else{
    //you win
    $('#status').html('You win. The computer played paper. You played scissors.');

    var score = $('#humanScore').html();
    score = parseFloat(score);
    score += 1;
    $('#humanScore').html(score).html;

  }
}//end played scissors


function getComputerPlay() {
   var plays = ['rock', 'paper', 'scissors'];
   var play = plays[Math.floor(Math.random()* plays.length)];
   return play;
}
    





})