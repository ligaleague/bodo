const img = document.querySelector(".left")
const img1 = document.querySelector(".right")


const callback = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fadeIn")
        }
        // else {
        //     entry.target.classList.remove("fadeIn")
        // }
    })
}

const options = {
    threshold: 0.5,
}

const myObserver = new IntersectionObserver(callback, options)

myObserver.observe(img)
myObserver.observe(img1)

// setTimeout(function(){
//     let div=document.getElementById("animtexttop");
//     div.style.transform="translateX(0px)";
//     console.log(div);
// }, 1000);

let div=document.getElementById("animtexttop");
div.style.transform="translateX(0px)";

let div1=document.getElementById("animtextmiddle");
div1.style.transform="translateX(0px)";

let div2=document.getElementById("animtextbot");
div2.style.transform="translateX(0px)";