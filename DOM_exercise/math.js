function addition(){
    const number1=document.getElementById('numberOne').value;
    const number2=document.getElementById('numberTwo').value;
    const result=document.getElementById('output');
    if(number1==='' && number2===''){
        showAlert('Enter the numbers','error');
    } else{
    var output=parseInt(number1)+parseInt(number2);
    result.value=output;
    showAlert('Added Successfully', 'success');

    }
   
}
function subtraction(){
    const number1=document.getElementById('numberOne').value;
    const number2=document.getElementById('numberTwo').value;
    const result=document.getElementById('output');
    if(number1==='' && number2===''){
        showAlert('Enter the numbers','error');
    } else{
    var output=number1-number2;
    result.value=output;
    showAlert('Subtracted Successfully', 'success');
    }
}
function multiplication(){
    const number1=document.getElementById('numberOne').value;
    const number2=document.getElementById('numberTwo').value;
    const result=document.getElementById('output');
    if(number1==='' && number2===''){
        showAlert('Enter the numbers','error');
    } else{
    var output=number1*number2;
    result.value=output;
    showAlert('Multiplied Successfully', 'success');

    }
}
function division(){
    const number1=document.getElementById('numberOne').value;
    const number2=document.getElementById('numberTwo').value;
    const result=document.getElementById('output');
    if(number1==='' && number2===''){
        showAlert('Enter the numbers','error');
    } else{
    var output=number1/number2;
    result.value=output;
    showAlert('Divided Successfully', 'success');

    clearFields();
    }
}

function clearFields(){
    document.getElementById('numberOne').value = '';
    document.getElementById('numberTwo').value = '';
}

function showAlert(message,  className){
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.getElementById('body');
    const form= document.getElementById('math-form');
    container.insertBefore(div,form);

    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 1000);
}