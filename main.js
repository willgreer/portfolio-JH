
const page = document.querySelector(".img-box");
const arrowRight = document.querySelector('.arrow-right');
const arrowLeft = document.querySelector('.arrow-left');

document.addEventListener('wheel', function (e) {
    if (e.deltaY > 0) page.scrollLeft += 500;
    else page.scrollLeft -= 500;
});

arrowRight.addEventListener('click', function (e) {
    page.scrollLeft += 500;
})

arrowLeft.addEventListener('click', function (e) {
    page.scrollLeft -= 500;
})

if (window.innerWidth <= '762') {
    const icon_IG = document.querySelectorAll(".fab fa-instagram");
    const icon_TWITTER = document.querySelectorAll(".fab fa-twitter");
    const icon_LINKDIN = document.querySelectorAll(".fab fa-linkedin");

    icon_IG.innerHTML = "<a href='https://www.instagram.com/dancinglaugh/'></a>";
}