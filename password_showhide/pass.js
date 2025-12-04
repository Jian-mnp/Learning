let eye = document.querySelector("i")
let password = document.querySelector("#password")

eye.addEventListener("click", ()=>{
    if(eye.classList.contains("fa-eye")){
        eye.classList.replace("fa-eye", "fa-eye-slash")
        password.setAttribute("type", "text")
    }else{
        eye.classList.replace( "fa-eye-slash","fa-eye") 
         password.setAttribute("type", "password")
    }
})

