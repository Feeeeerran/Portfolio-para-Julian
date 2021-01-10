// Contraccion del Nabar 
const nav=document.getElementsByTagName("nav")[0];
const navItems = document.querySelector(".sections").children;
// const sections = document.getElementsByTagName("section")

window.onload=()=>{
    for (var i=0;i<=4;i++) {
        if (window.scrollY+50>window.innerHeight*(i)) {
            RemoveActive();
            navItems[i].classList.add("active");
        }
    }
}


window.addEventListener("scroll",()=> {
    if(window.scrollY>100) {
        nav.classList.add("pageOffset")

    } else if (window.scrollY<50){
        nav.classList.remove("pageOffset")
    }

    for (var i=0;i<=4;i++) {
        if (window.scrollY+50>window.innerHeight*(i)) {
            RemoveActive();
            navItems[i].classList.add("active");
        }
    }
})

function RemoveActive() {
    for (var i=0;i<=4;i++) {
        navItems[i].classList.remove("active");
    }
}