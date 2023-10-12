"use strict";

// classlist : remove ou add ou toggle hidden
//click sur btn -> enlever hidden
// click sur croix-> remettre hidden

//Boucle dans boucle

// const btn = document.querySelectorAll(".show-modal");
// const hidden = document.querySelectorAll(".hidden");
// const close = document.querySelector(".close-modal");

// for (let i = 0; i <= 2; i++) {
//   btn[i].addEventListener("click", () => {
//     for (let j = 0; j <= 1; j++) {
//       hidden[j].classList.remove("hidden");
//     }
//   });
// }

// close.addEventListener("click", () => {
//   for (let j = 0; j <= 1; j++) {
//     hidden[j].classList.add("hidden");
//   }
// });

//Correction
const btn = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const close = document.querySelector(".close-modal");

for (let i = 0; i <= 2; i++) {
  btn[i].addEventListener("click", () => {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}

close.addEventListener("click", () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

overlay.addEventListener("click", () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  }
});
