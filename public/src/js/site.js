
// If local time is between 6pm and 7am, switch the theme (darkTheme or lightTheme)
// var hour = new Date().getHours();
// if(hour >= 18 || hour <= 7) {
//     console.log("nighttime");
//     $('body').removeClass("lightTheme");
// } else {
//     console.log("daytime");
//     $('body').addClass("lightTheme");
// }




// Header hidden until scrolled up
// var last = 0;
// $(window).scroll(function(event){
//    var Pos = $(this).scrollTop();
//    if (Pos > last ){
//    } else {
//       $("header").removeClass("offset");
//    }
//    last = Pos;
// });




// theme toggle switch
$('.toggle').on('click', function(e) {
      $('body').toggleClass("lightTheme darkTheme"); //you can list several class names
      // $("body").attr("theme", "https://www.w3schools.com/jquery");
      // // $.fn.cookie('theme', 'lightTheme darkTheme').toggle();
      // var name = $('#txtname').val();
      // something.val(something.val() == 'string1' ? 'string2' : 'string1');
      // console.log($.fn.cookie('theme'));
      e.preventDefault();
});


// var clipboard = new Clipboard('.email');
//
// clipboard.on('success', function(e) {
//
//     console.info('Action:', e.action);
//     console.info('Text:', e.text);
//     console.info('Trigger:', e.trigger);
//
//     e.clearSelection();
//     // e.preventDefault();
//     event.preventDefault();
// });
//
// clipboard.on('error', function(e) {
//     console.error('Action:', e.action);
//     console.error('Trigger:', e.trigger);
// });

// window.lazySizesConfig = window.lazySizesConfig || {};
// //in case you want to use custom media query aliases in your markup, instead of full media queries
// window.lazySizesConfig.customMedia = {
//     '--small': '(max-width: 480px)',
//     '--medium': '(max-width: 700px)',
//     '--large': '(max-width: 1400px)'
// };


// function showProject() {
//      console.log("showing project");
//     //  $('.headline, header, .card').not($(this)).hide();
//     //  $(".project").not('$(this).parent()').addClass("hidden");
//      $(this).addClass("show"); //refactor
//      $('.headline, header, .card').not(".show").hide();
//       $("body")[0].scrollIntoView({
//           behavior: "smooth", // or "auto" or "instant"
//           block: "start" // or "end"
//       });
//
//     //  var offset = $(this).offset().top;
//     //  console.log(offset);
//     //  anime({
//      //
//     //    complete: function(anim) {
//     //      console.log("animation complete");
//      //
//     //      //$('.show').css({transform: 'translateY(0)'});
//      //
//     //    }
//     //  });
//
//     //  var basicTimeline = anime.timeline();
//      //
//     //  basicTimeline
//     //  .add({
//     //    targets: '.show',
//     //    translateX: 10,
//     //    translateY: 10,
//     //    duration: 200,
//     //  })
//     //  .add({
//     //    targets: '.show',
//     //    translateY: -offset,
//     //    translateX: 0,
//     //    duration: 200,
//     //   //  elasticity: 600,
//     //    offset: '0'
//     //  });
//
//
//
//     //  var offset = $(this).parent().offset()
//     //  offset.left -= 20;
//     //   offset.top -= 20;
//     //   $('html, body').animate({
//     //       scrollTop: offset.top,
//     //       scrollLeft: offset.left
//     //   });
//     //  $(this).parent().get(0).scrollIntoView();
//
//      //
//
//
//     // $('html, body').animate({
//     //   scrollTop: $(this).parent().offset().top
//     // }, 1000);
//     //  $('.hero').hide();
//
//
//
//     //  $('#app').hide();
//     //  $(this).parent().appendTo('body');
//
//
//     //  document.body.scrollTop = 0; // For Chrome, Safari and Opera
//     //  document.documentElement.scrollTop = 0; // For IE and Firefox
//     //  $(this).parent().animate({'scrollTop':'0'});
//
// }

function showProject() {
  console.log("showing project");
  $(this).addClass("show"); //refactor
  $('.headline, header, .card').not(".show").hide();
  $("body")[0].scrollIntoView({
    behavior: "smooth", // or "auto" or "instant"
    block: "start" // or "end"
  });
  return false;
}

function hideProject() {
  console.log("hiding project");
  $('.headline, header, .card').not($(this)).show();
  $(this).removeClass("show");

  $(this).find(".detail").empty();
  $(this)[0].scrollIntoView({
    behavior: "smooth", // or "auto" or "instant"
    block: "start" // or "end"
  });
  history.pushState({}, '', '/');
  return false;
}

// function hideProject() {
//      console.log("hiding project");
//      $('.headline, header, .card').not($(this)).show();
//      $(this).removeClass("show");
//
//     $(this).find(".detail").empty();
//
//      $(this)[0].scrollIntoView({
//          behavior: "smooth", // or "auto" or "instant"
//          block: "start" // or "end"
//      });
//
//
//        console.log(scrollPos);
//     history.pushState({}, '', '/');
// }


// $('.card').bind('touchstart touchend', function(e) {
//     e.preventDefault();
//     $(this).toggleClass('hover');
// });
