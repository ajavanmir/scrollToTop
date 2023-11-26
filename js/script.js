/*
Copyright amir javanmir
Released on: november 5, 2023
*/
let scrollTop = document.querySelector(".go-top");

let docHeight = Math.floor(document.documentElement.getClientRects()[0].height-window.innerHeight-1);
window.addEventListener("scroll", function(e){
    if(this.pageYOffset > 200){
        scrollTop.classList.add("active")
    }else{
        scrollTop.classList.remove("active")
    }
})
scrollTop.addEventListener("click", function(e){
    e.preventDefault();
    document.documentElement.scrollTop = 0
})