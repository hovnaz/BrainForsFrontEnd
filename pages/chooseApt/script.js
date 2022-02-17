// select-input


filter = {
    region: "empty",
    address: "empty",
    floor: "empty",
}



$(document).ready(function () {
    $(".select-input").focusin(function(){
        $(this).children(".content").fadeIn(200);
        $(this).addClass("show");
      });
      $(".select-input").focusout(function(){
        $(this).children(".content").fadeOut(200);
        $(this).removeClass("show");
      });
    $("[data-select-item]").click(function () {
        let val = $(this).data("selectItem");
        parent = $(this).parent().parent();
        parent.attr("data-select", val);
    });
    $("#special-offers").click(function () {
        for (const item of $(".select-input")) {
            let value = $(item).attr("data-select");
            if (value == "empty") continue;
            filter[$(item).data("name")] = value;
        }
        filter['rooms'] = [];
        for (const item of $("[name='room']")) {
            if ($(item).is(":checked")) {
                filter.rooms.push(+$(item).val());
            }
            // console.log($(item).is(":checked"));
        }
        filter["sqft"] = [
            document.getElementsByName('min-value').value ? document.getElementsByName('min-value').value:0,
            document.getElementsByName('max-value').value ? document.getElementsByName('max-value').value: 300,
        ];
        // filter data
        filter.data = apartments.filter(el => {
            let result = true;
            let resultRoom = false;
            if (filter.region != "empty" && filter.region != el.region) result = false;
            if (filter.address != "empty" && filter.address != el.address) result = false;
            if (filter.floor != "empty" && filter.floor != el.floor) result = false;
            if(!(filter.sqft[0] <= el.sqft && filter.sqft[1] >= el.sqft)) result = false;

            if (filter.rooms.length != 0) {
                for (const item of filter.rooms) {
                    if (el.rooms == +item) {
                        resultRoom = true;
                        break;
                    }
                }
            }
            else{
                resultRoom = true;
            }
            $("#reset-filter").fadeIn(300);
            console.log(result,resultRoom);
            return result && resultRoom;
        });
        $("#count-apartments").text(filter.data.length);
        updatePage(filter.data);
    });
    $("#reset-filter").click(function () {
        filter.data = apartments;
        $(this).fadeOut(300);
        $(".select-input").attr("data-select","empty");
        $("#count-apartments").text(apartments.length);
        for (const item of $('[name="room"]')) {
            item.checked = false;
        }
        updatePage();
    });
});
$("#count-apartments").text(apartments.length);








function updatePage(data=apartments) {
    $("#project-card-page").html("");
    data.forEach(item => {
        let img = "";
        item.img.forEach(el => {
            img += `<img src="${STATIC_SRC}/${el}" alt="image">`
        });
        $("#project-card-page").append(`
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
}
updatePage();
