let timeclock = document.querySelector(".time");
let btn = document.querySelector(".toggle");

function setTime() {
  let time = new Date();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  timeclock.innerHTML = `${hours}:
    ${minutes < 10 ? `0${minutes}` : minutes}:
    ${seconds < 10 ? `0${seconds}` : seconds}`;
}
setTime();
setInterval(setTime, 1000);

btn.addEventListener("click", (e) => {
    const html = document.querySelector("html");
    if(html.classList.contains("dark")){
        html.classList.remove("dark")
        e.target.innerHTML="Dark Mode"
    } else{
        html.classList.add("dark")
        e.target.innerHTML = "Light Mode"
    }
});

