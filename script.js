// buttons
//number
let one=document.getElementById('one');
let two=document.getElementById('two');
let three=document.getElementById('three');
let four=document.getElementById('four');
let five=document.getElementById('five');
let six=document.getElementById('six');
let seven=document.getElementById('seven');
let eight=document.getElementById('eight');
let nine=document.getElementById('nine');
let zero=document.getElementById('zero');

//signs
let plus=document.getElementById('plus');
let sub=document.getElementById('sub');
let mul=document.getElementById('mul');
let div=document.getElementById('div');
let mod=document.getElementById('mod');
let dot=document.getElementById('dot');
let pow=document.getElementById('square');

//clear
let ac=document.getElementById('ac');

//answer
let answer=document.getElementById('equalto');

//delete
let del=document.getElementById('delete');

//input box
let inputbox=document.getElementById('input_result');


//action of all buttons number
one.addEventListener('click',()=>{
    let currenttext=inputbox.innerText;
    let next=currenttext+'1';
    inputbox.innerHTML=next;
})
two.addEventListener('click',()=>{
    let currenttext=inputbox.innerText;
    let next=currenttext+'2';
    inputbox.innerHTML=next;
})
three.addEventListener('click',()=>{
    let currenttext=inputbox.innerText;
    let next=currenttext+'3';
    inputbox.innerHTML=next;
})
four.addEventListener('click',()=>{
    let currenttext=inputbox.innerText;
    let next=currenttext+'4';
    inputbox.innerHTML=next;
})
five.addEventListener('click',()=>{
    let currenttext=inputbox.innerText;
    let next=currenttext+'5';
    inputbox.innerHTML=next;
})
six.addEventListener('click',()=>{
    let currenttext=inputbox.innerText;
    let next=currenttext+'6';
    inputbox.innerHTML=next;
})
seven.addEventListener('click',()=>{
    let currenttext=inputbox.innerText;
    let next=currenttext+'7';
    inputbox.innerHTML=next;
})
eight.addEventListener('click',()=>{
    let currenttext=inputbox.innerText;
    let next=currenttext+'8';
    inputbox.innerHTML=next;
})
nine.addEventListener('click',()=>{
    let currenttext=inputbox.innerText;
    let next=currenttext+'9';
    inputbox.innerHTML=next;
})
zero.addEventListener('click',()=>{
    let currenttext=inputbox.innerText;
    let next=currenttext+'0';
    inputbox.innerHTML=next;
})

//signs
mod.addEventListener('click',()=>{
    let currenttext=inputbox.innerText;
    let next=currenttext+'%';
    inputbox.innerHTML=next;
})
plus.addEventListener('click',()=>{
    let currenttext=inputbox.innerText;
    let next=currenttext+'+';
    inputbox.innerHTML=next;
})
sub.addEventListener('click',()=>{
    let currenttext=inputbox.innerText;
    let next=currenttext+'-';
    inputbox.innerHTML=next;
})
div.addEventListener('click',()=>{
    let currenttext=inputbox.innerText;
    let next=currenttext+'/';
    inputbox.innerHTML=next;
})
mul.addEventListener('click',()=>{
    let currenttext=inputbox.innerText;
    let next=currenttext+'*';
    inputbox.innerHTML=next;
})
pow.addEventListener('click',()=>{
    let currenttext=inputbox.innerText;
    let next=currenttext+'**';
    inputbox.innerHTML=next;
})
dot.addEventListener('click',()=>{
    let currenttext=inputbox.innerText;
    let next=currenttext+'.';
    inputbox.innerHTML=next;
})
//clear
ac.addEventListener('click',()=>{
    let currenttext=inputbox.innerText;
    inputbox.innerHTML="";
})
//back
del.addEventListener('click',()=>{
    let currenttext=inputbox.innerText;
    let lastCharacters = currenttext.substring(-1,currenttext.length-1);
    inputbox.innerHTML=lastCharacters;
})


equalto.addEventListener('click',()=>{
    // Get the value from the input field
    let currenttext=inputbox.innerText;
    // Use eval() to evaluate the expression
    try {
      var result = eval(currenttext);
    
      // Check if the result is a valid number
      if (!isNaN(result)) {
        inputbox.textContent =result;
      } else {
        inputbox.textContent = 'Enter values';
      }
    } catch (error) {
      // Handle syntax errors or other issues with eval()
      alert('enter the valid number');
    }
})



