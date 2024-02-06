const subbox = document.getElementById('subbox')
const kapital = document.getElementById('kapital')
const abb = document.getElementById('abb')
const pasha = document.getElementById('pasha')
const submit = document.getElementById('submit')
const subp = document.getElementById('subp')
const forcard = document.getElementById('forcard')


submit.onclick= function(){
  if(subbox.checked){
    subp.textContent=`you're subscribed our chanel`
  }else{
    subp.textContent=`you're not subscribe our channel`
  }

  if(kapital.checked){
  forcard.textContent=`your card is kapitalcard`
  }else if(abb.checked){
    forcard.textContent=`your card is abb`
  }else if(pasha.checked){
    forcard.textContent=`your card is pasha`
  }
}