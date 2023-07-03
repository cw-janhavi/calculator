const displayText = document.getElementsByClassName('display-text');
const buttons = document.querySelectorAll('.num-button');
const previousText = document.querySelector('.previous-text')
const recentText = document.querySelector('.recent-text')

const toggleButton = document.querySelector('.checkbox-toggle');
const slider = document.querySelector('.slider');
const toggleBackground = document.querySelector('.switch');

const container = document.querySelector('.container');
const allDivs = document.querySelectorAll('div');
const allNumButtons = document.querySelectorAll('button');

toggleButton.addEventListener('click', (e)=>{
    if(e.target.checked == true){
        // dark mode
        toggleBackground.classList.remove("neumorphic");
        slider.classList.remove("in-neumorphic-dark");

        toggleBackground.classList.add("neumorphic-dark");
        slider.classList.add("in-neumorphic-dark");
        
        container.style.backgroundColor = '#0F0939';

        allDivs.forEach(div => {
            if(div.classList.contains('neumorphic')){
                    div.classList.remove('neumorphic');
                    div.classList.add('neumorphic-dark');
                }
            if(div.classList.contains('in-neumorphic')){
                div.classList.remove('in-neumorphic');
                div.classList.add('in-neumorphic-dark');
            }
        });

        allNumButtons.forEach(button => {
            if(button.classList.contains('neumorphic')){
                    button.classList.remove('neumorphic');
                    button.classList.add('neumorphic-dark');
                }
            if(button.classList.contains('in-neumorphic')){
                button.classList.remove('in-neumorphic');
                button.classList.add('in-neumorphic-dark');
            }
        });
    }
    else{
        //light mode
        toggleBackground.classList.remove("neumorphic-dark");
        slider.classList.remove("in-neumorphic-dark");

        toggleBackground.classList.add("neumorphic");
        slider.classList.add("in-neumorphic-dark");
    }
})


const clearButton = document.querySelector('.clear-all-button');
const multiplyButton = document.querySelector('.multiply-button');
const divideButton = document.querySelector('.divide-button');
const backspaceButton = document.querySelector('.backspace-button');
const minusButton = document.querySelector('.minus-button');
const plusButton = document.querySelector('.plus-button');
const equalToButton = document.querySelector('.equal-to-button');
const numericButtons = document.querySelectorAll('.numeric-button');

let expression = [];
let result = 0;
let expressionString = '';
let currentButton;
let currOperand = '';
let prevOperand = '';
let operator = '';

for(i=0; i<numericButtons.length; i++){
    currentButton = numericButtons[i];
    currentButton.addEventListener('click', (e)=>{
        currOperand += e.target.value;
        console.log('currOperand: ' + currOperand + ', prev operand:  ' + prevOperand);
        if(currOperand != '' && prevOperand !=''){
            result = operation(currOperand, prevOperand, operator)
            console.log('result return in: ' + result);
            prevOperand = result;
            recentText.innerText = result;
            //console.log('return prev: ' + prevOperand)
        }
    })
}

function operation(currOperand, prevOperand, operator){
    console.log('in operation with: curr = ' + currOperand + ", prev = " + prevOperand + ", operator: "+ operator)
    let computation;
    currOperand = Number(currOperand);
    prevOperand = Number(prevOperand);
    switch(operator){
        case '+':
            computation = prevOperand + currOperand;
            break;
        case '-':
            computation = prevOperand - currOperand;
            break;
        case '*':
            computation = prevOperand * currOperand;
            break;
        case '/':
            computation = prevOperand / currOperand;
            break;
        case '%':
            computation = prevOperand % currOperand;
            break;
    }
    console.log('operation res: ' + computation)
    return computation;
}

multiplyButton.addEventListener('click', (e)=>{
    operator = '*';
    if(prevOperand == ''){
        prevOperand = currOperand
    }
    currOperand = '';
    console.log('multiply clicked: prev - ' + prevOperand + ', curr: ' + currOperand)
})

divideButton.addEventListener('click', (e)=>{
    operator = '/';
    if(prevOperand == ''){
        prevOperand = currOperand
    }
    currOperand = '';
    console.log('divide clicked: prev - ' + prevOperand + ', curr: ' + currOperand)
})

plusButton.addEventListener('click', (e)=>{
    operator = '+';
    if(prevOperand == ''){
        prevOperand = currOperand
    }
    currOperand = '';
    console.log('add clicked: prev - ' + prevOperand + ', curr: ' + currOperand)
})

minusButton.addEventListener('click', (e)=>{
    operator = '-';
    if(prevOperand == ''){
        prevOperand = currOperand
    }
    currOperand = '';
    console.log('minus clicked: prev - ' + prevOperand + ', curr: ' + currOperand)
})


for(i=0; i<buttons.length; i++){
    //console.log(buttons[i]);
    buttons[i].addEventListener('click', (e)=>{
        //console.log(e.target.classList);
        e.target.classList.remove('neumorphic');
        e.target.classList.add('in-neumorphic');
        setTimeout(()=>{
            e.target.classList.remove('in-neumorphic');
            e.target.classList.add('neumorphic')
        }, 300)
        //console.log(e.target.value)
        expression.push(e.target.value);
        expressionString += e.target.value;
        previousText.innerText = expressionString;
        //recentText.innerHTML = ;

    })
}

