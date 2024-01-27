function textWriter(id,text,color,fontsize){
  const qutu = document.getElementById(id)
  qutu.innerText=text
  qutu.style.backgroundColor=color
  qutu.style.fontSize=fontsize
}
textWriter('box',"salam","red",'32px')
textWriter('box2',"salam","blue",'45px')




const qutum = document.getElementById('regem_box');

function regem(a, b) {
  const hasil = a * b;
  console.log(hasil);  
  return hasil;
}

const result = regem(Number(prompt("a")), Number(prompt('b')));
qutum.innerText = result;

