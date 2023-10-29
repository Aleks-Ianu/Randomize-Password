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
var passwordLength = 0;
//Function to prompt user for password options
function getPasswordOptions() {
  //create a variable to store the value of the prompt of how many characters the password should generate
  passwordLength = prompt("Choose the length of the password you want to generate between 8 and 128 characters.");
  // change the value of the variable from string to a numeric value
  passwordLength = +passwordLength;
  // check if the length is between 8 to 128 characters
  if (passwordLength >= 8 && passwordLength <= 128) {
      // create confirms to ask the user what type of caracters should the password include 
      var lowerCaseChar = confirm("Do you want to include lowercase characters in your password?");
      var upperCaseChar = confirm("Do you want to include upperCase characters in your password?");
      var numericChar = confirm("Do you want to include numbers in your password?");
      var specialChar = confirm("Do you want to include special characters in your password?");

        var passwordOptions = {
        lowerCase : lowerCaseChar,
        upperCase : upperCaseChar,
        numeric : numericChar,
        specialCase : specialChar
      };
  } else {
    alert("The length of the password has to be bewteen 8 and 128 characters, please try again with a valid number");
  };
  return passwordOptions;
}
      


// Function for getting a random element from an array
function getRandom(arr) {
  let passwordChar = "";
  for (let i = 0; i < passwordLength; i++) {
    const element = Math.floor(Math.random() * arr.length);
    passwordChar += arr[element];
  }
  return passwordChar;
}


// Function to generate password with user input
// Check if the user has selected at least one set of Characters
function generatePassword() {
  var  passwordOptions = getPasswordOptions();

  if (passwordOptions.lowerCase !== true && passwordOptions.upperCase !== true && passwordOptions.numeric !== true && passwordOptions.specialCase !== true ) {
    alert("You need to specify at least one set of characters, try again.");
  }
  // create an empty array to concatenate every true character set
  var charSet = [];
  // Concatenate the true conditionals in to the empty array
  if (passwordOptions.lowerCase) {
    charSet = charSet.concat(lowerCasedCharacters);
  }
  if (passwordOptions.upperCase ) {
    charSet = charSet.concat(upperCasedCharacters);
  }
  if (passwordOptions.numeric) {
    charSet = charSet.concat(numericCharacters);
  }
  if (passwordOptions.specialCase) {
    charSet = charSet.concat(specialCharacters);
  }
  var password = getRandom(charSet);
  return password;
  
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

