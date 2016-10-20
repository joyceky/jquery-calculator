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
        calcString += target.text() + ' ';
        $('#screen').text(calcString);
        }
      }});
    }

function buttonClear() {
      $('#screen').text('');
        calcString = '';
      }

function evaluate() {
  calcString = eval(calcString);
  $('#screen').text(calcString);
}

// function writeToScreen() {
// //when the user clicks inside of the button containers,
// // log the inner text of the button to the screen
// $('#screen').on('click', function(event) {
//     event.currentTarget.innerText = clickedButton;
// });
// }
