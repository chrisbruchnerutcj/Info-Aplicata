const slides = ["image1.jpg", "image2.jpg", "image3.jpg"];
let currentSlide = 0;

document.getElementById('prev').addEventListener('click', () => {
    currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
    document.getElementById('slide').src = slides[currentSlide];
});

document.getElementById('next').addEventListener('click', () => {
    currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
    document.getElementById('slide').src = slides[currentSlide];
});
