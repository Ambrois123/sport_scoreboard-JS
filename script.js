//home-Points
let homePoint = 0;
const scoreHome = document.getElementById('score-home');
scoreHome.textContent = homePoint;

const add1PointHome = document.getElementById('add1-home');
const add2PointHome = document.getElementById('add2-home');
const add3PointHome = document.getElementById('add3-home');

add1PointHome.addEventListener('click', ()=>{
    homePoint += 1;
    scoreHome.textContent = homePoint;
});

add2PointHome.addEventListener('click', ()=>{
    homePoint += 2;
    scoreHome.textContent = homePoint;
});

add3PointHome.addEventListener('click', ()=>{
    homePoint += 3;
    scoreHome.textContent = homePoint;
});

//guest-Point
let guestPoint = 0;
const scoreGuest = document.getElementById('score-guest');
scoreGuest.textContent = guestPoint;

const add1PointGuest = document.getElementById('add1-guest');
const add2PointGuest = document.getElementById('add2-guest');
const add3PointGuest = document.getElementById('add3-guest');

add1PointGuest.addEventListener('click', ()=>{
    guestPoint += 1;
    scoreGuest.textContent = guestPoint;
});

add2PointGuest.addEventListener('click', ()=>{
    guestPoint += 2;
    scoreGuest.textContent = guestPoint;
});
add3PointGuest.addEventListener('click', ()=>{
    guestPoint += 3;
    scoreGuest.textContent = guestPoint;
});



// New game

const newGame = document.querySelector('.new-game')

newGame.addEventListener('click', ()=>{
    scoreHome.textContent = 0;
    homePoint= 0;
    scoreGuest.textContent = 0;
    guestPoint = 0;
})