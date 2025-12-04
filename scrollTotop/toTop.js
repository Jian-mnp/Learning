window.onscroll = () => scrollProgress();
let button = document.querySelector(".top");

function scrollProgress() {
  let pageHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollTop = document.documentElement.scrollTop;
  let scroll = (scrollTop / pageHeight) * 100;

  console.log(scroll);
  if (scroll > 30) {
    button.classList.add("show-top");
  }else {
    button.classList.remove("show-top");
  }
}

button.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
});