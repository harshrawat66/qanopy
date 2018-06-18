$(document).ready(function() {

  $("#loader").ready(function() {
          $("#loader").fadeOut(2000) ;
          $("#loader").fadeIn(2000) ;
          $("#loader").fadeOut(500) ;


  $("#mainNav").ready(function(){
          $(".masthead").animate({width: "100%"}, 500, 'linear');
          $("#carouselgallery").fadeIn(2500, 'swing') ;
          $("#footer").animate({width: "100%"}, 500, 'linear');
          //$("#mastt").animate({width: "100%"}, 500, 'linear');
          $("section").animate({width: "100%"}, 500, 'linear');
      });
    }) ;


    // $("#first").click(function() {
    //   $(this).css('display', 'none');
    // }) ;
    //
    //
    // $("#second").click(function() {
    //   $("#first").css('display', 'inline-block');
    // }) ;

});

function chklast(){
  var x = $("#last").hasClass("selected") ;
  if( x ){
    var x = 16 ;
    while(x){
      x-- ;
      $("#prev").trigger("click") ;
    }
    $("#prev").trigger("click") ;
  }
}

function moveToSelected(element) {

  if (element == "next") {
    var selected = $(".selected").next();
  } else if (element == "prev") {
    var selected = $(".selected").prev();
  } else {
    var selected = element ;
  }

  var next = $(selected).next();
  var prev = $(selected).prev();
  var prevSecond = $(prev).prev();
  var nextSecond = $(next).next();

  $(selected).removeClass().addClass("selected");

  $(prev).removeClass().addClass("prev");
  $(next).removeClass().addClass("next");

  $(nextSecond).removeClass().addClass("nextRightSecond");
  $(prevSecond).removeClass().addClass("prevLeftSecond");

  $(nextSecond).nextAll().removeClass().addClass('hideRight');
  $(prevSecond).prevAll().removeClass().addClass('hideLeft');

}

$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
        moveToSelected('prev');
        break;

        case 39: // right
        chklast() ;
        moveToSelected('next');
        break;

        default: return;
    }
    e.preventDefault();
});

$('#carousel div').click(function() {
  moveToSelected($(this));
});

$('#prev').click(function() {
  moveToSelected('prev');
});

$('#next').click(function() {
  chklast() ;
  moveToSelected('next');
});
