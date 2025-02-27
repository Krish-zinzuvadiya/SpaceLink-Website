// Validation.js

// Back to Top Button Visibility Logic
window.addEventListener("scroll", function () {
    let button = document.getElementById("backToTop");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }

    // Navbar background change on scroll
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.querySelector('.navbar').style.backgroundColor = "#333";  /* Dark background */
    } else {
        document.querySelector('.navbar').style.backgroundColor = "rgba(0, 0, 0, 0.5)";  /* Transparent */
    }
});

// Scroll to top functionality
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// News Slider Logic
let currentIndex = 0;
const slider = document.querySelector(".news-slider");
const dots = document.querySelectorAll(".dot");
const progressBar = document.querySelector(".scroll-progress");

function changeSlide(index) {
    currentIndex = index;
    const translateValue = -index * (100 / 3) + "%";
    slider.style.transform = "translateX(" + translateValue + ")";

    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");

}

// Video JavaScript...
function openVideo(event) {
    event.preventDefault();
    // debugger
    let videoFrame = document.getElementById("videoFrame");
    document.getElementById("videoModal").style.display = "flex";
    
    let videoSrc = "https://player.vimeo.com/video/540827653?autoplay=1";
    videoFrame.src = videoSrc;
}



function closeVideo() {
    document.getElementById("videoModal").style.display = "none";
    let videoFrame = document.getElementById("videoFrame");
    
    videoFrame.src = "";
}


document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 10); // Small delay ensures smooth behavior
});