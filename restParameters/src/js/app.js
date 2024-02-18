// function openFridge(...foods){
//   console.log(...foods);
// }
// function getfood(...foods){
// return foods
// }

// const food1 ="pizza"
// const food2 ="burger"
// const food3 ="hotdog"
// const food4 ="dolma"

// const foods =getfood(food1,food2,food3,food4)
// console.log(...foods);



// function sum(...numbers){
//   let result=0
//   for(let number of numbers){
// result+=number
//   }
//   return result
// }
// const total = sum(2,4,4)
// console.log(total);

function combinestrings(...strings){
  return strings.join(" ")
}
const fullName = combinestrings("mrs","damirova","sema","111")
console.log(fullName);