export default function hamburgerButton(){
  $('.hamburger-menu').click(function(){
    $('.overlay').addClass('overlay-visible'); 
    $('body').addClass('body-active__menu');
  })
  
  $('.overlay__btn-exit').click(function(){
    $('.overlay').removeClass('overlay-visible'); 
    $('body').removeClass('body-active__menu');
  })
}