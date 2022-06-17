let slider = document.querySelectorAll(".slider");
let modal = document.querySelectorAll(".modal");
let moda = document.querySelectorAll(".moda-img");
let position = 0;
let current = 0;

function showSlider() {
  slider.forEach((p) => {
    p.style.display = "none";
  });
  position++;
  if (position > slider.length) {
    position = 1;
  }
  slider[position - 1].style.display = "block";
  thumbNail();
}

setInterval(() => {
  showSlider();
}, 4000);

function thumbNail() {
  modal.forEach((p) => {
    p.style.opacity = "0.6";
  });

  current++;

  if (current > modal.length) {
    current = 1;
  }
  modal[current - 1].style.opacity = " 1";
}

let right = document.querySelector(".right");

right.addEventListener("click", () => {
  position = position + 1;

  if (position > slider.length) {
    position = 1;
  }
  slider.forEach((p) => {
    p.style.display = "none";
  });
  slider[position - 1].style.display = "block";

  thumbNail();
});

let left = document.querySelector(".left");

left.addEventListener("click", () => {
  position = position - 1;

  if (position < 1) {
    position = slider.length;
  }
  slider.forEach((p) => {
    p.style.display = "none";
  });
  slider[position - 1].style.display = "block";

  current = current - 1;
  if (current < 1) {
    current = modal.length;
  }
  modal.forEach((p) => {
    p.style.opacity = "0.6";
  });
  modal[current - 1].style.opacity = "1";
});

moda.forEach((a, b) => {
  a.addEventListener("click", () => {
    position = b;
    showSlider();
    current = b;
    thumbNail();
  });
});
