

apartments.forEach(item => {
    let img = "";
    item.img.forEach(el => {
        img += `<img src="${STATIC_SRC}/${el}" alt="image">`
    });
    $("#content").append(`
        <div class="project-card item">
        <div class="header owl-carousel owl-theme">${img}</div>
        <div class="content">
            <h2>${item.title}</h2>
            <span class="item">
                <span>
                    <img src="../../static/icon/location-pin.svg" alt="location-pin">
                    ${item.address}
                </span>
            </span>
            <span class="item">
                <span>
                    <img src="../../static/icon/floor.svg" alt="floor">
                    ${item.floor} floor
                </span>
                <span>
                    <img src="../../static/icon/size.svg" alt="sqft">
                    ${item.sqft} sqft
                </span>
                <span>
                    <img src="../../static/icon/door.svg" alt="rooms">
                    ${item.rooms} rooms
                </span>
            </span>
            <a href="../../pages/apartment/index.html">apartment</a>
        </div>
    </div>
    `);
});
page = new Page("#project-card-page", ".pages");




$('.owl-carousel').owlCarousel({
    loop: false,
    margin: 35,
    nav: true,
    dots: false,
    navText: ['<img src="../../static/icon/arrow-left.svg" alt="left">', '<img src="../../static/icon/arrow-right.svg" alt="right">'],
    items: 1,
})