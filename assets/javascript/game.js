//Generate random word the user will try to guess
var words = ['VALERIE', 'LUCAS', 'NEHEMIAH', 'JAVASCRIPT', 'HELP', 'CONFUSED', 'CODING', 'PUERTORICO', 'MICROBIOLOGY', 'HOUSTON', 'BOOTCAMP'];

function chooseWord () {
    var randomWord = words[Math.floor(Math.random() * words.length)];

    return randomWord;

}

//Create a "field" area where the word is located and has underlines representing each letter.
//Take the words and create blank lines for each of the letters of the words.

var letters = chooseWord();
console.log(letters);
var letterArrays = letters.split("");
console.log(letterArrays);
var error = 0;

var newArray = [];

for (var i = 0; i < letterArrays.length; i++){
  newArray[i] = "_";
}

console.log(newArray);

function printWord(){
	for (var i = 0; i < newArray.length; i++){
		var guessField = document.getElementById("word-display");
		var letterLines = document.createTextNode(newArray[i]);
  		guessField.appendChild(letterLines);
	}
}
//printWord gets called when the page loads.
printWord();

//YAS BESH I FIGURED IT OUT WHAT IT DO!

//The user will click on a key and game checks if the letter clicked is located in the random word.

var checkLetter = function(){
  console.log('guess-button');
  var a = document.guessbox; //guessbox is a form in the html
  var x = a.elements["letter-input"]; //pulling out the letter-input id from html and assigning it to variable x
  var character = x.value; //this should be the letter inputed.
  character = character.toUpperCase();

  console.log(character)
  for (var i = 0; i < letterArrays.length; i++){
    if(letterArrays[i] === character){
      newArray[i] = character + " "; //replacing the underscore with the letter inputed.
      var hit = true;
    }
  x.value = "";
  }
  console.log(newArray);
  var guessField = document.getElementById("word-display");
  guessField.innerHTML= ""; 
  printWord();

//Else, it'll go to an incorrect letter bank and the hangman grows.

   if (!hit) {
    var guessedLetters = document.getElementById("wrong-letters");
    var inputLetters = document.createTextNode(" " + character);
    guessedLetters.appendChild(inputLetters); 
    error++;
    var hangman = document.getElementById("hangman");
    hangman.src = "http://www.writteninpencil.de/Projekte/Hangman/hangman" + error + ".png";
  }

//Needs to check if all letters in the random word are present.
  var finished = true;
  for (var i = 0; i < newArray.length; i++){
    if(newArray[i] === "_"){
      finished = false;
    }
  }

  if(finished){
    window.alert("You win!");
  }

//After a certain number of ties, the user will lose unless he wins first by having all the letters present in the guess field. 

  if(error === 6){
    window.alert("Sucks to suck!");
  }

}


 





//after winning or losing, the game restarts