function add(x,y){
  return x+y
}

function subract(x,y){
  return x-y
}
function multiply(x,y){
  return x*y
}

function isEven(number){
return number % 2 === 0 ? true :false;
}
console.log(isEven(11));



function isValidEmail(email){
return email.includes("a") ?true :false
}

console.log(isValidEmail("sdamirova2004@gmail.com"));




function happyBithday(ad,age){
  console.log(`happy bithady ${ad}`);
  console.log(`you are ${age}`);
}

happyBithday("sema","20")