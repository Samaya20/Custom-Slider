const slider = document.querySelector(".slider");
const thumbs = document.querySelectorAll(".thumb-item");
const thumbsContainer = document.querySelector(".thumbs");

thumbs.forEach((thumb) => {
  thumb.addEventListener("click", function () {
    const thumbSrc = this.getAttribute("src");
    const matchedSlide = slider.querySelector(`img[src='${thumbSrc}']`);

    if (matchedSlide) {
      const thumbOffsetLeft = thumb.offsetLeft;
      const thumbWidth = thumb.offsetWidth;
      const thumbsContainerWidth = thumbsContainer.offsetWidth;
      let scrollLeft =
        thumbOffsetLeft - (thumbsContainerWidth - thumbWidth) / 2;

      if (scrollLeft < 0) {
        scrollLeft = 0;
      } else if (
        scrollLeft >
        thumbsContainer.scrollWidth - thumbsContainerWidth
      ) {
        scrollLeft = thumbsContainer.scrollWidth - thumbsContainerWidth;
      }

      thumbsContainer.scroll({
        left: scrollLeft,
        behavior: "smooth",
      });

      const sliderScrollLeft =
        matchedSlide.offsetLeft -
        (slider.offsetWidth - matchedSlide.offsetWidth) / 2;
      slider.scroll({
        left: sliderScrollLeft,
        behavior: "smooth",
      });
    }
  });
});
