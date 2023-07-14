const extentImage = document.querySelectorAll(".penal");

// console.log(extentImage[0]);

extentImage.forEach((penal) => {
    penal.addEventListener("click", () => {
        removeClassList();
        penal.classList.add("active");
    })
})

function removeClassList(){
    extentImage.forEach((penal) => {
        penal.classList.remove("active");
    }) 
}