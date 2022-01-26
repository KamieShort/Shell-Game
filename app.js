/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// import functions and grab DOM elements
const eggshellball = document.getElementById ('eggshellball');
const seashellball = document.getElementById ('seashellball');
const snailshellball = document.getElementById ('snailshellball');

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
function reset() {
    eggshellball.classList.remove('reveal');
    seashellball.classList.remove('reveal');
    snailshellball.classList.remove('reveal');
}
eggshellbutton.addEventListener ('click', () => {
    reset();
    // eggshellball.classList.remove('reveal');
    // seashellball.classList.remove('reveal');
    // snailshellball.classList.remove('reveal');

    total++;
  // get user input
    const balllocation = Math.ceil(Math.random() * 3);

    if (balllocation === 1){
        eggshellball.classList.add('reveal');
        wins++;
    }
    else if (balllocation === 2) {
        seashellball.classList.add('reveal');
    } else {
        snailshellball.classList.add('reveal');
    }

  // update DOM to reflect the new state
    winSpan.textContent = wins;
    totalSpan.textContent = total;
    lossSpan.textContent = total - wins;
});

seashellbutton.addEventListener ('click', () => {
    reset();
    // eggshellball.classList.remove('reveal');
    // seashellball.classList.remove('reveal');
    // snailshellball.classList.remove('reveal');

    total++;
// get user input
    const balllocation = Math.ceil(Math.random() * 3);

    if (balllocation === 1){
        eggshellball.classList.add('reveal');
        
    }
    else if (balllocation === 2) {
        seashellball.classList.add('reveal');
        wins++;
    } else {
        snailshellball.classList.add('reveal');
    }

// update DOM to reflect the new state
    winSpan.textContent = wins;
    totalSpan.textContent = total;
    lossSpan.textContent = total - wins;
});

snailshellbutton.addEventListener ('click', () => {
    reset();
    // eggshellball.classList.remove('reveal');
    // seashellball.classList.remove('reveal');
    // snailshellball.classList.remove('reveal');

    total++;
// get user input
    const balllocation = Math.ceil(Math.random() * 3);

    if (balllocation === 1){
        eggshellball.classList.add('reveal');
        
    }
    else if (balllocation === 2) {
        seashellball.classList.add('reveal');
    } else {
        snailshellball.classList.add('reveal');
        wins++;
    }

// update DOM to reflect the new state
    winSpan.textContent = wins;
    totalSpan.textContent = total;
    lossSpan.textContent = total - wins;
});