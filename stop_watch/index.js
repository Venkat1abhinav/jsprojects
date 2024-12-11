
timeEle = document.getElementById("time");

let minutes = 0;
let secondCount = 0;
let minutesCount = 0;
let  seconds = 0;
let running = true;
function timeCount(){
    if(running === true){
    secondCount++;
    if(secondCount === 60){
        minutesCount++;
        secondCount = 0;
    }
    if(secondCount < 10 && minutesCount < 10){
    timeEle.innerHTML = `0${minutesCount}:0${secondCount}`;
    }else if(secondCount > 10 && minutesCount < 10){
        timeEle.innerHTML = `0${minutesCount}:${secondCount}`;
    }else{
        timeEle.innerHTML = `${minutesCount}:${secondCount}`
    }

}
}

function startWatch() {
    running = true;
    let time = setInterval(timeCount, 1000);
}

function stopWatch(){
    running = false;
}

function resetWatch(){

    running = false;
    timeEle.innerHTML = "00:00"
    secondCount = 0;
    timeCount = 0;


}