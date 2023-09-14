//slideShow
let slideIndex = 1;
showSlides(slideIndex);
let controlPullSlide = document.querySelector(".prev");
controlPullSlide.addEventListener("click", () => {
  showSlides((slideIndex -= 1));
});
let controlPlusSlide = document.querySelector(".next");
controlPlusSlide.addEventListener("click", () => {
  showSlides((slideIndex += 1));
});

// loopSlides
function loopSlides() {
  let slides = document.getElementsByClassName("mySlides").length;
  if (slideIndex >= 1) {
    slideIndex++;
  }
  if (slideIndex > slides) {
    slideIndex = 1;
  }
  showSlides(slideIndex);
}
let loopSlideControl = setInterval(loopSlides, 2500);

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.querySelectorAll(".dot");
  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
}
//Collapsible
let coll = document.getElementsByClassName("collapsible");
for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "none") {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  });
}
