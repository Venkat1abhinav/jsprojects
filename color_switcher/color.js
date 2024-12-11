
const body = document.body;

function setBackGround(color){
    body.style.backgroundColor = color;
}

function setBackGroundRandom(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red},${green},${blue})`;
    body.style.backgroundColor = color;
}