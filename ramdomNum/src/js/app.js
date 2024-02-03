const myButton = document.getElementById('myButton');
const myLabel = document.getElementById('myLabel');

const min=1;
const max=100;


myButton.onclick= function(){
  
  const randomNum = Math.floor(Math.random()*max)+min
  myLabel.textContent= randomNum
}