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

// Function for getting a random element from an array
function getRandom(arr) {
  // A for loop to get a random character and add it to the password string. If the user selected 10 chars it will loop through 10 times etc. 
  for (var i = 0; i < pwOptions.passwordLength; i++) {
    // Created a variable called randomIndex to store the returned array index from the array passed into the function
    var randomIndex = Math.floor(Math.random() * arr.length);
    // Stored the random character in the randomCharacter variable to call later
    var randomCharacter = arr[randomIndex];
    // the randomCharacter is added to the password each time the for loop iterates
    password = password + randomCharacter;
  }
  // Returns the password to store in the global variable
  return password;
}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions()

  // If the user has confirmed they want lower case, add this to the pwCharacters variable
  if (pwOptions.hasLowerCase) {
    pwCharacters = pwCharacters.concat(lowerCasedCharacters);
  }
  // If the user has confirmed they want upper case, add this to the pwCharacters variable
  if (pwOptions.hasUpperCase) {
    pwCharacters = pwCharacters.concat(upperCasedCharacters);
  }
  // If the user has confirmed they want numerical characters, add this to the pwCharacters variable
  if (pwOptions.hasNumerical) {
    pwCharacters = pwCharacters.concat(numericCharacters);
  }
  // If the user has confirmed they want special characters, add this to the pwCharacters variable
  if (pwOptions.hasSpecial) {
    pwCharacters = pwCharacters.concat(specialCharacters);
  }

  if (!selectedOptions.hasLowerCase && !selectedOptions.hasUpperCase && !selectedOptions.hasNumerical && !selectedOptions.hasSpecial) {
    alert("Please choose at least one criteria");
    return "";
  }

  getRandom(pwCharacters)

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