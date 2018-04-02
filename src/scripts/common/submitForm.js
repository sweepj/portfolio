export default (function(){
  $('.form__btn-submit').click(function(){
    event.preventDefault();
    let inputBtn = $('.form__input');
    Array.from(inputBtn).forEach((input, i, inputBtn) => {
      let $value = $(input).val();
      if($value.length <= 0){
        console.log('опа ошибочка вышла )))');
      }
      console.log($value);
    });
  })  
})
