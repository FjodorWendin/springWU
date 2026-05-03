window.onload = main;

function isElementIntoView(el) { 
    let e = document.querySelector(el);
    let rect = e.getBoundingClientRect();
        return  window.innerHeight-rect.top >= 270;
}

function main() {
    window.addEventListener("scroll", function(){
        if(isElementIntoView("#bgn")) 
        document.getElementsByName("begin")[0].style.opacity = "1"
        if(isElementIntoView("#inf1")) 
        document.getElementsByName("info1")[0].style.opacity = "1"
        if(isElementIntoView("#inf2")) 
        document.getElementsByName("info2")[0].style.opacity = "1"
        if(isElementIntoView("#start")) 
        document.getElementsByName("start-button")[0].style.opacity = "1"
        if(isElementIntoView("#about")) 
        document.getElementsByName("about")[0].style.opacity = "1"
    });
}

function heighten() {
  var x = document.getElementById("Wht1");
  if (x.style.maxHeight === "none") {
    x.style.maxHeight = "19vh";
  } else {
    x.style.maxHeight = "none";
  }
}

function heighten2() {
  var x = document.getElementById("Wht2");
  if (x.style.maxHeight === "none") {
    x.style.maxHeight = "19vh";
  } else {
    x.style.maxHeight = "none";
  }
}
