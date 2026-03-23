window.onload = main;

function main() {
    window.addEventListener("scroll", function(){
        if(isElementIntoView("#start")) document.getElementsByTagName("form")[0].style.opacity = "1" 
    });
}

function isElementIntoView(el) { 
    var e = document.querySelector(el);
    var rect = e.getBoundingClientRect();
    return  window.innerHeight-rect.top >= 0;     
}