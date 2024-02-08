const myHeader = document.getElementById('myHeader');
const myInput = document.getElementById('myInput');
const myLabel = document.getElementById('myLabel');
const myButton  = document.getElementById('myButton');
let gradeLeter;
let score = myInput.value


myButton.onclick = function(){
  
  switch(true){
     case score >=90:
      gradeLeter="a"
      
      break;
     case score >=80:
      gradeLeter="b"
      
      break;
     case score >=70:
      gradeLeter="c"
      
      break;
     case score >=60:
      gradeLeter="d"
      
      break;
     case score >=50:
      gradeLeter="e"
      
      break;
    default:
      myLabel.textContent= "fail the exam !!!"
      
  }


}



