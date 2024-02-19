


function generatePassword(length,includeLowercase,includeUppercase,includeNumbers,includeSymbols){
  const lowercaseChars ='qwertyuiopasdfghjklzxcvbnm';
  const uppercaseChars ='QWERTYUIOPASDFGHJKLZXCVBNM';
  const numChars ="1234567890"
  const symbolChars ="!@#$%^&*"
  let allowedChars = '';
  let password ='';
  allowedChars+=includeLowercase?lowercaseChars : "";
  allowedChars+=includeUppercase?uppercaseChars: "";
  allowedChars+=includeNumbers?numChars: "";
  allowedChars+=includeSymbols?symbolChars:"";
  if(length<=0){
  return `password length must be at least 1`
  }
  if(allowedChars.length === 0){
    return `(at least 1 set of chrachters needs to be selected)`
  }

  for(let i =0 ;i<length;i++){
    const randomIndex = Math.floor(Math.random()*allowedChars.length)
    password+=allowedChars[randomIndex]
  }
return password;

}
const passwordLength = 10;
const includeLowercase=true;
const includeUppercase=true;
const includeNumbers= false;
const includeSymbols= false;

 const password =generatePassword(passwordLength,
                                  includeLowercase,
                                  includeUppercase,
                                  includeNumbers,
                                  includeNumbers)
console.log(`generate a password ${password}`);                                  