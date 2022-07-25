let score = 0;
let cross = true;
let audio = new Audio('material/music.mp3');
let audioGo = new Audio('material/gameover.mp3');
setTimeout(() => {
    audio.play();
}, 1000);
document.onkeydown = function(e){
    console.log("Key keyCode is : ", e.keyCode);
    if(e.keyCode == 38){
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino')
        }, 700);
    }
    if(e.keyCode == 39){
        dino = document.querySelector('.dino');
        dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinox + 112 + 'px';
    }
    if(e.keyCode == 37){
        dino = document.querySelector('.dino');
        dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinox - 112) + 'px';
    }
}

setInterval(() => {
    dino = document.querySelector('.dino');
    gameover = document.querySelector('.gameover');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));
    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx-ox);
    offsetY = Math.abs(dy-oy);
    console.log(offsetX, offsetY)
    if (offsetX < 77 && offsetY < 52){
        obstacle.classList.remove('obstacleAni');
        gameover.innerHTML = "Game Over - Reload to Start Over";
        audioGo.play();
        setTimeout(() => {
            audioGo.pause();
            audio.pause();
        }, 1000);
    }
    else if (offsetX<145 && cross){
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            let aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            let newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + 's';
        }, 700);
        
    }

}, 100);

function updateScore(score){
    scoreCont.innerHTML = "Your score : " + score;
}