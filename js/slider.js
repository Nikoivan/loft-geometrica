class Slider {
  constructor() {
    this.btn = document.getElementById("change");
    this.slider = document.querySelector(".slider-wrap");
    this.sliderList = document.querySelector(".slider-list");
    this.images = document.querySelectorAll(".slider-item");
    this.count = 0;
    this.width;

    this.init = this.init.bind(this);
    this.rollSlider = this.rollSlider.bind(this);

    window.addEventListener("resize", this.init);

    this.btn.addEventListener("click", (e) => {
      e.preventDefault();
      this.count++;
      if (this.count >= this.images.length) {
        this.count = 0;
      }
      this.rollSlider();
    });
  }

  init() {
    this.width = this.slider.offsetWidth;
    this.sliderList.style.width = this.width * this.images.length - 3 + "px";
    this.images.forEach((item) => {
      item.style.width = this.width + "px ";
      item.style.height = this.slider.offsetHeight - 3 + "px";
    });
    this.rollSlider();
  }

  rollSlider() {
    this.sliderList.style.transform =
      "translate(-" + this.count * this.width + "px)";
  }
}

const slider = new Slider();

slider.init();
/*
const btn = document.getElementById("change");
const slider = document.querySelector(".slider-wrap");
const sliderList = document.querySelector(".slider-list");
const images = document.querySelectorAll(".slider-item");
let count = 0;
let width;

function init() {
  width = slider.offsetWidth;
  sliderList.style.width = width * images.length - 3 + "px";
  images.forEach((item) => {
    item.style.width = width + "px ";
    item.style.height = slider.offsetHeight - 3 + "px";
  });
  rollSlider();
}

function rollSlider() {
  sliderList.style.transform = "translate(-" + count * width + "px)";
}

window.addEventListener("resize", init);

btn.addEventListener("click", (e) => {
  e.preventDefault();
  count++;
  if (count >= images.length) {
    count = 0;
  }
  rollSlider();
});

init();*/
