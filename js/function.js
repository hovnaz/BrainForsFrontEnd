
var STATIC_SRC = "../../static"
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
var page;
class Page{
  constructor(place,btn,count=9){
    this.place = place;
    this.btn = btn;
    this.count = count;
    this.page = 1;
    this.ubdate();
    this.createPageBtn();
  }
  createPageBtn(){
    $(this.btn).empty();
    console.log(Math.round($(this.place).children().length / this.count-1));
    if (Math.round($(this.place).children().length / this.count+1) == 1)return;
    for (let i = 1; i < $(this.place).children().length / this.count+1; i++) {
      let active = undefined
      if(this.page == i) active = "active";
      $(this.btn).append(`<span class="${active?active:""} item" onclick="page.index(${i})" data-page="${i}">${i}</span>`);
    }
  }
  ubdate(){
    let child = $(this.place).children();
    child.hide();
    for (let i = this.page*this.count-this.count; i < this.page*this.count; i++) {
      $(child[i]).show()
    }
  }
  next(){
    this.page+=1;
  }
  prev(){
    this.page-=1;
  }
  index(id){
    this.page=id;
    this.ubdate();
    $(this.btn).children().removeClass("active");
    $(this.btn).children(`[data-page='${id}']`).addClass("active");
    console.log($(this.btn).children(`[data-page='${id}']`));
  }
}


function setCookie(name,value,days) {
  var expires = "";
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}
function eraseCookie(name) {   
  document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}