const textBox = document.getElementById('textBox');
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsium = document.getElementById("toCelsium"); 
const result = document.getElementById('result');
const button = document.getElementById('button');
let temp;

button.onclick = function() {
  if (toFahrenheit.checked) {
    temp = Number(textBox.value);
    temp = temp.toFixed(1) *9/5+32
    result.textContent=temp+'f'
    
  } else if (toCelsium.checked) { 
    temp = Number(textBox.value);
    temp = (temp-32)*(5/9)
    result.textContent=temp.toFixed(1)+'c'
  } else {
    result.textContent = "Select a unit";
  }
}