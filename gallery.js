const backBtn = document.getElementById('backBtn');
const burger= document.getElementById('sidebar');
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

// Local Storage save
const storedTheme = localStorage.getItem('theme');
if (storedTheme === 'dark') {
    body.classList.add('dark-theme');
} else if (storedTheme === 'light') {
    body.classList.add('light-theme'); 
} else {
    
    body.classList.add('light-theme'); 
}


