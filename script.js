const previousOperation=document.getElementById('user-input')
const currentOperation=document.getElementById('result')
const clearBtn=document.getElementById('clear')
const plusminusBtn=document.getElementById('plusminus')
const operatorBtn=document.querySelectorAll('[data-operator]')
const numberBtn=document.querySelectorAll('[data-number]')
const equalsBtn=document.getElementById('equals')
const percentBtn=document.getElementById('percent')
let op;

function appendNumber(number){
    if (number === '.' && currentOperation.textContent.includes('.')) return;
    currentOperation.textContent += number;
}

function operation(operator){
    if(currentOperation.textContent ==='') return;
    if(previousOperation.textContent !==''){
        compute();
    }
    op=operator;
    previousOperation.textContent=`${currentOperation.textContent} ${op}`;
    currentOperation.textContent='';

}

function compute(){
    let result;
    const pv=parseFloat(previousOperation.textContent)
    const cr=parseFloat(currentOperation.textContent)
    if (isNaN(pv) && isNaN(cr)) return;
	switch (op) {
		case '+':
			result = pv + cr;
			break;
		case '-':
			result = pv - cr;
			break;
		case 'x':
			result = pv * cr;
			break;
		case '÷':
			result = pv / cr;
			break;
		default:
			return;
	}
	currentOperation.textContent = result;
	previousOperation.textContent = '';
}
function clear(){
    currentOperation.textContent='';
    previousOperation.textContent='';
}
function plusminus(){
    currentOperation.textContent=currentOperation.textContent *-1;
}
function percentage(){
    currentOperation.textContent=currentOperation.textContent*0.01;
}

numberBtn.forEach((button) =>{
    button.addEventListener('click',()=>{
        appendNumber(button.textContent);
    });
});

operatorBtn.forEach((button) =>{
    button.addEventListener('click',()=>{
        operation(button.textContent);
    })
}
)
clearBtn.addEventListener('click',clear)
plusminusBtn.addEventListener('click',plusminus)
percentBtn.addEventListener('click',percentage)
equalsBtn.addEventListener('click',compute)
// const previousOperation = document.getElementById('user-input');
// const currentOperation = document.getElementById('result');
// const clearButton = document.getElementById('clear');
// const equalsButton = document.getElementById('equals');
// const plusMinus = document.getElementById('plusminus');
// const percent = document.getElementById('percent');
// const numberButtons = document.querySelectorAll('[data-number]');
// const operationButtons = document.querySelectorAll('[data-operator]');
// let op;

// function appendNumber(number) {
// 	if (number === '.' && currentOperation.textContent.includes('.')) return;
// 	currentOperation.textContent += number;
// }
// function chooseOperation(operation) {
// 	if (currentOperation.textContent === '') return;
// 	if (previousOperation.textContent !== '') {
// 		compute();
// 	}
// 	op = operation;
// 	previousOperation.textContent = `${currentOperation.textContent} ${op}`;
// 	currentOperation.textContent = '';
// }
// function compute() {
// 	let result;
// 	const pv = parseFloat(previousOperation.textContent);
// 	const cr = parseFloat(currentOperation.textContent);
// 	if (isNaN(pv) && isNaN(cr)) return;
// 	switch (op) {
// 		case '+':
// 			result = pv + cr;
// 			break;
// 		case '-':
// 			result = pv - cr;
// 			break;
// 		case 'X':
// 			result = pv * cr;
// 			break;
// 		case '/':
// 			result = pv / cr;
// 			break;
// 		default:
// 			return;
// 	}
// 	currentOperation.textContent = result;
// 	previousOperation.textContent = '';
// }
// function clear() {
// 	currentOperation.textContent = '';
// 	previousOperation.textContent = '';
// }
// function minus() {
// 	currentOperation.textContent = currentOperation.textContent * -1;
// }
// function percentage() {
// 	currentOperation.textContent = currentOperation.textContent * 0.01;
// }
// numberButtons.forEach((button) => {
// 	button.addEventListener('click', () => {
// 		appendNumber(button.textContent);
// 	});
// });
// operationButtons.forEach((button) => {
// 	button.addEventListener('click', () => {
// 		chooseOperation(button.textContent);
// 	});
// });
// clearButton.addEventListener('click', clear);
// equalsButton.addEventListener('click', compute);
// plusMinus.addEventListener('click', minus);
// percent.addEventListener('click', percentage);




