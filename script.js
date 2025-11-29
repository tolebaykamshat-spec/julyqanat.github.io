// CTA alert
document.querySelectorAll(".cta").forEach(button => {
    button.addEventListener("click", () => {
        alert("Қосымшаға тіркелу функциясы кейін қосылады. 😊");
    });
});

// Slider
let slides = document.querySelectorAll(".slide");
let current = 0;

function showSlide(index){
    slides.forEach((slide,i) => {
        slide.classList.remove("active");
    });
    slides[index].classList.add("active");
}

function nextSlide(){
    current = (current + 1) % slides.length;
    showSlide(current);
}

// Auto slide every 4 sec
setInterval(nextSlide, 4000);