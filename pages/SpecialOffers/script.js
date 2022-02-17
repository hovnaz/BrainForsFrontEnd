
specialOffers = [
    {
        img:"jpg/image11.jpg",
        until:"20.10.2021",
        title:"New Year's apartments from New City!",
        sale:20
    },
    {
        img:"jpg/image11.jpg",
        until:"20.10.2021",
        title:"New Year's apartments from New City!",
    },
    {
        img:"jpg/image11.jpg",
        until:"20.10.2021",
        title:"New Year's apartments from New City!",
    },
    {
        img:"jpg/image11.jpg",
        until:"20.10.2021",
        title:"New Year's apartments from New City!",
    },
    {
        img:"jpg/image11.jpg",
        until:"20.10.2021",
        title:"New Year's apartments from New City!",
    },
    {
        img:"jpg/image11.jpg",
        until:"20.10.2021",
        title:"New Year's apartments from New City!",
    },
    {
        img:"jpg/image11.jpg",
        until:"20.10.2021",
        title:"New Year's apartments from New City!",
        sale:20
    },
    {
        img:"jpg/image11.jpg",
        until:"20.10.2021",
        title:"New Year's apartments from New City!",
    },
    {
        img:"jpg/image11.jpg",
        until:"20.10.2021",
        title:"New Year's apartments from New City!",
    },
    {
        img:"jpg/image11.jpg",
        until:"20.10.2021",
        title:"New Year's apartments from New City!",
    },
    {
        img:"jpg/image11.jpg",
        until:"20.10.2021",
        title:"New Year's apartments from New City!",
    },
    {
        img:"jpg/image11.jpg",
        until:"20.10.2021",
        title:"New Year's apartments from New City!",
        sale:20
    }
];

specialOffers.forEach(item => {
    let sale = item.sale ? `<span class="sale">
                    <span>${item.sale}%</span>
                    <span>OFF</span>
                </span>`: ""

    $("#content").append(`
    <a href="../../pages/apartment/index.html">
        <div class="item">
            <img src="${STATIC_SRC}/${item.img}" alt="image">
            <span class="primary">Until ${item.until}</span>
            <h2>${item.title}</h2>
            <p>Some description here</p>
            ${sale}
        </div>
    </a>
    `);
});
page = new Page("#content",".pages",6);