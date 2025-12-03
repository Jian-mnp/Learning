let btn = document.querySelector(".pop");
let close = document.querySelector(".close");
let popup = document.querySelector(".info");

btn.addEventListener("click", () => {
    popup.parentElement.classList.add("show-modal");
})

close.addEventListener("click", () => {
    popup.parentElement.classList.remove("show-modal");
})