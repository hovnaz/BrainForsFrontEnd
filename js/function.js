

$(document).ready(function(){
    $(".vim-slide-btn").click(function(){
        let $target = $(this);
        let name = $target.data("slide");
        
        $(".vim-slide-btn").not(this).removeClass("active");
        $target.addClass("active");

        
        $(".vim-slide-item").not(`.vim-slide-item${name}`).hide();
        $(`.vim-slide-item${name}`).show();
    });
  });

  

// function openSlide(el){
//     $(".vim-slide-item").show();
//     // toggle content open close

//     // data-slide="apartments"
//     // vim-slide-btn

//     // vim-slide-btn

//     if(!el)return;
//     $(".vim-slide-item").not(`.vim-slide-item${el}`).hide();
//     $(`.vim-slide-item${el}`).show();
// }
