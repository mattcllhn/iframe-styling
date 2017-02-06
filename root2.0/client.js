// console.log('doc 2 JS');
$(document).ready(function(){
  window.parent.postMessage(
    'ping',
    '*'
  );
  window.addEventListener('message', receiver, false);
  function receiver(e) {
    console.log(e.data);
  $('head').append('<style>'+ e.data +'</style>');

  }//reciever

$('button').click(function(){
  console.log('button clicked');
});
});//docready
