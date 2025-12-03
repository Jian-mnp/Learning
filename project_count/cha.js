let input = document.querySelector(".inputcha")
let count = document.querySelector(".count")

input.addEventListener("keyup",() => {
    count.innerHTML = input.value.length
})

