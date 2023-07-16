const allBoxess = document.querySelectorAll(".box");


window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
    const triggerBox = window.innerHeight / 4 * 5 ;

    allBoxess.forEach(box => {
        const topBox = box.getBoundingClientRect().top;

        if(topBox < triggerBox) {
             box.classList.add("back");
        }
        else {
            box.classList.remove("back");
        }
    })
}