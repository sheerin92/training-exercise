//Listen for submit
document.getElementById('math-form').addEventListener('submit', calculateResults);

//Calculate Results
function calculateResults(e){
    console.log('Calculating...');
    //UI Vars
    const number1=document.getElementById('numberOne');
    const number2=document.getElementById('numberTwo');
    const result=document.getElementById('output');

    const firstNo=parseFloat(number1.value);
    const secondNo=parseFloat(number2.value);

    //compute the operations
    const add = firstNo + secondNo;
    const subtract= firstNo - secondNo;
    const multiply= firstNo * secondNo;
    const divide= firstNo / secondNo;

    if(isFinite(add)){
        result.value= add.toFixed(2);
    }
    if(isFinite(subtract)){
        result.value= subtract.toFixed(2);
    }
    if(isFinite(multiply)){ 
        result.value= multiply.toFixed(2);
    }
    if(isFinite(divide)){
        result.value= divide.toFixed(2);
        
    } else{
        console.log('Please Check the Numbers');
    } 
    e.preventDefault();
}