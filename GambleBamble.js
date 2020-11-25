/*
* The GambleBamble program implements an application that
* random number guessing game with the user which tells them how many guessed
* it took them to get it right.
*
* @author  Ben Whitten
* @version 1.0
* @since   2020-11-24 
*/

// Defining require and process
/*eslint no-undef: "error"*/
/*global require, process*/

var attempts = 0;


// Constant variable.
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var recursiveAsyncReadLine = function () {
  try {
    // input
    
    var gameNumber = Math.floor(Math.random() * 6 + 1);

    attempts = (attempts + 1);

    rl.question('A 6 sided dice has been rolled, guess the number: ', (playerNumber) => {

      if (playerNumber == gameNumber) {
        // output
        console.log(`You guessed correctly!`);
        console.log(`it took you: ${attempts} attempts`);
        return rl.close();

      } else {
        console.log(`Wrong, Try again!`);
        //Calling this function again to ask new question
        recursiveAsyncReadLine();
      }
    });

  } catch(err) {
    console.log();
    console.log(`An error has occurred.`);
  }
};

recursiveAsyncReadLine();
