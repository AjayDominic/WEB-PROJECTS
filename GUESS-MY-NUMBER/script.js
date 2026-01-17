'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent='Correct Number';
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent=13;
document.querySelector('.score').textContent=10;
console.log(document.querySelector('.guess').value)
document.querySelector('.guess').value=23
*/
let seceretnumber = Math.trunc(Math.random() * 20) + 1
let score = 20;
let high=0
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value)
    console.log(typeof guess)
    // When there is no input
    if (!guess) {
        document.querySelector('.message').textContent = 'NO...Number...Retry Again with Number';
        // When player wins the game
    } else if (guess == seceretnumber) {
        document.querySelector('.message').textContent = '🏆🏆Correct Number';
        document.querySelector('.number').textContent = seceretnumber
        document.querySelector('body').style.backgroundColor = '#000fff'
        document.querySelector('.number').style.width = '30rem'
        if(score>high){
            high=score
            document.querySelector('.highscore').textContent=high;
        }
        // When number is greater then secret number
    } else if (guess > seceretnumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too...High';
            score = score - 1
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = "👎👎Better Luck Next Time";
            document.querySelector('.score').textContent = 0;
        }
        // when number is less then the secret number
    } else if (guess < seceretnumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too...Low';
            score = score - 1
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = "Better Luck Next Time";
            document.querySelector('.score').textContent = 0;
        }
    }
})
// For Again button
document.querySelector('.again').addEventListener('click', function () {
    score = 20
    seceretnumber = Math.trunc(Math.random() * 20) + 1
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('.score').textContent = score
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = ''
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'
})













