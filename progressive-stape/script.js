const circleAll = document.querySelectorAll(".cercle");
const proGressive = document.getElementById("progress");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentActive = 1;

nextBtn.addEventListener("click", () => {
    currentActive++;
    if(currentActive > circleAll.length) {
        currentActive = circleAll.length;
    }
    update()
});

nextBtn.addEventListener("click", () => {
    currentActive--;
    if(currentActive < 1){
        currentActive = 1;
    }
    update()
});


function update() {
    circleAll.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }
    });

    const actives = document.querySelectorAll(".active");

    console.log(actives.length);
}

