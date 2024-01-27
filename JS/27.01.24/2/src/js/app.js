const box = document.getElementById('box')
const currentYear=prompt('zehmet olmasa ili daxil edin');
const birthyear = prompt('zehmet olmasa  dogum ilinizidaxil edin');

const age= Number(currentYear-birthyear)

if(age<10){
    box.innerHTML=(`${age} siz usaqsiniz`)
}
else if(age<18){
  box.innerHTML=(`${age} siz  yeniyetmesiniz`)
}
else{
  box.innerHTML=('zahmet olmas dogru daxil edin')
}