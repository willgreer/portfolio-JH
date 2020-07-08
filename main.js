const page = document.querySelector("div.img-box");

window.addEventListener('wheel', function(e) {

    if (e.deltaY > 0) page.scrollLeft += 300;
    else page.scrollLeft -= 300;
});