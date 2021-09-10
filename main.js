let span = document.querySelector(".up")

window.onscroll = function(){
    if(this.scrollY >= 1000){
        span.classList.add("show")
    }else{
        span.classList.remove("show")
    }
}

span.onclick = function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}

let click = document.getElementById("menu-btn").addEventListener('click',()=>{
     const list = document.getElementById("menu");
     const classes = list.classList
     if (classes.contains("open")) {
         list.classList.remove("open");
         list.classList.add("closed");
         
        } else {
         list.classList.remove("closed");
         list.classList.add("open");
     }
})