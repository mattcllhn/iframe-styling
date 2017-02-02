$(document).ready(function(){
  console.log('doc 1 JQ');
  window.addEventListener('message', receiver, false);
  console.log($('#frame')[0]);
  function receiver(e) {
    $.get('./iframe.style.css',function(data){
      data = formatData(data);
      e.source.postMessage(
        data,
        e.origin
      );
    });
  }//receiver
});//docready
function formatData(data){
  var formattedArray = [];
  var styleObject= {
    selector:'',
    style:''
  };
  var sel = '';
  var styles = false;
  var sty = '';
  for (var i = 0; i < data.length; i++) {
    if(data[i]=='{'){
      styles=true;
      styleObject.selector = sel;
      sel = '';
    }else if(data[i]=='}'){
      styles=false;
      styleObject.style = sty;
      formattedArray.push(styleObject);
      styleObject= {};
      sty = '';
    }//else if
    if(data[i] !== '}' && data[i] !== ' '&& data[i] !== '\r' && data[i] !== '\n' && styles === false){
      sel+=data[i];
    }//if data[i]
    if(data[i] !== '{' && data[i] !== '\r' && data[i] !== '\n' && styles === true){
      sty+=data[i];
    }//if data[i]
  }//for loop

  console.log(formattedArray);
  return formattedArray;
}//formatData
