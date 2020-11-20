let from_currency = document.getElementById('from_currency');
let from_amount = document.getElementById('from_amount');
let to_currency = document.getElementById('to_currency');
let to_amount = document.getElementById('to_amount');
let swap = document.getElementById('swap');
let rateEl = document.getElementById('rate');

//Adding event listeners
from_currency.addEventListener('change', calculate);
from_amount.addEventListener('input', calculate);
to_currency.addEventListener('change', calculate);
to_amount.addEventListener('input', calculate);

swap.addEventListener('click', () => {
    const temp = from_currency.value;
    from_currency.value = to_currency.value;
    to_currency.value = temp;
    calculate();
})

//To calculate the exchange values
function calculate() {
    const from_value = from_currency.value;
    const to_value = to_currency.value;
    
    fetch(`https://api.exchangerate-api.com/v4/latest/${from_value}`)
    .then(res =>{
        return res.json();
    } )
    .then(res => {
        const rate = res.rates[to_value];
        rateEl.innerText = `1 ${from_value} = ${rate} ${to_value}`;
        to_amount.value = (from_amount.value * rate).toFixed(2) ;
    })
    }
    
    calculate();