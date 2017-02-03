// console.log('doc 2 JS');
$(document).ready(function(){
  window.parent.postMessage(
    'ping',
    '*'
  );
  window.addEventListener('message', receiver, false);
  function receiver(e) {
  $('head').append('<style>'+ e.data +'</style>');


    // for (var i = 0; i < e.data.length; i++) {
      // var selector = e.data[i].selector;
      // var style = e.data[i].style;
      // $(selector).attr('style',style);
    // }//for loop
  }//reciever


});//docready
