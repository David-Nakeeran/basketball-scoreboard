'use strict';

// Score counter variables
let homeScore = 0;
let guestScore = 0;

// To hold class name as string
let btnString;

// DOM elements
let btns = document.querySelectorAll('#btn');
let homeScoreBoard = document.querySelector('.home-scoreboard');
let guestScoreBoard = document.querySelector('.guest-scoreboard');
let newGame = document.querySelector('#new-game');

const homeWinning = document.querySelector('.home-scoreboard');
const guestWinning = document.querySelector('.guest-scoreboard');


// Iterates through nodelist, on click assigning classname string to btnString.
// Calling both functions
for(let item of btns) {
    item.addEventListener('click', () => {
        btnString = item.className;
        updateScore();
        updateScoreBoards();

        // Checking winning/draw states and manipulating the dom
        if(homeScore > guestScore) {
            homeWinning.style.border = '3px solid #9AABD8';
            guestWinning.style.border = '';
            
        } else if(homeScore === guestScore){
            guestWinning.style.border = '2px solid #F94F6D';
            homeWinning.style.border = '2px solid #F94F6D';
        } else {
            guestWinning.style.border = '3px solid #9AABD8';
            homeWinning.style.border = '';
        }
    })
}

// Event Listener on new game button
newGame.addEventListener('click', () => {
    resetGame();
});

// Conditional check on btnString - updates global score variables
function updateScore() {
    switch(btnString) {
        case 'increment-home1': 
            homeScore += 1;
            break; 
        case 'increment-home2': 
            homeScore += 2;
            break;  
        case 'increment-home3': 
            homeScore += 3;
            break;
        case 'increment-guest1': 
            guestScore += 1;
            break; 
        case 'increment-guest2': 
            guestScore += 2;
            break;  
        case 'increment-guest3': 
            guestScore += 3;
            break; 
    };
    
};


// Updates both Home and Guest Scoreboards
function updateScoreBoards() {
    homeScoreBoard.textContent = homeScore;
    guestScoreBoard.textContent = guestScore;    
};

// Resets the game
function resetGame() {
    homeScore = 0;
    guestScore = 0;
    homeScoreBoard.textContent = 0;
    guestScoreBoard.textContent = 0;
    guestWinning.style.border = '';
    homeWinning.style.border = '';
};



