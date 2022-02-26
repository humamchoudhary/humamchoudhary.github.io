const Body = document.querySelector("body");
const btn = document.querySelector(".theme-btn");
const hero = document.querySelector(".hero");
/*
btn.addEventListener("click",()=>{
    btn.classList.toggle("theme-btn-on");
    Body.classList.toggle("dark-theme");
    hero.classList.toggle("hero-dark-theme");
    if (document.body.classList.contains("dark-theme")){
        btn.src="/SVG/sun.svg";
    }else{
        btn.src="/SVG/moon.svg";
        
    }
});

*/

// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode');

const enableDarkMode = () => {
    Body.classList.add('dark-theme');
    localStorage.setItem('darkMode', 'enabled');
    btn.src = "SVG/sun.svg";
    hero.classList.add("hero-dark-theme");


}

const disableDarkMode = () => {
    Body.classList.remove('dark-theme');
    localStorage.setItem('darkMode', null);
    btn.src = "SVG/moon.svg";
    hero.classList.remove("hero-dark-theme");
}

if (darkMode === 'enabled') {
    enableDarkMode();
}

btn.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');

    if (darkMode !== 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});