const box = document.getElementById('box');
const age = prompt('Please enter your age!!!');
const current_year = 2024;
const yourBirthyear=(current_year - age);
box.innerHTML=(`sizin dogum iliniz ${yourBirthyear}`)
box.style.color='pink'
box.style.backgroundColor='blue'
box.style.display='flex'
box.style.width="400px"
box.style.height='200px'
box.style.margin='auto'
box.style.justifyContent="center"
box.style.alignItems='center'
box.style.textAlign='center'
box.style.transition = "0.3s"
box.style.fontSize='45px'
box.style.borderRadius='20px'


/* var həm reassign həm redeclair ola bilər
let reassign ola bilir amma reaasign ola bilmir 
const ne reassign nə redeclair ola bilmir


*/
