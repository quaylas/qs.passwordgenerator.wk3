// Assignment code here
// create arrays of differrent character types
var lowercaseAlphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercaseAlphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var passwordNumbers = ['0','1','2','3','4','5','6','7','8','9'];
var specialCharacters = ['!','"','#','$','%','&','\'','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','\\','^','_','`','{','|','}','~'];

// initialize variable for passwordLength
var passwordLength = "";

// initialize boolean variables for each character type
var useLowercase = new Boolean;
var useUppercase = new Boolean;
var useNumbers = new Boolean;
var useSpecialCharacters = new Boolean;

// initialize array to hold selected characters
var passwordChars = [];

// initialize empty string to hold the generated password
var generatedPassword = "";

// function to set password length
var getPasswordLength = function(){
  // Request the user provide a password length
  passwordLength = parseInt(prompt("How many characters should your password contain?\nPlease enter a number between 8 and 128."));
  // check for valid input
  if(typeof(passwordLength) === 'number' && passwordLength >= 8 && passwordLength <= 128){
    return(passwordLength);
  }
  // if input is invalid, restart
  else {
    alert("You have entered an invalid password length.\nPlease enter a number between 8 and 128");
    getPasswordLength();
  }
};

var getCharTypes = function() {
  // ask if lowercase letters should be included
  useLowercase = confirm("Should the password contain lowercase letters?\nSelect 'OK' for YES.\n Select 'Cancel' for NO.");
  // add lowercaseAlphabet to passwordChars if selected
  if (useLowercase){
    passwordChars = passwordChars.concat(lowercaseAlphabet);
  }

  // ask if uppercase letters should be included
  var useUppercase = confirm("Should the password contain uppercase leters?\nSelect 'OK' for YES.\n Select 'Cancel' for NO.");
  // add uppercaseAlphabet to passwordChars if selected
  if (useUppercase){
    passwordChars = passwordChars.concat(uppercaseAlphabet);
  }

  // ask if numbers should be included
  var useNumbers = confirm("Should the password contain numbers?\nSelect 'OK' for YES.\n Select 'Cancel' for NO.");
  // add passwordNumbers to passwordChars if selected
  if (useNumbers){
    passwordChars = passwordChars.concat(passwordNumbers);
  }

  // ask if special characters should be included
  var useSpecialCharacters = confirm("Should the password contain special characters?\nSelect 'OK' for YES.\n Select 'Cancel' for NO.");
  // add specialCharacters to passwordChars if selected
  if (useSpecialCharacters){
    passwordChars = passwordChars.concat(specialCharacters);
  }

  // check to ensure at least one character type was selected, and repeat if not
  if (passwordChars.length === 0){
    alert("You must allow at least one character type.");
    getCharTypes();
  }
};

var generatePassword = function(){
  // call function to get password length
  getPasswordLength();
  // call function to get password character types
  getCharTypes();
  // generate password one character at a time using returned password length and character types
  for(var i = 0; i < passwordLength; i++){
    var randomNumber = Math.floor(Math.random()*(passwordChars.length));
        var nextChar = passwordChars[randomNumber];
        generatedPassword = generatedPassword.concat(nextChar);
      }
      passwordChars = [];
      return(generatedPassword);
  }

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
