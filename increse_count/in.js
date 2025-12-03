let counters = document.querySelectorAll(".counter")

counters.forEach(counter =>{
    counter.innerHTML = '0'
    let updateCounter =()=>{
        let target =+counter.getAttribute("data-target")
        let start = +counter.innerHTML
        let increment = target/200
        if(start<target){
            counter.innerText = `${Math.ceil(start+increment)}`
            setTimeout(updateCounter,1)
        }else{
            counter.innerText = target
        }
    }
    updateCounter()
})