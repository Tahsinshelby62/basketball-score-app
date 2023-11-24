let count = 0;
let countg= 0;
let score = document.getElementById("count-el");
let scoreg = document.getElementById("count-gl");
function add1(){
    count++;
    score.textContent=count;
    bgCahnge();
    
}
function add2(){
    count+=2;
    score.textContent=count;
    bgCahnge();
}
function add3(){
    count+=3;
    score.textContent=count;
    bgCahnge();
}
function add1g(){
    countg++;
    scoreg.textContent=countg;
    bgCahnge();
    
}
function add2g(){
    countg+=2;
    scoreg.textContent=countg;
    bgCahnge();
}
function add3g(){
    countg+=3;
    scoreg.textContent=countg;
    bgCahnge();
}
function start(){
    score.textContent = 0;
    scoreg.textContent = 0;
    count = 0;
    countg = 0;
    updateCountdown()
    setInterval(updateCountdown, 1000);
}
let startingMinutes = 1;
let time = startingMinutes * 60;
let countdownel = document.getElementById("countdown");
function updateCountdown(){
    let minutes = Math.floor(time/60);
    let second = time%60;
    countdownel.textContent = `${minutes}: ${second}`
    time--;
    if(minutes === 0 && second === 0){
        countdownel.textContent = "00:00";
        time = 0;
    }
}

function bgCahnge(){
    if(count > countg){
        score.style.backgroundColor = "green";
        scoreg.style.backgroundColor = "black";
    } else if(count < countg){
        scoreg.style.backgroundColor = "green";
        score.style.backgroundColor = "black";
    } else if(count === countg){
        score.style.backgroundColor = "black";
        scoreg.style.backgroundColor = "black";
    }
}