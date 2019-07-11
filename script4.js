/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScores, activePlayers, playing, prevRoll;

init();

function init(){
playing = true;
prevRoll = 0;
scores = [0,0];
roundScore = 0;
activePlayer = 0;
document.querySelector('.dice2').style.display = 'none';
document.querySelector('.dice').style.display = 'none';
document.getElementById('score-0').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('#name-1').textContent = 'PLAYER 2';
document.querySelector('#name-0').textContent = 'PLAYER 1';
}

//dice = Math.floor(Math.random() * 6) + 1;
//console.log(dice);

//inner html allows to write in HTML text just allows tect
//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

//dont set = to something to simply get the content
//var x = document.querySelector('#score-0').textContent;
//console.log(x);



//function btn(){
    //do something here
//}
//call external funtion:
//document.querySelector('.btn-roll').addEventListener('click', btn);
//or anonymous function:
document.querySelector('.btn-roll').addEventListener('click', function(){
    if (playing){
        //1. random number:
        var dice = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
        //2. Display result:
        var diceDOM = document.querySelector('.dice');
        var dice2DOM = document.querySelector('.dice2');
        diceDOM.style.display = 'block';
        dice2DOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
        dice2DOM.src = 'dice-' + dice2 + '.png';
        diceTotal = dice + dice2;
        //3. update round score if NOT a 1.
        if(diceTotal === 7 && prevRoll === 7){
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
            nextPlayer();
        }else if (dice !== 1 && dice2 !== 1){
            roundScore+= diceTotal;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
            prevRoll = diceTotal;
        }else {
            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if (playing){
            //add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;
        //Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        //Check if Player won the game? (maybe do this in roll fnction)
        var input = document.querySelector('.final-score').value;
        if(input) {
            var winningScore = input;
        }else{
            winningScore = 100;
        }
        if (scores[activePlayer] >= winningScore){
            document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.dice2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + 
                                   '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + 
                                   '-panel').classList.remove('active');
            playing = false;
        }else{
            //swap players
            nextPlayer();
        }
    }
});

document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer(){
    roundScore = 0;
    prevRoll = 0;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; 
    document.querySelector('.player-1-panel').classList.toggle('active'); 
    document.querySelector('.player-0-panel').classList.toggle('active');
}























