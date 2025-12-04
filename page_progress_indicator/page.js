let progressDOM = document.querySelector(".progress")
window.onscroll = () => scorllProgress()

    function scorllProgress(){
        let pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
        let scrollTop = document.documentElement.scrollTop
        let scroll = (scrollTop/pageHeight)*100

        progressDOM.style.visibily="visible"
        progressDOM.style.width = scroll + "%"
        
    }

