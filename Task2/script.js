const display=document.getElementById("display");

function Displaynum(input){
    display.value +=input;
}

function clearnum(){
    display.value='';
}
function calculate() {
    var num1 = document.getElementById('display').value;
    var num2 = eval(num1);
    document.getElementById('display').value = num2;
 }