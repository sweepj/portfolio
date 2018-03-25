$(function(){
  blur();
})

$(window).resize(function(){
  blur();
});

function blur(){
  var imgWidth = $('.feedback__title'),
      blurSection = $('say-me__feedback')
      blur = $('.feedback__form-blur')
      posY = blurSection.offset().top - blur.offset().top,
      posX = blursection.offset().left - blur.offset().left;
  console.log(posX, posY);
  blur.css({
    'background-size' : imgWidth + 'px' + ' ' + 'auto',
    'background-position': posX + 'px' + ' ' + posY + 'px'
  })
}