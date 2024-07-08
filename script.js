"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const buttonCloseModal_X = document.querySelector(".close-modal");
const buttonsOpenModal = document.querySelectorAll(".show-modal");

for (let i = 0; i < buttonsOpenModal.length; i++)
  buttonsOpenModal[i].addEventListener("click", function () {
    console.log("Button clicked");
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });

const closeModal = function () {
  console.log("Button X or Outside modal clicked");
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

buttonCloseModal_X.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
