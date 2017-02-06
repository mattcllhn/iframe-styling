$(document).ready(function(){
  console.log('doc 1 JQ');
  $('#frame').hide();

  window.addEventListener('message', receiver, false);
  // console.log($('#frame')[0]);
  function receiver(e) {
    $.get('./iframe.style.css',function(data){
      // data = formatData(data);
      console.log('origin is ',e.origin);
      e.source.postMessage(
        data,
        e.origin
      );
      $('#frame').show();
    });
  }//receiver
});//docready
