const myHeader = document.getElementById('myHeader');
const maxNum = document.getElementById("maxNum");
const minNum = document.getElementById('minNum');
const myButton = document.getElementById('myButton');
const myLabel = document.getElementById('myLabel');


myButton.onclick= function(){

  const max = maxNum.value
  const min = minNum.value

  randomNum = Math.floor(Math.random()*max);
  console.log(randomNum);
}
