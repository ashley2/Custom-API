'use strict';

$(document).ready(init);

function init() {






  $('#squareButton').on('click', function(){
    var number = $('#number1').val();
    var url = `http://localhost:8000/square/${number}`
    $.get(url)
    .success(function(number){
      $('#answer').text(number)
    })
    .error(function(err){
      console.log(err);
    })

  });




  $('#sumButton').on('click', function(){
    var number = $('#numbers').val();
    var url = `http://localhost:8000/sum/${number}`
    $.get(url)
    .success(function(number){
      $('#answer2').text(number)
    })
    .error(function(err){
      console.log(err);
    })

  });




  $('#sentenceButton').on('click', function(){
    var sentence = $('#sentenceBox').val();
    var url = `http://localhost:8000/sentence/${sentence}`
    $.get(url)
    .success(function(sentence){
      console.log(sentence);
      $('#sentenceResp').text(sentence);
    })
    .error(function(err){
      console.log(err);
    })

  });





  $('#emailButton').on('click', function(){
    var email = $('#email').val();
    var url = `http://localhost:8000/email/${email}` 
    $.get(url)
    .success(function(gravurl){
      console.log(gravurl);
      $('#image').attr('src', gravurl);
    })
    .error(function(err){
      console.log(err);
    })

  });



  $('#birthdayButton').on('click', function(){
    var birthday = $('#birthday').val();
    var url = `http://localhost:8000/birthday/${birthday}` 
    $.get(url)
    .success(function(age){
      $('#age').text(age);
    console.log(age)
    })
    .error(function(err){
      console.log(err);
    })

  })




}