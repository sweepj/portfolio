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


$(window).scroll(function(){
  if($(window).scrollTop() >= $('.about').offset().top){
    $('.skill__circle').addClass('skill__circle-active');
  }else{
    $('.skill__circle').removeClass('skill__circle-active') 
  }
})