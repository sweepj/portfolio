export default function validationForm(){
  $('.feedback__form').validate({
    rules: {
      email:{
        required: true,
        email: true
      },
      name: {
        required: true,
        minlength: 3
      },
      message: {
        required: true
      }
    },
    messages: {
      email:{
        required: "Вы забыли ввести email"
      },
      name:{
        required: 'Вы забыли ввести имя'
      },
      message:{
        required: "Вы забыли написать сообщение"
      }
    }
  });
}


// var validation = (function(){

//   var init = function(){
//     _setUpListener();
//   };

//   var _setUpListener = function(){
//   };

//   var _createQtip = function(element, position){
//     var form = $('.feedback__form').validate({   
//       console.log(form);
//       if(position === 'right'){
//         position = {
//           my: 'bottom center',
//           at: 'top center'
//         }
//       }else{
//         position = {
//           my: 'top center',
//           at: 'bottom center',
//           adjust: {
//             method:'shift none'
//           }
//         }
//       }
//       form.validate({
//         rules:{
//           email: {
//             required: true,
//             email: true
//           },
//         }
//       })
//     )
//   }
//   };

//   return{
//     init: init
//   };

// })();

// validation.init();