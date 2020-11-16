// Assignment code here
// create arrays of differrent character types
var lowercaseAlphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercaseAlphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var passwordNumbers = ['0','1','2','3','4','5','6','7','8','9'];
var specialCharacters = ['!','"','#','$','%','&','\'','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','\\','^','_','`','{','|','}','~'];

// initialize array to hold selected characters
var passwordChars = [];

// generatePassword function
function generatePassword(){
  // Request the user provide a password length
  var passwordLength = parseInt(prompt("How many characters should your password contain?\nPlease enter a number between 8 and 128."));
  
  console.log(`password length is ${passwordLength}`);
  
  // If the user enters a valid length, ask about data types
  if(typeof(passwordLength) === 'number' && passwordLength >= 8 && passwordLength <= 128){
    // ask if lowercase letters should be included
    var useLowercase = confirm("Should the password contain lowercase letters?");

    console.log(`useLowercase is ${useLowercase}`);

    // add lowercaseAlphabet to passwordChars if selected
    if (useLowercase){
      passwordChars = passwordChars.concat(lowercaseAlphabet);
    }
    // ask if uppercase letters should be included
    var useUppercase = confirm("Should the password contain uppercase leters?");

    console.log(`useUppercase is ${useUppercase}`);

    // add uppercaseAlphabet to passwordChars if selected
    if (useUppercase){
      passwordChars = passwordChars.concat(uppercaseAlphabet);
    }
    // ask if numbers should be included
    var useNumbers = confirm("Should the password contain numbers?");

    console.log(`useNumbers is ${useNumbers}`);

    // add passwordNumbers to passwordChars if selected
    if (useNumbers){
      passwordChars = passwordChars.concat(passwordNumbers);
    }
    // ask if special characters should be included
    var useSpecialCharacters = confirm("Should the password contain special characters?");

    console.log(`useSpecialCharacters is ${useSpecialCharacters}`);

    // add specialCharacters to passwordChars if selected
    if (useSpecialCharacters){
      passwordChars = passwordChars.concat(specialCharacters);
    }

    console.log(passwordChars);

    // alert and restart if all data types are refused
    if (useLowercase === 'false' && useUppercase === 'false' && useNumbers === 'false' && useSpecialCharacters === 'false'){
      alert("You must allow at least one character type.")
      generatePassword();
    }
      // generate password using selected data types
    else {
      var generatedPassword = "";
      for(var i = 0; i < passwordLength; i++){
        var randomNumber = Math.floor(Math.random()*(passwordChars.length));
        var nextChar = passwordChars[randomNumber];
        generatedPassword = generatedPassword.concat(nextChar);
        console.log(`generatedPassword at ${i} is ${generatedPassword}`);
      }
      passwordChars = [];
      return(generatedPassword);
    }
  }
  // alert and restart for invalid password lengths
  else {
    alert("You have entered an invalid password length.\nPlease enter a number between 8 and 128");
    return("Click 'Generate Password' to enter a valid password length.");
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
