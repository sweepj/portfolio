export default function scrollBlogMenu(){
  let scrollMenu = (function(){
  const $news = $('.section__list');
  const $item = $('.sidebar__list');
  const $wrapMenu = $('.sidebar__item');
  let positionArticle = [];
  let offsetHeight = 0;
  let flagAnimation = true;

  const _setPositionArticle = function(elements) {
    elements.each(function(item) {
      positionArticle[item] = {}
      positionArticle[item].top = $(this).offset().top - offsetHeight
      positionArticle[item].bottom = positionArticle[item].top + $(this).innerHeight()
    })
  }
  
  const _scrollPageFixMenu = function(e) {
    let scroll = window.pageYOffset;
    if (scroll < $news.offset().top) {
      $wrapMenu.removeClass('fixed')
    } else {
      $wrapMenu.addClass('fixed')
    }
  }

  const _scrollPage = function(e) {
    const isFirstVision = function(element, current) {
      let scroll = window.pageYOffset;
      return scroll >= element.top && scroll < element.bottom && !current.hasClass('sidebar__list--active')
    }
    positionArticle.forEach((element, index) => {
      let $currentElement = $item.eq(index);
      if (isFirstVision(element, $currentElement)) {
        $currentElement.addClass('sidebar__list--active').siblings().removeClass('sidebar__list--active')
      }
    })
  }

  const _clickMenu = function(e) {
    if (flagAnimation) {
      flagAnimation = false;
      let $element = $(e.target)
      let index = $element.index()
      let sectionOffset = Math.ceil(positionArticle[index].top);
      $(document).off('scroll', _scrollPage)
      $element.siblings().removeClass('sidebar__list--active')

      $('body, html').animate({scrollTop: sectionOffset}, 1000, () => {
        $element.addClass('sidebar__list--active')
        $(document).on('scroll', _scrollPage)
        flagAnimation = true;
      })
      
    }
  }

  const addListener = function() {
    $(window).one('load', function(e) {
      _setPositionArticle($news)
      $('.sidebar__item').on('click', _clickMenu)
      $(document).on('scroll', _scrollPage)
      $(document).on('scroll', _scrollPageFixMenu)
    })

    $(window).on('resize', function(e) {
      _setPositionArticle($news)
    })
  }

  return {
    init: addListener
  }

})()

  scrollMenu.init();
}
