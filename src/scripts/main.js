// $(document).ready(function(){
//   blur();
// })

// $(window).resize(function(){
//   blur();
// });

// function blur(){
//   var imgWidth = $('.say-my__background').width(),
//       blurSection = $('.say-my'),
//       blur = $('.feedback__form-blur'),
//       posY = blurSection.offset().top - blur.offset().top,
//       posX = blurSection.offset().left - blur.offset().left;
//   console.log(posX, posY);
//   console.log(imgWidth);

//   blur.css({
//     'background-size' : imgWidth + 'px' + ' ' + 'auto',
//     'background-position': posX + 'px' + ' ' + posY + 'px'
//   })
// }


// function scrollTriangleBtn(){
//   const scrollBtn = document.getElementsByClassName('hero__scroll-btn')[0];
//   var blockHeight;

//   if(document.getElementsByClassName('my-works')[0]){
//     blockHeight = document.getElementsByClassName('my-works')[0].offsetTop;
//   }
//   else{
//     blockHeight = document.getElementsByClassName('about')[0].offsetTop;
//   }
  
//   scrollBtn.addEventListener('click', function(){
//       window.scrollTo(0, blockHeight);
//   });  
// }

// scrollTriangleBtn();

// window.onresize = function () {
//   scrollTriangleBtn();
// }

// const parallaxContainer = document.querySelector('.parallax');
// const layers = parallaxContainer.children;

// const moveLayers = e =>{
//   const initialX = window.innerWidth / 2 - e.pageX;
//   const initialY = window.innerHeight / 2 - e.pageY;
//   console.log(initialX,   initialY);
//   Array.from(layers).forEach((layer, i) => {
//     const divider = i / 100;
//     const positionX = initialX * divider;
//     const positionY = initialY * divider;
//     const bottomPosition = window.innerHeight / 2 * divider;
//     const image = layer.firstElementChild;
//     layer.style.transform = `translate(${positionX}px, ${positionY}px)`;
//     layer.style.bottom = `${-bottomPosition}px`;
//   });
// }
// window.addEventListener('mousemove', moveLayers);


// $(window).scroll(function(){
//   if($(window).scrollTop() >= $('.about').offset().top){
//     $('.skill__circle').addClass('skill__circle-active');
//   }else{
//     $('.skill__circle').removeClass('skill__circle-active') 
//   }
// })

// let scrollMenu = (function(){
//   const $news = $('.section__list');
//   const $item = $('.sidebar__content');
//   const $wrapMenu = $('.sidebar__item');
//   let positionArticle = [];
//   let offsetHeight = 0;
//   let flagAnimation = true;

//   const _setPositionArticle = function(elements) {
//     elements.each(function(item) {
//       positionArticle[item] = {}
//       positionArticle[item].top = $(this).offset().top - offsetHeight
//       positionArticle[item].bottom = positionArticle[item].top + $(this).innerHeight()
//     })
//   }
  
//   const _scrollPageFixMenu = function(e) {
//     let scroll = window.pageYOffset;
//     if (scroll < $news.offset().top) {
//       $wrapMenu.removeClass('fixed')
//     } else {
//       $wrapMenu.addClass('fixed')
//     }
//   }

//   const _scrollPage = function(e) {
//     const isFirstVision = function(element, current) {
//       let scroll = window.pageYOffset;
//       return scroll >= element.top && scroll < element.bottom && !current.hasClass('sidebar__list--active')
//     }
//     positionArticle.forEach((element, index) => {
//       let $currentElement = $item.eq(index);
//       if (isFirstVision(element, $currentElement)) {
//         $currentElement.addClass('sidebar__list--active').siblings().removeClass('sidebar__list--active')
//       }
//     })
//   }

//   const _clickMenu = function(e) {
//     if (flagAnimation) {
//       flagAnimation = false;
//       let $element = $(e.target)
//       let index = $element.index()
//       let sectionOffset = Math.ceil(positionArticle[index].top);
//       $(document).off('scroll', _scrollPage)
//       $element.siblings().removeClass('sidebar__list--active')

//       $('body, html').animate({scrollTop: sectionOffset}, 1000, () => {
//         $element.addClass('sidebar__list--active')
//         $(document).on('scroll', _scrollPage)
//         flagAnimation = true;
//       })
      
//     }
//   }

//   const addListener = function() {
//     $(window).one('load', function(e) {
//       _setPositionArticle($news)
//       $('.sidebar__item').on('click', _clickMenu)
//       $(document).on('scroll', _scrollPage)
//       $(document).on('scroll', _scrollPageFixMenu)
//     })

//     $(window).on('resize', function(e) {
//       _setPositionArticle($news)
//     })
//   }

//   return {
//     init: addListener
//   }

// })()

// scrollMenu.init();


$('.hamburger-menu').click(function(){
  $('.overlay').addClass('overlay-visible'); 
  $('body').addClass('body-active__menu');
})

$('.overlay__btn-exit').click(function(){
  $('.overlay').removeClass('overlay-visible'); 
  $('body').removeClass('body-active__menu');
})