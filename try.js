let nums = [1, 2, 3, 4];
let letters = ['a', 'b', 'c', 'd'];

let all = nums.slice();
let numsAndLetters = '';


function choose(a){
    switch (a){
        case 'nums':
            all = nums.slice();
            break;
        case 'letters':
            all = letters.slice();
            break;       
    }
    updateDisplay();
}

function updateDisplay() {
    numsAndLetters = '';
    all.forEach((type) => {
      numsAndLetters += `
          ${type}
      `;
    });
    document.querySelector('.display').innerHTML = numsAndLetters;
  }

document.querySelector('.nums').addEventListener('click',() => {
    choose('nums');
});
document.querySelector('.letters').addEventListener('click',() => {
    choose('letters');
});
