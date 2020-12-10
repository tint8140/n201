
// arrays.js			Dave Reed
// Functions for manipulating arrays of values
/////////////////////////////////////////////////////////

function Acronym(phrase) 
// Assumes: phrase is a string of words, separated by whitespace 
// Returns: the acronym made up of first letters from the words 
{
  var lists;

  lists = ['bigbang','bts','exo','nct']    // CONVERT phrase TO AN ARRAY 
  acronym = '';						        // INITIALIZE THE acronym

  index = 0; 						        // START AT FIRST WORD 
  while (index < words.length) {		    // AS LONG AS WORDS LEFT 
    nextWord = words[index]; 			    //	   GET NEXT WORD
    acronym = acronym + nextWord.charAt(0); //   ADD FIRST CHAR OF WORD 
    index = index + 1;				        //   GO ON TO NEXT WORD 
  }
  return acronym.toUpperCase();		        // RETURN UPPER CASE acronym
}


function ParseArray(strArray) 
// Assumes: strArray is an array of strings representing numbers 
// Returns: a copy of strArray with items converted to numbers 
{
  var numArray, index; 
  
//   numArray = [ ];						// CREATE EMPTY ARRAY TO STORE COPY

//   index = 0; 							// FOR EACH ITEM IN strArray
//   while (index < strArray.length) { 	//   CONVERT TO NUMBER AND COPY
//     numArray[index] = parseFloat(strArray[index]);
//     index = index + 1; 
//   }
//   return numArray;						// FINALLY, RETURN THE COPY
// }


// function Average(numArray)
// // Assumes: numArray is an array of numbers
// // Returns: average of the numbers in numArray
// {
//   var sum, index;
 
//   sum = 0;                             // INITIALIZE sum
 
//   index = 0;                           // START AT FIRST NUMBER
//   while (index < numArray.length) {    // AS LONG AS NUMBERS LEFT
//     sum = sum + numArray[index]; 		//   ADD NUMBER TO sum
// 	index = index + 1;                 //   GO ON TO NEXT NUMBER
//   }
//   return sum/numArray.length;          // RETURN AVERAGE
// }


// function ConvertToIb()
// {
//   var pounds, kilos;
  
//   pounds = parseFloat(document.getElementById('pound').value);
  
//   kilos= KiloToPound(pounds);
//   kilos= Math.round(kilos*100)/100;
//   document.getElementById('outputDiv').innerHTML = 
//     'That is ' + kilos + ' pounds.';
// }
// function ConvertToKG()
// {
//   var pounds, kilos;
  
//   pounds = parseFloat(document.getElementById('kilo').value);
  
//   kilos = PoundToKilo(pounds);
//   kilos= Math.round(kilos*100)/100;
//   document.getElementById('InputDiv').innerHTML = 
//     'That is ' + kilos + ' kilograms.';
// }


// function KiloToPound(pounds) {
//   var kilos;

//   kilos = pounds * 2.2046226218;
//   return kilos;
// }

// function PoundToKilo(kilos) {
//   var pounds;

//   pounds = kilos * 0.45359237;
//   return pounds;
// }