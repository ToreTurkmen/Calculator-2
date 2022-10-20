// defined an html elemnets
let resultScreen = document.getElementById('results');

let calcBtns = document.getElementsByClassName('button')

//loop through all the buttons
for( var i = 0; i < calcBtns.length; i++){
  let btn = calcBtns[i];
  btn.addEventListener('click', function(){
    let currentButton = btn.innerHTML;
    let currentButtonId = btn.getAttribute('id');
    if(!currentButtonId) {
      updateScreen(currentButton);

    } else {
      checkOperation(currentButton);
    }
    
  })
}

//update calc screen
function updateScreen(str){
  if(resultScreen.innerText === '0'){
    resultScreen.innerText = str;
  } else{
    resultScreen.innerText += str;
  }
  
}
let firstNumber;
let oprCharacter;
let lastNumber;
let calcResult;

//check operation 
function checkOperation(opr){
  if(opr !== '=' && opr !== 'C'){
    updateScreen(opr);
      firstNumber = resultScreen.innerText.slice(0, -1);
      oprCharacter = resultScreen.innerText.slice(-1);
     
      
    
    } else {
      if(opr === 'C') {
        resetScreen();
      }
      

      if(opr === '='){
        count()
  
      }
    
  }
}

//counting
function count(){
  lastNumber = resultScreen.innerText.split(oprCharacter)[1];
  
  if(oprCharacter === '+'){
    calcResult = Number(firstNumber) + Number(lastNumber);
    

  } else if(oprCharacter === '-'){
    calcResult = Number(firstNumber) - Number(lastNumber);
    

  } else if(oprCharacter === '*'){
    calcResult = Number(firstNumber) * Number(lastNumber);
    

  } else if(oprCharacter === '/'){
    calcResult = Number(firstNumber) / Number(lastNumber);
   

  } 
  
  resultScreen.innerText = calcResult;
}


//reset screen

function resetScreen(){
  resultScreen.innerText = 0;
}