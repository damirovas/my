 const minNum = 90;
const maxNum = 100;
const answer = Math.floor(Math.random()*(maxNum-minNum)+1)+minNum;

console.log(answer);
let attemps = 0;
let guess;
let running = true;

while(running){
  guess= Number(prompt("90 ile yuz arasinda bir regem yazin"));
  if(isNaN(guess)){
alert("please enter number")
  }else if(guess<minNum || guess>maxNum){
alert('please enter avalid number')
  }else{
    attemps++;
    if(guess<answer){
      alert('too low')
    }else if(guess>answer){
    alert(`too high`)
    }else(
      alert(`you win your number is ${guess} you tried ${attemps}`),
      running= false
    )
  }
} 


