const inreasebtn= document.getElementById('inreasebtn');
const resetbtn =document.getElementById("resetbtn");
const decrasebtn =document.getElementById('decrasebtn');
const myLabel= document.getElementById('myLabel');
let count = 0;

inreasebtn.onclick=function(){

  count = count -2

  myLabel.textContent=count

}
resetbtn.onclick=function(){

  count=0

  myLabel.textContent=count

}

decrasebtn.onclick=function(){

  count = count +2

  myLabel.textContent=count

}