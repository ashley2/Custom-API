
'use strict'
exports.sentenceAnalyzer = function(sentence){

  var stats = {};
  var letterMatch = sentence.match(/[a-z]/ig) || [];
  stats.letterCount = letterMatch.length
  stats.wordCount = sentence.split(' ').length;
  stats.avgWordCount = stats.letterCount / stats.wordCount;

  return stats;
}; 

var moment = require('moment')



exports.dateToAge = function(birthday){

  var age = {}



var momentBirthday = moment(birthday)
var momentToday = moment()


  age.day = Math.abs(momentBirthday.diff(momentToday, 'years')) + ' years'
  age.birthday = moment(birthday).format('dddd MMMM Do YYYY')


  return age;



}