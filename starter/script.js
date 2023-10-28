// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];



// create a variable to store the value of the prompt of how many characters the password should generate
var passwordLength = prompt("Choose the length of the password you want to generate between 8 and 128 characters.");
// change the value of the variable from string to a numeric value
passwordLength = +passwordLength;
// console.log(passwordLength);
// check if the length is between 8 to 128 characters
if (passwordLength >= 8 && passwordLength <= 128) {
    // create confirms to ask the user what type of caracters should the password include 
    var lowercaseCar = confirm("Do you want to include lowercase characters in your password?");
    // console.log(lowercaseCar);
    var upperCaseCar = confirm("Do you want to include upperCase characters in your password?");
    // console.log(upperCaseCar);
    var numericCar = confirm("Do you want to include numbers in your password?");
    // console.log(numericCar);
    var specialCar = confirm("Do you want to include special characters in your password?");
    // console.log(specialCar);
} else {
  alert("The length of the password has to be bewteen 8 and 128 characters, please try again with a valid number");
}


// Function to prompt user for password options
function getPasswordOptions() {

}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);