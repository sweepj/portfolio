export var slider = (function(){
  var counter = 1,
      duration = 300,
      inProcess = false;


  var moveSlide = function (container, direction){
    var items = $('.slaider__item', container),
      activeItem = items.filter('.slaider__item-active'),
      direction = direction === 'down' ? 100 : -100;

    if (counter >= items.length)    counter = 0;


    var reqItem = items.eq(counter);

    console.log(direction);

    activeItem.animate({
        'top' : direction +'%'
    }, duration);

    reqItem.animate({
        'top' : '0'
    }, duration, function (){
        activeItem.removeClass('slaider__item-active').css('top', -direction+'%');
        $(this).addClass('slaider__item-active');
        inProcess = false;
    });
    console.log(items);
  };

  return{
    init: function(){
      $('.slaider__left').on('click', function(e){
        e.preventDefault();
        if(!inProcess){
          inProcess = true;
          moveSlide($('.slaider__left'), "down");
          moveSlide($('.slaider__right'), "up");
        }

        counter++;
      })
      // $('.slaider__right').on('click', function(e){
      //   e.preventDefault();
      //   if(!inProcess){
      //       inProcess = true;
      //       moveSlide($('.my-works'), 'up');
      //   }
      //   counter++;
      // });
    }
  }
}());


$(function(){
  slider.init();
});
