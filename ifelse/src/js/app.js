const button = document.getElementById('myButton');
const input = document.getElementById('myInput');
const label = document.getElementById('myLabel');

button.onclick= function(){
  const age = input.value
  console.log(age);
 if(age>=100){
   label.textContent='salam yasli'
 }else if(age==0){
  label.textContent='salam korpe'
 }else{
  console.log("salam");
 }
}