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


// Iterates through nodelist, on click assigning classname string to btnString.
// Calling both functions
for(let item of btns) {
    item.addEventListener('click', () => {
        btnString = item.className;
        updateScore();
        updateScoreBoards();

        

    })
}

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


