const page = document.querySelector(".img-box");
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');



document.addEventListener('wheel', function (e) {
    e.deltaY > 0
        ? page.scrollLeft += 1000
        : page.scrollLeft -= 1000;
});

arrowRight.addEventListener('click', function () {
    page.scrollLeft += 1000;
})

arrowLeft.addEventListener('click', function () {
    page.scrollLeft -= 1000;
})
