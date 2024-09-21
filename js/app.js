const menuBtn = document.getElementById('menu-btn');
const mobileMenuEl = document.getElementById('mobileMenu');

//menu icon 
menuBtn.addEventListener('click',function(){
    menuBtn.children[0].classList.toggle("hidden");
    const menuCloseBtn = document.getElementById('close-icon');
    menuCloseBtn.classList.toggle("hidden");
    mobileMenuEl.classList.toggle("hidden");
    mobileMenuEl.classList.toggle("flex")
})