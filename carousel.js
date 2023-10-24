// const images = document.querySelector('.images');
// const left = document.querySelector('.left');
// const right = document.querySelector('.right');
// const images = document.querySelector('.images')



// let index = 0;

// let isTransitioning = false;

// // left.style.backgroundColor="green";

// right.addEventListener('click', () => {
//     if (isTransitioning) return;
//     // if (index == -2) return;
//     index-- ;
//     console.log('index=', index);
//     images.style.transform = `translateX(${(index)*20}%)`;
//     images.style.transition = `transform 1.5s ease-in-out`;
// });

// left.addEventListener('click', () => {
//     if (isTransitioning) return;
//     // if (index == 2) return;
//     index++ ;
//     console.log('index=', index);
//     images.style.transform = `translateX(${(index)*20}%)`;
//     images.style.transition = `transform 1.5s ease-in-out`;
// });


// // images.addEventListener('transitionend', () => {
// //     if ( index === 2) {
// //         index = -2;
// //         images.style.transition = 'none';
// //         images.style.transform = `translateX(${(index)*100 / 5}%)`;
// //     }else if (index === -2 ) {
// //         index = 2;
// //         images.style.transition = 'none';
// //         images.style.transform = `translateX(${(index)*100 / 5}%)`;
// //     }
// // });
// images.addEventListener("transitionend", () => {
//     if (index === 3) {
//     index = -2;
//     images.style.transition = "none";
//     images.style.transform = `translateX(${-index * 20}%)`;
//     } else if (index === -2) {
//     index = 3;
//     images.style.transition = "none";
//     images.style.transform = `translateX(${-index * 20}%)`;
//     }
//     isTransitioning = false;
//    });
//    images.addEventListener("transitionstart", () => {
//     isTransitioning = true;
//    });
   
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const images = document.querySelector(".images");
let index = 1;
let isTransitioning = false;
left.addEventListener("click", () => {
//  if (isTransitioning) return;
 index--;
 images.style.transition = "transform 0.4s ease-in-out";
 images.style.transform = `translateX(${-index * 20}%)`;
});
right.addEventListener("click", () => {
//  if (isTransitioning) return;
 index++;
 images.style.transition = "transform 0.4s ease-in-out";
 images.style.transform = `translateX(${-index * 20}%)`;
});
images.addEventListener("transitionend", () => {
 if (index === 0) {
 index = 6;
 images.style.transition = "none";
 images.style.transform = `translateX(${-index * 20}%)`;
 } else if (index === 7) {
 index = 1;
 images.style.transition = "none";
 images.style.transform = `translateX(${-index * 20}%)`;
 }
 isTransitioning = false;
});
images.addEventListener("transitionstart", () => {
 isTransitioning = true;
});