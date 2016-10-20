"use strict";

$( document ).ready(function() {
runCalc();
});
/*************GLOBAL VARS*******************/
var calcString = '';

/*************GLOBAL VARS*******************/

function runCalc() {
  getClickedButton();
  // writeToScreen();
}

function getClickedButton(){
  $('.buttons').on('click', function(event) {
    var target = $(event.target);
      if (target !== $(event.currentTarget)) {
        if(target.text() === "C") {
        buttonClear();
        }
      else if(target.text().length > 1) {
        calcString = calcString;
        }
      else if(target.text() === 'x' ){
        calcString += '* ';
        $('#screen').text(calcString);
      }
      else if(target.text() === '÷' ){
        calcString += '/ ';
        $('#screen').text(calcString);
      }
      else if(target.text() === "=") {
        evaluate();
      }
      else{
        calcString += target.text();
        $('#screen').text(calcString);
        }
      }});
    }

function buttonClear() {
      $('#screen').text('');
        calcString = '';
      }

function evaluate() {
  // var prevCalcString = calcString;
  // console.log(prevCalcString);
  // if(isNaN(calcString)) {
  //   $('#screen').text('ERROR');
  // }
  //  else {
    calcString = eval(calcString);
    calcString = calcString.toFixed(2);
   $('#screen').text(calcString);
}
