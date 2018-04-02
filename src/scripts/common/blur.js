export default function blur(){
  var imgWidth = $('.say-my__background').width(),
      blurSection = $('.say-my'),
      blur = $('.feedback__form-blur'),
      posY = blurSection.offset().top - blur.offset().top,
      posX = blurSection.offset().left - blur.offset().left;
  console.log(posX, posY);
  blur.css({
    'background-size' : imgWidth + 'px' + ' ' + 'auto',
    'background-position': posX + 'px' + ' ' + posY + 'px'
  })
}