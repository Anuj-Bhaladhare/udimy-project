const searchBaar = document.querySelector(".search");
const searchButton = document.querySelector(".btn");
const inputButton = document.querySelector(".input");


searchButton.addEventListener("click", () => {
    searchBaar.classList.toggle("active");
    inputButton.focus();
})


// searchButton.addEventListener("click", () => {
//     if(searchBaar.classList  === "active") {
//         searchBaar.classList.remove("active");
//     }
//     else{
//         searchBaar.classList.add("active");
//     }
// })
