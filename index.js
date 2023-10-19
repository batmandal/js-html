let frames = document.querySelector(".frame");
// frames.style.background = "red"


// for (let i = 0; i < frames.length; i++) {
//     frames[i].style.background = "green"
    
// }


// let spans = document.querySelector("span");
// spans.style.borderRadius = "20px";
// spans.style.opacity = "0.5";


frames.addEventListener("click", () => {
    frames.style.borderRadius = "50%"
    if (frames.style.background == "pink") {
        frames.style.background = "red"
    } 
});