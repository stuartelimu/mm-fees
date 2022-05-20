const AMOUNTELM = document.querySelector('#amount');
const FORM = document.querySelector('#form')

const TABLE = document.querySelector('.table')
const TAX = document.querySelector('#tax')
const CHARGE = document.querySelector('#charge')

FORM.addEventListener('submit', e => e.preventDefault());



AMOUNTELM.focus();

AMOUNTELM.addEventListener('keypress', e => {
    // return (e.charCode !=8 && e.charCode ==0 || (e.charCode >= 48 && e.charCode <= 57))
})

AMOUNTELM.addEventListener('input', e => {
    console.log(e.target.value)
    
    let amount = e.target.value;
    let am = amount.replaceAll(',', '');
    AMOUNTELM.value = am.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    if(e.target.value !== '') {
        TABLE.classList.remove('d-none');
        if(parseInt(am) > 0 && parseInt(am) <= 2500) {
            CHARGE.textContent = 330;
            TAX.textContent = parseInt(am) * 0.005;
        }
        else {
            CHARGE.textContent = 0;
            TAX.textContent = 0;
        }
    } else {
        TABLE.classList.add('d-none');
    }
})