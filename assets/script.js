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

var pwOptions = {};
var pwCharacters = [];
var password = "";

// Function to prompt user for password options
function getPasswordOptions() {
  var numberOfCharacters = prompt("Choose a password length between 10-64 characters.");
  var passwordLength = parseInt(numberOfCharacters) // Converting the passwordLength from a string to an int

  // Validation of the password length chosen by the user
  if (passwordLength < 10) {
    alert("Password must have more than 9 characters");
    return "";
  }
  if (passwordLength > 64) {
    alert("Password must not have more than 64 characters");
    return "";
  }

  // Saving the prompt/confirm answers in an global object named pwOptions to call later
  pwOptions = {
    passwordLength: passwordLength,
    hasLowerCase: confirm("Add lowercase characters to your password?"),
    hasUpperCase: confirm("Add uppercase characters to your password?"),
    hasNumerical: confirm("Add numbers to your password?"),
    hasSpecial: confirm("Add special characters to your password?"),
  }

  return;
}

// ? This could be used within generate password, but to return random chars from an array created from the users password options
// Function for getting a random element from an array
function getRandom(arr) {
  for (var i = 0; i < selectedOptions.passwordLength; i++) {
    password += arr[Math.floor(Math.random() * arr.length)];
  }

  return password;
}

// TODO: Find a way to use the pwOptions object to create the pwCharacters array of all possible chars requested so the function getRandom can get random chars
// Function to generate password with user input
function generatePassword() {
  getPasswordOptions()
  console.log(pwOptions)
  console.log(pwOptions.hasLowerCase)
  console.log(pwOptions.hasUpperCase)
  console.log(pwOptions.hasNumerical)
  console.log(pwOptions.hasSpecial)
  console.log(pwOptions.passwordLength)

  // If the user has confirmed they want lower case, add this to the pwCharacters variable
  if (pwOptions.hasLowerCase) {
    pwCharacters += lowerCasedCharacters;
  }
  // If the user has confirmed they want upper case, add this to the pwCharacters variable
  if (pwOptions.hasUpperCase) {
    pwCharacters += upperCasedCharacters;
  }
  // If the user has confirmed they want numerical characters, add this to the pwCharacters variable
  if (pwOptions.hasNumerical) {
    pwCharacters += numericCharacters;
  }
  // If the user has confirmed they want special characters, add this to the pwCharacters variable
  if (pwOptions.hasSpecial) {
    pwCharacters += specialCharacters;
  }

  console.log(pwCharacters + " " + typeof pwCharacters);
  // ! This method seems to return a string, with lots of commas. Need to return an array so that the password isn't just full of commas

  getCharString(pwCharacters)

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