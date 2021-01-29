// Contraccion del Nabar 
const nav=document.getElementsByTagName("nav")[0];
const navItems = document.querySelector(".sections").children;

const sectionsTit=document.querySelectorAll("h3")
const sectionsCont=document.querySelectorAll(".content")

window.onload=()=>{
    for (var i=0;i<=4;i++) {
        if (window.scrollY+50>window.innerHeight*(i)) {
            RemoveActive();
            navItems[i].classList.add("active");
        }
    }
}


window.addEventListener("scroll",()=> {

    if (window.innerWidth>500) {
        if(window.scrollY>100) {
            nav.classList.add("pageOffset")
            

        } else if (window.scrollY<50){
            nav.classList.remove("pageOffset")
        }
    }
    
    for (var i=0;i<=4;i++) {
        if (window.scrollY+75>window.innerHeight*(i)) {
            RemoveActive();
            if (window.innerWidth>500) {
            navItems[i].classList.add("active");}
            if (i<4) {
                sectionsTit[i].classList.add("fadeIn-titulos");
                sectionsCont[i].classList.add("fadeIn-content");
                sectionsCont[i].classList.remove("content");
            }
            
            
        }
    }
})


function RemoveActive() {
    for (var i=0;i<=4;i++) {
        navItems[i].classList.remove("active");
    }
}

// Efectos de misTrabajos 

const trabajo1 =document.getElementById("trabajo1")
const trabajo2 =document.getElementById("trabajo2")
const trabajo3 =document.getElementById("trabajo3")

trabajo1.addEventListener("click",()=> {
    document.querySelector(".subContainer1").classList.toggle("inActive")
})
trabajo2.addEventListener("click",()=> {
    document.querySelector(".subContainer2").classList.toggle("inActive")
})
trabajo3.addEventListener("click",()=> {
    document.querySelector(".subContainer3").classList.toggle("inActive")
})

const icon = document.querySelectorAll(".closeIcon");
icon.forEach(i=> {
    i.addEventListener("click", ()=> {
        console.log("holo")
        document.querySelectorAll(".misTrabajos_subContainer").forEach(i => {
            i.classList.add("inActive");
        })
    })}
)


// Efectos Mobile 

const mobNav = document.querySelector(".sections")
const mobIcon = document.querySelector(".menuIcon");
const arrowIcon = document.querySelector(".menuIcon2");
mobIcon.addEventListener("click",()=> {
    mobNav.classList.add("visible");
    arrowIcon.classList.add("visible")
})

arrowIcon.addEventListener("click",()=> {
    mobNav.classList.remove("visible");
    arrowIcon.classList.remove("visible");
})

for (var i=0;i<=4;i++) {
    navItems[i].addEventListener("click",()=>{
    mobNav.classList.remove("visible");
    arrowIcon.classList.remove("visible");

    })
}