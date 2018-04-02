export default function activeSkill(){
  $(window).scroll(function(){
    if($(window).scrollTop() >= $('.about').offset().top){
      $('.skill__circle').addClass('skill__circle-active');
    }else{
      $('.skill__circle').removeClass('skill__circle-active') 
    }
  })  
}
