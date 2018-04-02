export default function scrollTriangleBtn(){
  const scrollBtn = document.getElementsByClassName('hero__scroll-btn')[0];
  var blockHeight;

  if(document.getElementsByClassName('my-works')[0]){
    blockHeight = document.getElementsByClassName('my-works')[0].offsetTop;
  }
  else{
    blockHeight = document.getElementsByClassName('about')[0].offsetTop;
  }
  
  scrollBtn.addEventListener('click', function(){
      window.scrollTo(0, blockHeight);
  });  
}