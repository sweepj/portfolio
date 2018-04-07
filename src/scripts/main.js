import blur from './common/blur';
import scrollTriangleBtn from './common/scrollTriangle';
import activeSkill from './common/activeSkill';
import parallax from './common/parallax';
import scrollBlogMenu from './common/scrollMenu';
import hamburgerButton from './common/hamburgerButton';
//import ajaxWorks from './common/ajaxWorks';
import validationForm from './common/validationForm';
import slider from './common/slider';

if(document.querySelector('.parallax')){
  parallax();
}

if($('.feedback__form-blur').length > 0){
  $(document).ready(function(){
    blur();
  })
  
  $(window).resize(function(){
    blur();
  });
}

if(document.getElementsByClassName('hero__scroll-btn')[0]){
  scrollTriangleBtn();

  window.onresize = function () {
    scrollTriangleBtn();
  }
}

if($('.skill__circle').length > 0){
  $(document).ready(function(){
    activeSkill();
  })
  $(window).resize(function(){
    activeSkill();
  });
}

if($('.blog').length > 0){
  scrollBlogMenu();
}

if($('.overlay').length > 0){
  hamburgerButton();
}

if($('.feedback__form').length > 0){
  validationForm();
}