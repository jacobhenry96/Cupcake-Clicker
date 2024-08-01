// Variables
let cakeCount = 0;
let cakeWorker = 0;
let cakePower = 1;
let tempPower = cakePower;
let realPower = cakePower;
let cupcake = document.querySelector('.cupcake');
let cakeText = document.querySelector('.cakeText');
let powerText = document.querySelector('.powerText');
let workerText = document.querySelector('.workerText');
let multPercent = 0;
let multBar = document.querySelector('.progress-bar')
let multCircle = document.querySelector('.progress-circle')
let upgrade1 = document.querySelector('#upgrade-1');
let upgrade2 = document.querySelector('#upgrade-2');
let upgrade3 = document.querySelector('#upgrade-3');
let upgrade4 = document.querySelector('#upgrade-4');
let upgrade5 = document.querySelector('#upgrade-5');
let upgrade6 = document.querySelector('#upgrade-6');
let upgrade7 = document.querySelector('#upgrade-7');
let workerRunning = false;
let canvas = document.querySelector('canvas');

// Game Setup
function updateText() {
    cakeText.innerHTML = 'Cupcake Count: ' + cakeCount;
    powerText.innerHTML = 'Cupcake Power: ' + cakePower;
    workerText.innerHTML = 'Cupcake Chefs: ' + cakeWorker;
}
updateText();


cupcake.addEventListener('click', function() {
    cakeCount += cakePower;
    updateText();
    confetti({
        particleCount: 6,
        startVelocity: 50,
        spread: 100,
        origin: {
          x: Math.random(),
          y: Math.random() - 0.2
        }
      });
    if (multPercent < 100) {
        multPercent += 15;
        console.log(multPercent);``
    }

})

//Upgrade Buttons
upgrade1.addEventListener('click', function(){
    if (cakeCount >= 50) {
        cakeCount -= 50;
        cakePower++;
        updateText();
    }
})
upgrade2.addEventListener('click', function(){
    if (cakeCount >= 125) {
        cakeCount -= 125;
        cakeWorker += 1;
        updateText();
    }
})
upgrade3.addEventListener('click', function(){
    if (cakeCount >= 500) {
        cakeCount -= 500;
        cakePower += 5;
    }
})
upgrade4.addEventListener('click', function(){
    if (cakeCount >= 1100) {
        cakeCount -= 1100;
        cakeWorker += 6;
        updateText();
    }
})
upgrade5.addEventListener('click', function(){
    if (cakeCount >= 12000) {
        cakeCount -= 12000;
        cakePower += 100;
        updateText();
    }
})
upgrade6.addEventListener('click', function(){
    if (cakeCount >= 100000) {
        cakeCount -= 100000;
        cakeWorker += 200;
        updateText();
    }
})
upgrade7.addEventListener('click', function(){
    if (cakeCount >= 90000) {
        cakeCount -= 90000;
        cakePower += 1000;
        updateText();
    }
})

setInterval(function() {
        cakeCount += cakeWorker
        updateText()
}, 1000)

setInterval(function() {
    if (multPercent > 0) {
        multPercent -= .5;
    }
    if (multPercent > 100) {
        multPercent = 100
    }
    multBar.style.height = `${multPercent}%`
    if (multPercent > 85) {
        multCircle.style.backgroundColor = '#80E1ED';
    } else {
        multCircle.style.backgroundColor = '#D972FF';
    }

}, 10)


// const goldenCupake = document.querySelector('.golden-cupcake');

// function startAnimation() {
//     goldenCupake.classList.add('float');
// }

// function removeAnimation() {
//     goldenCupake.classList.remove('float');
// }

// function getRandomInterval() {
//   const minInterval = 2000;
//   const maxInterval = 5000;
  
//   return Math.floor(Math.random() * (maxInterval - minInterval + 1)) + minInterval;
// }

// startAnimation();

// const intervalId = setInterval(() => {
//   startAnimation();
// }, getRandomInterval());

