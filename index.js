const thumbs = document.querySelectorAll(".thumb-item");
const thumbsContainer = document.querySelector(".thumbs");
const slider = document.querySelector(".slider");

thumbs.forEach(thumb =>
    thumb.addEventListener("click", () => {
        const matchedSlide = slider.querySelector(`img[src='${thumb.getAttribute("src")}']`);
        if (matchedSlide) {
            thumbsContainer.scrollTo({
                left: thumb.offsetLeft - (thumbsContainer.offsetWidth - thumb.offsetWidth) / 2,
                behavior: "smooth"
            });
            slider.scrollTo({
                left: matchedSlide.offsetLeft - (slider.offsetWidth - matchedSlide.offsetWidth) / 2,
                behavior: "smooth"
            });
        }
    })
);
