const userInfo = document.querySelector('#inputText')
const CalculateButton = document.querySelector('#CalculateButton')
const infoList = document.querySelector('#infoList')

CalculateButton.addEventListener('click', function () {
   let userValue = userInfo.value.trim();
  if (userValue !== '') {
     
    if ( isNaN(userValue)) {
      alert("Sadece Sayi Giriniz...");
  }
  else if (!isNaN(userValue)){
    const liElement = document.createElement('li')
    let Sonuc1 = (userValue*(2.5)/5);
    liElement.innerHTML = `Bupivacaine icin ${userValue} kg bir hastaya en fazla ${Sonuc1}cc verilebilir. Bupivacaine icin adrenalin etkisini uzatmaz` ;
    infoList.append(liElement); 
    liElement.classList.add('animate__animated', 'animate__backInLeft');
    const liElement2 = document.createElement('li')
    let Sonuc2 = (userValue*(5)/20);
  let Sonucadrenalinli2 = (userValue*(8)/20);
  liElement2.innerHTML = `Prilocaine icin ${userValue} kg bir hastaya en fazla ${Sonuc2}cc verilebilir, adrenalinle beraber kullanildiginda en fazla ${Sonucadrenalinli2}cc verilebilir` ;
  infoList.append(liElement2); 
    liElement2.classList.add('animate__animated', 'animate__backInRight');
    const liElement3 = document.createElement('li')
  let Sonuc3 = (userValue*(5)/20);
  let Sonucadrenalinli3 = (userValue*(7)/20);
  liElement3.innerHTML = `Lidocaine icin ${userValue} kg bir hastaya en fazla ${Sonuc3}cc verilebilir, adrenalinle beraber kullanildiginda en fazla ${Sonucadrenalinli3}cc verilebilir` ;
    infoList.append(liElement3); 
    liElement3.classList.add('animate__animated', 'animate__backInDown');
  }
    
    userInfo.value ='';
    
  }   
  
})


