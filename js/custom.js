function div_selectById() {
    console.log("weeelaaaaaa")
}

const scrollLeftButton = document.querySelector(".scroll-left");
const scrollRightButton = document.querySelector(".scroll-right");
const mediaScroller = document.querySelector(".media-scroller");
const scrollAmount = 200; // Adjust the amount of scrolling

scrollLeftButton.addEventListener("click", () => {
  mediaScroller.scrollBy({ left: scrollAmount, behavior: "smooth" });
});

scrollRightButton.addEventListener("click", () => {
  mediaScroller.scrollBy({ left: -scrollAmount, behavior: "smooth" });
});
