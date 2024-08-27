//pre loader code

var loader = document.getElementById("pre-loader");

window.addEventListener("load",function(){
this.setTimeout(function(){
    loader.style.display = "none";
    },2000);

})


const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const navItems = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close the menu when any nav item is clicked
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});
