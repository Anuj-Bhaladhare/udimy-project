const loadingText = document.querySelector(".loading-text");
const backGround = document.querySelector(".bg");

let load = 0;

let int = setInterval(blurring, 30);

function blurring(){
    load++;

    if(load > 99) {
        clearInterval(int);
    }
    loadingText.innerHTML = load + "%";
    loadingText.style.opacity = scale(load, 0, 100, 1, 0);
    backGround.style.filter = `blur(${scale(load, 0, 100, 40, 0)}px)`;
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}