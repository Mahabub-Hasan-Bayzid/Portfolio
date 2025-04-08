const backBtn = document.getElementById('backBtn');
const modalButton = document.getElementById('seeBtn');
const closeButton = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const contactButton = document.getElementById('contactBtn');
const closeFormBtn = document.getElementById('closeContact');
const contactModal = document.getElementById('contactModal');
const mothel = document.getElementById('mothel');
const burger= document.getElementById('sidebar');
const closeSeeMore= document.getElementById('closeSeeMore');
const darkModeBtn = document.getElementById('darkBtn');
const lightModeBtn = document.getElementById('lightBtn');
const body = document.body;




// Back to Top 
window.addEventListener('scroll', function() {
    if (window.scrollY > 200) {
        backBtn.style.display = "block";
    } else {
        backBtn.style.display = "none";
    }
});

backBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// SeeMore Modal

modalButton.addEventListener('click', function() {
    overlay.classList.remove('hidden');
});

closeSeeMore.addEventListener('click', function() {
    overlay.classList.add('hidden');
    
    
});

// Contact From Modal

contactButton.addEventListener('click', function() {
    contactModal.style.display = "flex";
});

closeFormBtn.addEventListener('click', function() {
    contactModal.style.display = "none";
});

// Close Modal When Clicking outside
window.addEventListener('click', function(event) {
    if (event.target === overlay) {
        overlay.classList.add('hidden');
    }
    if (event.target === contactModal) {
        contactModal.style.display = "none";
    }
});


// Humburger(Responsive Aside)
const toggleSidebar= ()=>{
    document.querySelector("aside").classList.toggle("active");
}
burger.addEventListener('click', toggleSidebar);



// Theme Toggle
darkModeBtn.addEventListener('click', () => {
    body.classList.add('dark-theme');
    body.classList.remove('light-theme'); 
    localStorage.setItem('theme', 'dark');
});

lightModeBtn.addEventListener('click', () => {
    body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
});


const storedTheme = localStorage.getItem('theme');
if (storedTheme === 'dark') {
    body.classList.add('dark-theme');
} else if (storedTheme === 'light') {
    body.classList.add('light-theme'); 
} else {
    
    body.classList.add('light-theme'); 
}




// Gallery to Index Section Navigation from Ai
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

