const page = document.querySelector("div.img-box");

window.addEventListener('wheel', function(e) {
    if (e.deltaY > 0) page.scrollLeft += 500;
    else page.scrollLeft -= 500;
});