$(document).ready(function(){
  $('.welcome-heading').hide(0).delay(300).fadeIn(1000);
  setIntervalBitAnimation();
  setIntervalArrowAnimation();
  fadeInSkills();
  slideTextOnImage();
});

$(window).scroll(function(){
  if($(this).scrollTop() > 550 && $('.skills-wrapper').is(':hidden')) {
    $('.skills-wrapper').fadeIn(10);
  } else if ($(this).scrollTop() < 550 && !$('.skills-wrapper').is(':hidden')) {
    $('.skills-wrapper').fadeOut();
  }
});

function fadeInSkills(){
  if($('body').scrollTop() > '715') {
    $('.skills-wrapper').fadeOut(100);
  }
}

function setIntervalBitAnimation(){
  var intervalID = setInterval(animateBit, 1500);
  var intervalID = setInterval(animateOffBit, 2400);
}

function animateBit(){
  $('.bit').addClass('animated tada');
}

function animateOffBit(){
  $('.bit').removeClass('animated tada');
}

function setIntervalArrowAnimation(){
 var intervalID = setInterval(animateArrow, 1000);
 var intervalID = setInterval(animateOffArrow, 1900);
}

function animateArrow(){
 $('.fa-angle-double-down').addClass('animated bounce');
}

function animateOffArrow(){
 $('.fa-angle-double-down').removeClass('animated bounce');
}

function slideTextOnImage(){
  if ($('.project').hover()) {
    $('.project').on('hover', function(){
      $(this).toggleClass('show-description');
      // $('.project-layer p').css({opacity: 0.6});
      // $('.project-layer').addClass('color-overlay');
    });

  }
}

// function slideTextOnImage(){
//   $('.project').each(function(){
//     $('.project').mouseenter(function(){
//       $('.project').css('background', 'red');
//     });
//   });
// }


  // $('.project').each(function(){
  //   var elm = $(this);
  //   $(this).mouseenter(
  //     function(){
  //       elm.find('.about-wrapper p').animate({opacity: 1.0}, 500, function(){
  //         elm.find('.about-wrapper p').show('slide', {direction:"down"},500);
  //       });
  //     }).mouseleave(
  //     function() {
  //       elm.find('.about-wrapper p').animate({opacity: 0.70}, 500, function(){
  //         elm.find('.about-wrapper p').hide('slide', {direction:"down"},500);
  //       });
  //     }
  //     )
  // });
