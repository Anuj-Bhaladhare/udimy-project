const closedPage = document.getElementById("close");
const openPage = document.getElementById("open");
const container = document.querySelector(".container");

openPage.addEventListener("click", () => {
    container.classList.add("show-nav");
})

closedPage.addEventListener("click", () => {
    container.classList.remove("show-nav");
})