// Assignment code here
// create arrays of differrent character types
var lowercaseAlphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercaseAlphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var passwordNumbers = ['0','1','2','3','4','5','6','7','8','9'];
var specialCharacters = ['!','"','#','$','%','&','\'','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','\\','^','_','`','{','|','}','~'];
var passwordChars = [];

// generatePassword function
function generatePassword(x){
  // Request the user provide a password length
  var passwordLength = parseInt(prompt("How many characters should your password contain?\nPlease enter a number between 8 and 128."));

  // If the user enters a valid length, ask about data types
  if(typeof(passwordLength) === 'number' && passwordLength >= 8 && passwordLength <= 128){
    // ask if lowercase letters should be included
    var useLowercase = confirm("Should the password contain lowercase letters?");
    // add lowercaseAlphabet to passwordChars if selected
    if (useLowercase){
      passwordChars = passwordChars.concat(lowercaseAlphabet);
    }
    // ask if uppercase letters should be included
    var useUppercase = confirm("Should the password contain uppercase leters?");
    // add uppercaseAlphabet to passwordChars if selected
    if (useUppercase){
      passwordChars = passwordChars.concat(uppercaseAlphabet);
    }
    // ask if numbers should be included
    var useNumbers = confirm("Should the password contain numbers?");
    // add passwordNumbers to passwordChars if selected
    if (useNumbers){
      passwordChars = passwordChars.concat(passwordNumbers);
    }
    // ask if special characters should be included
    var useSpecialCharacters = confirm("Should the password contain special characters?");
    // add specialCharacters to passwordChars if selected
    if (useSpecialCharacters){
      passwordChars = passwordChars.concat(specialCharacters);
    }
    // alert and restart if all data types are refused
    if (useLowercase === 'false' && useUppercase === 'false' && useNumbers === 'false' && useSpecialCharacters === 'false'){
      alert("You must allow at least one character type.")
      generatePassword();
    }
      // generate password using selected data types
    else {
      var password = "";
      for(var i = 0; i < passwordLength; i++){
        var randomNumber = Math.floor(Math.random()*(passwordChars.length));
        var nextChar = passwordChars[randomNumber];
        console.log(`new password will be ${password} + ${nextChar}, iterator is at ${i}, random number is ${randomNumber}, length of passwordChars is ${passwordChars.length}`);
        password = password.concat(nextChar);
      }
      passwordChars = [];
      return(password);
    }
  }
  // alert and restart for invalid password lengths
  else {
    alert("Please enter a number between 8 and 128");
    generatePassword();
  }
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