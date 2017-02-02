var express = require('express');
var app = express();
var port = 3002;
var path = require('path');
app.use(express.static('root1'));
app.use('/node_modules', express.static(path.resolve('./node_modules')));
app.use('/', express.static(path.resolve('./')));


app.listen(port, function(){
  console.log('listening on'+port);
});
app.get('/',function(req,res){
  res.sendFile(path.resolve('doc1.html'));
});
