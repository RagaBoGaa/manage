// =================== Setup Elements
const toggleMenu = document.querySelector(".menu");
const list = document.querySelector("nav ul");
const slider = document.querySelector(".slider");
const cards = document.querySelectorAll(".card");
const dots = document.querySelectorAll(".dot");
const form = document.querySelector("form");
const inputEmail = document.querySelector("form input");
const showMsg = document.querySelector(".show-msg");

let currentSlide = 0;

cards[currentSlide].classList.add("active");
dots[currentSlide].classList.add("active");

// =================== Events
toggleMenu.addEventListener("click", toggleMobileMenu);

slider.addEventListener("wheel", horizontalScrollByWheel);

dots.forEach((dot, index) => {
  dot.addEventListener("click", addActiveToBullets.bind(dot, index));
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const mail = inputEmail.value.trim();
  const isValidMail = validateEmail(mail);

  if (isValidMail) {
    showMsg.textContent = "You subbed to our news!";
    showMsg.style.color = "green";
    inputEmail.value = "";
  } else {
    showMsg.textContent = "Please insert a valid email";
    inputEmail.value = "";
    showMsg.style.color = "";
  }
});

// =================== Functions

function toggleMobileMenu() {
  list.classList.toggle("active");
  list.classList.contains("active")
    ? (toggleMenu.src = "images/icon-close.svg")
    : (toggleMenu.src = "images/icon-hamburger.svg");
}

function horizontalScrollByWheel(e) {
  e.preventDefault();
  slider.scrollBy({
    left: e.deltaY < 0 ? -30 : 30,
  });
}

function addActiveToBullets(index) {
  cards[currentSlide].classList.remove("active");
  dots[currentSlide].classList.remove("active");

  // Set a new current index
  currentSlide = index;

  // Add active class to the current card + current dot(bullet)
  cards[currentSlide].classList.add("active");
  dots[currentSlide].classList.add("active");
}

function validateEmail(mail) {
  const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regEx.test(mail);
}

setInterval(() => {
  cards[currentSlide].classList.remove("active");
  dots[currentSlide].classList.remove("active");

  // currentSlide = (currentSlide + 1) % cards.length;
  currentSlide += 1;
  currentSlide > cards.length - 1 ? (currentSlide = 0) : "";

  cards[currentSlide].classList.add("active");
  dots[currentSlide].classList.add("active");
}, 5000);
