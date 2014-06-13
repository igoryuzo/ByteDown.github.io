$(document).ready(function(){
  setIntervalBitAnimation();
  setIntervalArrowAnimation();
  fadeInSkills();
  slideTextOnImage();
  hideSkillsOnLoad();
});

function hideSkillsOnLoad(){
  $('.skills-wrapper').hide();
}

$(window).scroll(function(){
  if($(this).scrollTop() > 400 && $('.skills-wrapper').is(':hidden')) {
    $('.skills-wrapper').fadeIn();
  } else if ($(this).scrollTop() < 400 && !$('.skills-wrapper').is(':hidden')) {
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
    });

  }
}
