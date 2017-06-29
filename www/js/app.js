$(document).ready(function(){
  $(".figure img").on("click", function(){
    $(this).clone().appendTo( ".lightbox" );
    $(".lightbox").addClass("up");
    $("body").addClass("stuck");
    setTimeout(function(){
      $(".lightbox").addClass("show");
    },50);
  });
  // $(".close").on("click", function(){
  //   $(this).parent().removeClass("lightbox");
  //   $('body').removeClass("stuck");
  // });


});


function closeLightbox() {
  var lightbox = $('.lightbox');

  lightbox.addClass("leaving");

  setTimeout(function(){
    lightbox.removeClass("show leaving");

  },250);

  setTimeout(function(){
    lightbox.removeClass("up");
    lightbox.find("img").remove();
  },500);

  $('body').removeClass("stuck");

}
