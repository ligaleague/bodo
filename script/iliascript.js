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

console.log("123");