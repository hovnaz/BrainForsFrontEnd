$('.owl-carousel').owlCarousel({
    loop: false,
    margin: 35,
    nav: true,
    dots: false,
    navText: ['<img src="../../static/icon/arrow-left.svg" alt="left">', '<img src="../../static/icon/arrow-right.svg" alt="right">'],
    items: 3,
    responsive: {
        0: {
            items: 1,
        },
        770: {
            items: 2
        },
        990: {
            items: 2
        },
        1400: {
            items: 3
        }
    }
})