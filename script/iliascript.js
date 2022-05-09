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

let flag=1;

// if (flag=1) {
//
//     let divop = document.getElementById("");
//
// }

function changepic (path,map){

    picdiv =document.getElementById("mappic");

    mapdiv =document.getElementById("map");

    mapdiv.style.opacity=0;

    mapdiv.style.transition="opacity 0s";

    picdiv.style.transform="translateX(1200px)";

    setTimeout(function (){
        picdiv.src=`img/map/${path}`;

        picdiv.style.transform="translateX(0px)";


    },1000)

    setTimeout(function (){

        mapdiv.src=`img/map/${map}`;

        mapdiv.style.transition="opacity 2s";

        mapdiv.style.opacity=100;


    },1600)

    // picdiv.src=`img/map/${path}`;

    // mapdiv.src=`img/map/${map}`;

    // mapdiv.style.opacity=100;

}