

const myHeader = document.getElementById('myHeader')


function sum(callback,x,y){
  let result = x*y;
  callback(result);

}



function displayConsole(result){
console.log(result);
}

sum(displayPage,4,6)


function displayPage(result){
myHeader.textContent=result
}