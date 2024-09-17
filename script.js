// ======= menu and links =======
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
// ======= menu and links end =======

// ======= section skill circle =======
const circles = document.querySelectorAll('.circle');
circles.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360 / dots;

    for(let i = 0; i < dots; i++){
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');

    for(let i = 0; i < percent; i++){
        pointsMarked[i].classList.add('marked');
    }

})
// ======= section skill circle end =======

// ======= parallax =======
const oberver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add("show-items");
        }
        else {
            entry.target.classList.remove("show-items");
        }
    });
});


const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el)=>oberver.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el)=>oberver.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el)=>oberver.observe(el));

const scrollLeft = document.querySelectorAll(".scroll-left");
scrollLeft.forEach((el)=>oberver.observe(el));

const scrollRight = document.querySelectorAll(".scroll-right");
scrollRight.forEach((el)=>oberver.observe(el));
// ======= parallax end =======


/*============== SHOW SCROLL UP ==============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')

    // When the scroll is higher than 350 viewport heught, add the show-scroll class to the a tag with the scrollup
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
    : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll' , scrollUp)
/*============== SHOW SCROLL UP ==============*/ 





