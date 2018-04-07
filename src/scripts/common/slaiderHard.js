var slaider = function(container){
  var nextBtn = container.find('.slaider__left'),
  prevBtn = container.find('.slaider__right'),
  items = nextBtn.find('.slaider__item'),
  display = container.find('.slaider__main'),
  title = container.find('.my-works__left-title'),
  skills = container.find('.my-works__left-desc'),
  link = container.find('.my-works__left-link'),
  itemsLength = items.lenght,
  duration = 500,
  flag = true;

  this.counter = 0;

  var generateMarkups = function(){
    var list = nextBtn.find('.slaider__list'),
    markups = list.clone();

    prevBtn.append(markups);
  }

  var getDataArrays = function (){
    var dataObj = {
      pic: [],
      title: [],
      skills: [],
      link: []
    };
    $.each(items, function(){
      var $this = $(this);

      dataObj
        .pic
        .push($this.data('full'));
      dataObj
        .title
        .push($this.data('title'));
      dataObj
        .skills
        .push($this.data('skills'));
      dataObj
        .link
        .push($this.data('link'));
    });

    return dataObj;
  }
  var slideInLeftBtn = function(slide) {
    console.log('click');
    var reqItem = items.eq(slide - 1),
      activeItem = items.filter('.slaider__item-active');

    activeItem
      .stop(true, true)
      .animate({
        'top': '100%'
      }, duration);
    reqItem
      .stop(true, true)
      .animate({
        'top': '0%'
      }, duration, function(){
        $(this)
          .addClass('slaider__item-active')
          .siblings()
          .removeClass('slaider__item-active')
          .css('top', '-100%')
      });
  }

  var slideInRightBtn = function (slide) {
    var items = prevBtn.find('.slaider__item'),
        activeItem = items.filter('.slaider__item-active'),
        reqSlide = slide + 1;

    if(reqSlide > itemsLength - 1){
      reqSlide = 0;
    }

    var reqItem = items.eq(reqSlide);

    activeItem
      .stop(true, true)
      .animate({
        'top': '-100%'
      }, duration);

    reqItem
      .stop(true, true)
      .animate({
        'top': '0%'
      }, duration, function(){
        $(this)
          .addClass('slaider__item-active')
          .siblings()
          .removeClass('slaider__item-active')
          .css('top', '100%')
      });
  };

  var changeMainPicture = function (slide){
    var image = display.find('.slaider__img-main');
    var data = getDataArrays();
    image
      .stop(true, true)
      .fadeOut(duration / 2, function (){
        image.attr('src', data.pic[slide]);
        $(this).fadeIn(duration / 2);
      });
  }
  
  var changeTextData = function (slide) {
    var data = getDataArrays();

    // aviatitle.generate(data.title[slide], title, 'ru');

    // aviatitle.generate(data.skills[slide], skills, 'en');

    // link.attr('href', data.link[slide]);
  }


  this.setDefaults = function (){
    var _that = this,
      data = getDataArrays();
    console.log(data);

    generateMarkups();

    nextBtn
      .find('.slaider__item')
      .eq(_that.counter - 1)
      .addClass('slaider__item-active');
    
      prevBtn
      .find('.slaider__item')
      .eq(_that.counter + 1)
      .addClass('slaider__item-active');

    display
      .find('.slaider__img-main')
      .attr('src', data.pic[_that.counter]);
    
    console.log(_that.counter);
    //changeTextData(_that.counter);
  };
  this.moveSlide = function (direction){
    var _that = this;
    var directions = {
      next: function () {
        // закольцовывание слайдера
        if (_that.counter < itemsLength - 1) {
          _that.counter++;
        } else {
          _that.counter = 0;
        }
      },

      prev: function () {
        if (_that.counter > 0) {
          _that.counter--;
        } else {
          _that.counter = itemsLength - 1;
        }
      }
    };

    directions[direction]();

    if (flag) {
      flag = false;

      if (typeof timeout != 'undefined') {
        clearTimeout(timeout);
      }

      timeout = setTimeout(function () {
        flag = true;
      }, duration);

      slideInLeftBtn(_that.counter);
      slideInRightBtn(_that.counter);
      changeMainPicture(_that.counter);
      //changeTextData(_that.counter);
    }
  };
};

  var slider = new slaider($('.my-works'));
  slider.setDefaults();

  $('.slaider__left').on('click', function(e){
    e.preventDefault();
    slider.moveSlide('prev');
  });


  $('.slaider__right').on('click', function(e){
    e.preventDefault();
    slider.moveSlide('next');
    console.log(slider);
  });

  console.dir(slider);