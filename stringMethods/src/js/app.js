  const header = document.getElementById("myHeader");
  const myInput = document.getElementById('myInput');
  const button = document.getElementById('myButton');
  const username = document.getElementById('userName');
  const  extension = document.getElementById('extension')

button.onclick = function(){

name = myInput.value


const user = name.slice(0,name.indexOf("@"))
username.textContent=name

const extension = name.slice(name.indexOf("@")+1)
extension.textContent=extension

}