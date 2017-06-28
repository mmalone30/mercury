$(document).ready(function(){
  $(".figure img").on("click", function(){
    $(this).parent().addClass("lightbox");
    $(this).before("<button class='close' onclick='closeLightbox()'>&times;</button>");
    $("body").addClass("stuck");

  });
  // $(".close").on("click", function(){
  //   $(this).parent().removeClass("lightbox");
  //   $('body').removeClass("stuck");
  // });


});


function closeLightbox() {
  var lightbox = $('.lightbox');
  var closeButton = $('.close');
  $('body').find(lightbox).removeClass("lightbox");
  $('body').removeClass("stuck");
  $('body').find(closeButton).remove();
}
