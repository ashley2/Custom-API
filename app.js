'use strict'

const PORT = 8000


var http = require('http');

var util = require('./util');

var md5 = require('md5');



var server = http.createServer(function(req, res){
  console.log('request.url', req.url);
  console.log('request.method', req.method);

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Request-Method', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  res.setHeader('Access-Control-Allow-Headers', '*');


  var urlParts = req.url.match(/[^/]+/g);

  if(urlParts){
    var path = urlParts.shift()
    switch(path){
      case 'birthday':
      var birthday = urlParts[0]
      var age = util.dateToAge(birthday)
      res.write(JSON.stringify(age));
      break;
      case 'email':
      var email = decodeURI(urlParts[0])
      var hash = md5(email)
      var url = ('http://2.gravatar.com/avatar/' + hash);
      res.write(url);
      break;
      case 'square':
      var num = parseInt(urlParts[0]);
      var square = Math.pow(num, 2);
      res.write(square.toString());
      break;
      case 'sum':
      var sum = urlParts.reduce(function(sum, num){
        return sum + parseInt(num);
      }, 0);
      res.write(sum.toString());
      break;
      case 'sentence':
      var sentence = decodeURI(urlParts[0]);
      var statsObj = util.sentenceAnalyzer(sentence);
      res.write(JSON.stringify(statsObj));
      break;

    }
  } 

  res.write('\n');
  res.end()


})

server.listen(PORT, function(err){
  console.log('ERR', err);
});






