function changeData(update=false){
    if (update) {
        const all = $("#header-baner [data-name]");
        for (const item of all) {
            const name = $(item).data("name");
            $(`[data-name="${name}"]`).text($(item).text());
            $(`[data-name="${name}"]`).val($(item).text());
            // console.log($(`[data-name="${name}"]`));
        }
        return;
    }
    const items = $("[data-name]").not("input");
    for (const item of items) {
        const name = $(item).data("name");
        const input = $(`input[data-name="${name}"]`);
        if (input) {
            $(item).text(input.val());
        }
    }
}


$( "#popup-apartment-click" ).click(function() {
    changeData(true);
});

// $( "[data-name]" ).change(function() {
//     alert( "Handler for .change() called." );
// });
