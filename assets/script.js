// Array of special characters to be included in password
var specialChars = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// Array of numeric characters to be included in password
var numericChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCaseChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Array of uppercase characters to be included in password
var upperCaseChars = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// Function to generate password with user input
function generatePassword() {
  var pwdOptions = {}; // Empty object to store users password options
  var password = ""; // Empty string to store the password
  var pwdCharacters = []; // Empty array to store the random characters

  // A prompt for the user to enter their chosen password length
  var numberOfChars = prompt("Choose a password length between 10-64 characters.");
  
  //! Validation of the password length chosen by the user
  // If the user does not enter a value ask them to try again
  if (numberOfChars === null) {
    alert("Please enter a number between 10-64.\nThank you!");
    return "Your Secure Password";
  }
  else if (!isFinite(numberOfChars)) {
    // Ensure the user entered a number, using the isFinite which is a function that determines whether the passed value is a finite number.
    alert("You did not enter a number \nPlease try again!");
    return "Your Secure Password";
  }
  else if ((numberOfChars < 10 || numberOfChars > 64)) {
    // If the user enters a password length less than 10 OR greater than 64 they are shown this error
    alert("Please enter a password length between 10-64 characters.\nThank you!");
    return "Your Secure Password";
  }
  
  var pwdLength = parseInt(numberOfChars) // Converting the pwdLength from a string to an int

  // Saving the prompt/confirm answers in an global object named pwOptions to call later
  pwdOptions = {
    pwdLength: pwdLength,
    hasLowerCase: confirm("Add lowercase characters to your password?"),
    hasUpperCase: confirm("Add uppercase characters to your password?"),
    hasNumerical: confirm("Add numbers to your password?"),
    hasSpecial: confirm("Add special characters to your password?"),
  }

  // If the user has confirmed they want lower case, add this to the pwCharacters variable
  if (pwdOptions.hasLowerCase) {
    pwdCharacters = pwdCharacters.concat(lowerCaseChars);
  }
  // If the user has confirmed they want upper case, add this to the pwCharacters variable
  if (pwdOptions.hasUpperCase) {
    pwdCharacters = pwdCharacters.concat(upperCaseChars);
  }
  // If the user has confirmed they want numerical characters, add this to the pwCharacters variable
  if (pwdOptions.hasNumerical) {
    pwdCharacters = pwdCharacters.concat(numericChars);
  }
  // If the user has confirmed they want special characters, add this to the pwCharacters variable
  if (pwdOptions.hasSpecial) {
    pwdCharacters = pwdCharacters.concat(specialChars);
  }

  if (!pwdOptions.hasLowerCase && !pwdOptions.hasUpperCase && !pwdOptions.hasNumerical && !pwdOptions.hasSpecial) {
    alert("Please choose at least one criteria");
    return "Your Secure Password";
  }

  // A for loop to get a random character and add it to the password string. If the user selected 10 chars it will loop through 10 times etc. 
  for (var i = 0; i < pwdOptions.pwdLength; i++) {
    // Created a variable called randomIndex to store the returned array index from the array passed into the function
    var randomIndex = Math.floor(Math.random() * pwdCharacters.length);
    // Stored the random character in the randomCharacter variable to call later
    var randomChar = pwdCharacters[randomIndex];
    // the randomCharacter is added to the password each time the for loop iterates
    password += randomChar;
  }

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