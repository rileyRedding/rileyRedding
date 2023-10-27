
let counterDisplayElem = document.querySelector('.counter-display');
let counterPlusElem = document.querySelector('.counter-plus');
let counterMinusElem = document.querySelector('.counter-minus');
let counterResetElem = document.querySelector('.counter-reset');
let counterX2Elem = document.querySelector('.counter-x2');
let counterDivideElem = document.querySelector('.counter-divide');
let count =0;

updateDisplay();
counterPlusElem.addEventListener("click",()=>{
    count++;
    updateDisplay();

});
counterMinusElem.addEventListener("click",()=>{
    count--;
    updateDisplay();
});
counterResetElem.addEventListener("click",()=>{
    count=0;
    updateDisplay();
});
counterX2Elem.addEventListener("click",()=>{
    count=count *2;
updateDisplay();
});
counterDivideElem.addEventListener("click",()=>{
    count=count /2;
updateDisplay();
});


function updateDisplay(){
    counterDisplayElem.innerHTML = count;

};

