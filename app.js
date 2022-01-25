// import functions and grab DOM elements
const eggshellball = document.getElementbyID ('eggshellball')
const seashellball = document.getElementbyID ('seashellball')
const snailshellball = document.getElementbyID ('snailshellball')

const eggshellbutton = document.getElementById ('eggshellbutton')
const eggshellbutton = document.getElementById ('seashellbutton')
const eggshellbutton = document.getElementById ('snailshellbutton')

const winSpan = document.getElementById('wins');
const lossSpan = document.getElementById('losses');
const totalSpan = document.getElementById('total');


// let state
let wins = 0;
let total = 0

// set event listeners 
//reset reveal
eggshellbutton.addEventListener (click, () => {
  eggshellball.classList.remove('reveal')
  seashellball.classList.remove('reveal')
  snailshellball.classList.remove('reveal')

total++

})
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
