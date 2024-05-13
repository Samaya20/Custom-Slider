const slider = document.querySelector(".slider");
const sliderContainer = document.querySelector(".slider-container");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
});

const thumbItems = document.querySelector(".thumbs");
let thumbDown = false;
let thumbStartX;
let thumbScrollLeft;

thumbItems.addEventListener("mousedown", (e) => {
  thumbDown = true;
  thumbStartX = e.pageX - thumbItems.offsetLeft;
  thumbScrollLeft = thumbItems.scrollLeft;
});

thumbItems.addEventListener("mouseleave", () => {
  thumbDown = false;
});

thumbItems.addEventListener("mouseup", () => {
  thumbDown = false;
});

thumbItems.addEventListener("mousemove", (e) => {
  if (!thumbDown) return;
  e.preventDefault();
  const thumbX = e.pageX - thumbItems.offsetLeft;
  const thumbWalk = (thumbX - thumbStartX) * 2;
  thumbItems.scrollLeft = thumbScrollLeft - thumbWalk;
});

const thumbItemsArray = Array.from(document.querySelectorAll(".thumb-item"));
thumbItemsArray.forEach((thumb, index) => {
  thumb.addEventListener("click", () => {
    const thumbLeft = thumb.offsetLeft;
    const thumbWidth = thumb.offsetWidth;
    const thumbsWidth = thumbItems.offsetWidth;
    if (thumbLeft + thumbWidth > thumbsWidth) {
      thumbItems.scrollLeft += thumbLeft + thumbWidth - thumbsWidth;
    }
    slider.scrollLeft = index * slider.offsetWidth;
  });
});
