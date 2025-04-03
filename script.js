
document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");

    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
    });
});

let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlides() {
    slides.forEach((slide, i) => {
        slide.style.display = i === slideIndex ? "block" : "none";
        dots[i].classList.toggle("active", i === slideIndex);
    });
}

function changeSlide(n) {
    slideIndex = (slideIndex + n + slides.length) % slides.length;
    showSlides();
}

function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
}

setInterval(() => changeSlide(1), 5000); // Change d'image toutes les 5 secondes

document.addEventListener("DOMContentLoaded", showSlides);


function animateNumbers(id, start, end, duration) {
    let obj = document.getElementById(id);
    let range = end - start;
    let stepTime = Math.abs(Math.floor(duration / range));
    let current = start;
    let timer = setInterval(() => {
        current++;
        obj.textContent = current;
        if (current === end) clearInterval(timer);
    }, stepTime);
}

// Simule les ventes
setTimeout(() => {
    animateNumbers("articles-vendus", 0, 400, 2000); // 1500 articles vendus
    document.getElementById("article-populaire").textContent = "Moniteurs LED Full HD";
    document.getElementById("pays-top").textContent = "MALI";
}, 1000);


function envoyerMessage() {
    let chatBox = document.querySelector(".chat-box");
    let messageInput = document.getElementById("message-input");
    
    if (messageInput.value.trim() !== "") {
        let newMessage = document.createElement("p");
        newMessage.innerHTML = `<strong>Vous :</strong> ${messageInput.value}`;
        chatBox.appendChild(newMessage);
        messageInput.value = "";
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}


function toggleMenu() {
    let navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("nav-active");
}
