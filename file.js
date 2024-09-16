//operator functions
function add(a,b){
    return a+b;
};
function subtract(a,b){
    return a-b;
};
function multiply(a,b){
    return a*b;
}
function divide (a,b){
    return a/b;
}
//clear input fields 
function ClearFields() {
    document.getElementById("operand1").value = "";
    document.getElementById("operand2").value = "";
}
// Function to set value to input box
function appendValueToSelectedInput(value) {
    const activeElement = document.activeElement;

    // Check if the active element is an input box
    if (activeElement && activeElement.tagName === 'INPUT') {
        activeElement.value += (activeElement.value ? ', ' : '') + value;
    } else {
        alert('Please select an input box first.');
    }
}
document.getElementById('btn 1').addEventListener('click', () => {
    appendValueToSelectedInput('1');
     
});
document.getElementById('2').addEventListener('click', () => {
    setValueToInput('2');
});
document.getElementById('3').addEventListener('click', () => {
    setValueToInput( '3');
});
document.getElementById('4').addEventListener('click', () => {
    setValueToInput( '4');
});
document.getElementById('5').addEventListener('click', () => {
    setValueToInput( '5');
});
document.getElementById('6').addEventListener('click', () => {
    setValueToInput('6');
});
document.getElementById('7').addEventListener('click', () => {
    setValueToInput('7');
});
document.getElementById('8').addEventListener('click', () => {
    setValueToInput('8');
});
document.getElementById('9').addEventListener('click', () => {
    setValueToInput('9');
});
document.getElementById('0').addEventListener('click', () => {
    setValueToInput('0');
});
