const x = document.getElementById('x');
const y = document.getElementById('y');
const button = document.getElementById('myButton');
const label = document.getElementById("myLabel");


button.onclick = function(){
const xOxu= Number(x.value)
const yOxu = Number(y.value)

  if(xOxu>0 && yOxu>0){
   label.textContent="birinci rub"
  }else if(xOxu<0 && yOxu>0){
    label.textContent="dorduncu rub"
  }else if(xOxu<0 && yOxu<0){
    label.textContent="ucuncu rub"
  }else if(xOxu<0 && yOxu>0){
    label.textContent="ikinci rub"}
  else(
    label.textContent="koordinat baslangici"
  )
}



// const y= 21;
// const x= 34


// switch (true) {
//   case x>0 && y>0:
//     console.log("birinci reb");
//     break;
//   case x<0 && y<0:
//     console.log("ucuncu reb");
//     break;

//   default:
//     console.log("koordinat baslangici");
//     break;
// }