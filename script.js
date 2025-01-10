const slides = ["image1.jpg", "image2.jpg", "image3.jpg"];
let currentSlide = 0;

// Function to update the slide image
function updateSlide() {
    document.getElementById('slide').src = slides[currentSlide];
}

document.getElementById('prev').addEventListener('click', () => {
    currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
    updateSlide();
});

document.getElementById('next').addEventListener('click', () => {
    currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
    updateSlide();
});

document.getElementById('slide').addEventListener('dblclick', () => {
    currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
    updateSlide();
});

