projects.forEach(item => {
    $("#content").append(`
    <div class="project-card">
        <div class="header">
        <a href="../../pages/projects/index.html">
            <img src="${STATIC_SRC}/${item.img}" alt="image">
        </a>
            <footer class="footer">
                <button data-popup="#video"><img src="${STATIC_SRC}/icon/video-map.svg" alt="video"></button>
                <button data-popup="#map"><img src="${STATIC_SRC}/icon/campus.svg" alt="campus"></button>
            </footer>
        </div>
        <div class="content">
            <h2>${item.title}</h2>
            <span class="item">
                <span>
                    <img src="${STATIC_SRC}/icon/location-pin.svg" alt="location-pin">
                    ${item.address}
                </span>
            </span>
            <span class="item">
                <span>
                    <img src="../../static/icon/bulding-2.svg" alt="bulding">
                    ${item.apartments} apartments
                </span>
                <span>apt size ${item.apt}</span>
            </span>
            <span class="item">
                <span>
                    <img src="../../static/icon/car-park.svg" alt="car parking">
                    ${item.parking} parking / 22
                </span>
            </span>
            <footer class="footer">
                <a href="../../pages/projects/index.html"><button><img src="../../static/icon/stack-list.svg" alt="stack list"></button></a>
                <button data-popup="#map"><img src="../../static/icon/live-camera-full.svg" alt="live"></button>
            </footer>
        </div>
    </div>
    `);
});


page = new Page("#content",".pages",6);