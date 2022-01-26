/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// import functions and grab DOM elements
const eggshellball = document.getElementbyID ('eggshellball');
const seashellball = document.getElementbyID ('seashellball');
const snailshellball = document.getElementbyID ('snailshellball');

const eggshellbutton = document.getElementById ('eggshellbutton');
const seashellbutton = document.getElementById ('seashellbutton');
const snailhellbutton = document.getElementById ('snailshellbutton');

const winSpan = document.getElementById('wins');
const lossSpan = document.getElementById('losses');
const totalSpan = document.getElementById('total');


// let state
let wins = 0;
let total = 0;

// set event listeners X 3 
//reset reveal
eggshellbutton.addEventListener (click, () => {
    eggshellball.classList.remove('reveal');
    seashellball.classList.remove('reveal');
    snailshellball.classList.remove('reveal');

    total++;
  // get user input
    const balllocation = math.ceil(Math.random() * 3);

    if (balllocation === 1){
        eggshellball.classList.add('reveal');
        wins++;
    }
    else if (balllocation === 2) {
        seashellball.classList.add('reveal');
    } else {
        snailshellball.classList.add('reveal');
    }
  // use user input to update state 

    winSpan.textContent = wins;
    totalSpan.textContent = total;
    lossSpan.textContent = total - wins;
});
  // update DOM to reflect the new state
