const state = {
    view:{
        Squares:document.querySelectorAll(".square"),
        enemy:document.querySelector(".enemy"),
        timeleft:document.querySelector("#time-left"),
        score:document.querySelector("#score"),
    },
    values:{
        timeid: null,
        gameVelocity: 1000,
        hioPossicion:0,
        result:0,
        curretTime:60,
        
    },
    actions:{
        contDonwTimerId:setInterval(countDiwn,1000),
    }
};

function playSond(){
    let audop = new Audio("../audios/src_audios_hit.m4a");
    Audio.volume=0.2;
    Audio.play();
}

function countDiwn(){
    state.values.curretTime--;
    state.view.timeleft.textContent=state.values.curretTime;

    if(state.values.curretTime<=0){
        clearInterval(state.actions.contDonwTimerId);
        alert("GAME OVER! O SEU RESULTADO FOI:"+state.values.result);
    }
}

function randomSquare(){
    state.view.Squares.forEach((square)=>{
        square.classList.remove("enemy");
    })
    let randomNumber = Math.floor(Math.random()*9);
    let randomSquare = state.view.Squares[randomNumber];
    randomSquare.classList.add("enemy");
    state.values.hioPossicion=randomSquare.id;

}

function moveEnemy(){
        state.values.timeid=setInterval(randomSquare, state.values.gameVelocity)
}

function addListenerHitBox(){
    state.view.Squares.forEach((square)=>{
        square.addEventListener("mousedown", ()=>{
            if(square.id===state.values.hioPossicion){
                state.values.result++
                state.view.score.textContent=state.values.result;
                state.values.hioPossicion=null
                playSond(hit);
            }
        });
    })
}


function init(){
    moveEnemy();
    addListenerHitBox();
}

init();