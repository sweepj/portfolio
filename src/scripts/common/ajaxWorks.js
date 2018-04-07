// export default (function(){
//   var input;
//   let inputBtn = $('.form__input');
//   Array.from(inputBtn).forEach((input, i, inputBtn) => {
//     $(input).focus(function(){
//       $(input).removeClass('error');
//       $('.error-text'+ i).remove();
//     });
//     $('.form__btn-submit').on('submit',function(e){
//       let $value = $(input).val();
//       if($value.length <= 0){
//         if($('.error-text'+ i).length <= 0){
//           createErrorBlock(input, i);
//         }
//         $(input).addClass('error');
//       }else{
//         $(input).removeClass('error');
//       }
//     });
//   }); 
// })

// function createErrorBlock(element, i){
//   $('.feedback__form-content').append('<div class="error-block">')
//   let errorBlock = Array.from($('.error-block'));
//   $(errorBlock[i]).addClass('error-text'+ i);
//   if($('.error-block').length > 0){
//     $('.error-block').text("Это поле неможет быть пустым");
//     let height = $(element).height();
//     let posY = $(element).position().top + height;
//     $('.error-text'+ i).css({"top": posY});
//   }
// }

var myModule = (function(){

  var init = function (){
    _setUpListeners();
  };

  var _setUpListeners = function (){
    $('.feedback__form').on('submit', _addFeedback);
  }

  var _addFeedback = function(e){
    console.log('1');
    e.preventDefault();

    var form = $(this),
        url = 'add_project.php',
        data = form.serialize();
        console.log(data);
        
        
    $.ajax({
      url: url,
      type: 'POST',
      dataType: 'json',
      data: data,
    })
    .done(function(ans){
      console.log('success');
      form.find('.error-block').text(ans.text);
    })
    .fail(function(){
      console.log('error');
    })
    .always(function(){
      console.log('complete')
    })
  };
  
  return{
    init: init
  };

})();

myModule.init();