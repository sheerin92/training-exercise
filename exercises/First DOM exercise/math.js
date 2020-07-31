function addition(){
    const number1=document.getElementById('numberOne').value;
    const number2=document.getElementById('numberTwo').value;
    const result=document.getElementById('output');
    if(number1==='' && number2===''){
        alert("Enter the numbers");
    } else{
    var output=parseInt(number1)+parseInt(number2);
    result.value=output;
    }
   
}
function subtraction(){
    const number1=document.getElementById('numberOne').value;
    const number2=document.getElementById('numberTwo').value;
    const result=document.getElementById('output');
    if(number1==='' && number2===''){
        alert("Enter the numbers");
    } else{
    var output=number1-number2;
    result.value=output;
    }
}
function multiplication(){
    const number1=document.getElementById('numberOne').value;
    const number2=document.getElementById('numberTwo').value;
    const result=document.getElementById('output');
    if(number1==='' && number2===''){
        alert("Enter the numbers");
    } else{
    var output=number1*number2;
    result.value=output;
    }
}
function division(){
    const number1=document.getElementById('numberOne').value;
    const number2=document.getElementById('numberTwo').value;
    const result=document.getElementById('output');
    if(number1==='' && number2===''){
        alert("Enter the numbers");
    } else{
    var output=number1/number2;
    result.value=output;
    }
}
