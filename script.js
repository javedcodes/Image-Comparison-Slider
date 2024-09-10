// Selecting the slider input, second image, and drag line elements
const slider = document.querySelector(".slider input");
const img = document.querySelector(".images .img-2");
const dragLine = document.querySelector(".slider .drag-line");

// Event listener to update image width and drag line position on slider input
slider.oninput = () => {
  let sliderVal = slider.value;
  dragLine.style.left = sliderVal + "%"; // Move drag line
  img.style.width = sliderVal + "%"; // Adjust the width of the second image
}